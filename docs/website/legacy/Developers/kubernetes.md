---
title: Deploying to Kubernetes
description: Club Website Developer Kubernetes guide
sidebar_position: 9
---

# Deploying to Kubernetes

:::danger OUTDATED
This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See [index](/docs/website/) for the latest information.
:::

Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform used for automating the deployment, scaling, and management of containerized applications. With Kubernetes, you can set up a configuration file that automatically deploys the website's infrastructure in seconds.

Kubernetes is based on Docker, an open-source platform and a set of tools for creating, deploying, and managing containerized applications. To deploy the website on Kubernetes, you'll first need to build the website's container image.

## Prerequisites
1. Complete the [Getting Started](/docs/website/legacy/Developers/introduction) guide.
2. [Docker](https://www.docker.com/): build the website container image.
3. Kubernetes Cluster & Kubectl: Use a cloud hosting platform or [launch a Kubernetes node on Docker](https://docs.docker.com/desktop/kubernetes/).

## Building the Docker image
:::danger Artifact Registry
If you're using a SaaS/cloud solution, you'll need to upload the container image to your project's artifact registry.
:::

Navigate to the source directory
```bash
cd Club_Website_2
```

Run docker build:
```bash
docker build --tag osc-website .
```

## Configuring Kubernetes

You can deploy containers on Kubernetes using yaml files. Yaml is a file format similar to JSON, you can read more about it [here](https://www.educative.io/blog/yaml-tutorial). The website YAML file is documented below.

```yml
apiVersion: v1
kind: Secret
# The secrets here correspond to the website's environment variables.
# These are documented at https://docs.ufosc.org/docs/website/Developers/configuration
data:
  secret:    [YOU-SECRET-HERE]
  smtp-user: [YOUR-SMTP-USER]
  smtp-pass: [YOUR-SMPT-PASS]
  captcha:   [YOUR-CAPTCHA-KEY] # Optional
  email:     [YOUR-CONTACT-FORM-EMAIL]
metadata:
  name: osc-website-secrets
  labels:
    app: osc-website
---
# A volume is a persistent store of data.
# This is the volume for the website database.
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: osc-website-volume-db
  labels:
    app: osc-website
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
	  # The amount of persistent storage to allocate.
      storage: 1Gi
---
# A deployment provides a declarative way to describe the desired state of
# an application. In this case, the desired state is to have at least 1
# replica of Mongodb and the OSC Website running on the node.
apiVersion: apps/v1
kind: Deployment
metadata:
  name: osc-website
  labels:
    app: osc-website
spec:
  # The replicas property specifies how many copies of this deployment
  # to try to launch. Generally, more replicas mean the app scales to
  # more users.
  replicas: 1
  selector:
    matchLabels:
      app: osc-website
  template:
    metadata:
      labels:
        app: osc-website
    spec:
      containers:
        - name: mongodb
          image: mongo
          args: ["--dbpath", "/data/db"]
          volumeMounts:
            - name: osc-website-volume-db
              mountPath: "/data/db/"
        - name: club-website
		  # If you're using a cloud provider, you'll need to modify the image
		  # name to reference your artifact registry.
          image: club-website:latest
		  # Environment variable configurations, as documented here:
		  # https://docs.ufosc.org/docs/website/Developers/configuration
          env:
            - name: MONGO_URI
              value: "mongodb://127.0.0.1:27017"
            - name: NODE_ENV
              value: "production"
            - name: RATE_LIMIT_MAX
              value: "150"
            - name: RATE_LIMIT_TIMEOUT
              value: "1"
            - name: SECRET
              valueFrom:
                secretKeyRef:
                  name: osc-website-secrets
                  key: secret
            - name: SMTP_USER
              valueFrom:
                secretKeyRef:
                  name: osc-website-secrets
                  key: smtp-user
            - name: SMTP_PASS
              valueFrom:
                secretKeyRef:
                  name: osc-website-secrets
                  key: smtp-pass
            - name: ADMIN_EMAIL
              valueFrom:
                secretKeyRef:
                  name: osc-website-secrets
                  key: email
            - name: CACHE_INTERVAL
              value: "480"
            - name: CAPTCHA_SECRET
              valueFrom:
                secretKeyRef:
                  name: osc-website-secrets
                  key: captcha
          volumeMounts:
            - name: osc-website-volume-uploads
              mountPath: "/ufosc/app/uploads/"
      volumes:
        - name: osc-website-volume-db
        - name: osc-website-volume-uploads
---
# A service exposes the 3002 port (default website port) of the osc-website
# deployment. If you're running Kubernetes locally and you specify a nodePort,
# the website will be accessible at http://localhost:nodePort.
apiVersion: v1
kind: Service
metadata:
  name: osc-website-service
  labels:
    app: osc-website
spec:
  type: NodePort
  selector:
    app: osc-website
  ports:
    - protocol: TCP
      port: 3002
      targetPort: 3002
      # nodePort: 30000
---
# An ingress redirects traffic from your cluster's endpoint to
# port 3002 of the website deployment. It is generally not required
# in locally hosted environments.
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: osc-website-ingress
  labels:
    app: osc-website
spec:
  defaultBackend:
    service:
      name: osc-website-service
      port:
        number: 3002
```

### Applying the YAML configuration
```bash
kubectl apply -f your_file.yml
```

If you're using a cloud platform, ensure that kubectl is configured to target your remote cluster.

### GKE-specific resources
:::danger GKE Only
These options only apply to clusters managed by Google Kubernetes Engine (GKE).
:::
Additional resources for Google Kubernetes engine.

```yml
# The ManagedCertificate resource instructs Google Cloud to
# generate and sign an SSL certificate for the specified domains.
apiVersion: networking.gke.io/v1
kind: ManagedCertificate
metadata:
  name: osc-website-cert
  labels:
    app: osc-website
spec:
  domains:
    - ufosc.org
---
# The GKE FrontendConfig is configured to redirect non-HTTPS
# traffic to the HTTPS endpoint.
apiVersion: networking.gke.io/v1beta1
kind: FrontendConfig
metadata:
 name: osc-website-fe-config
spec:
  sslPolicy: gke-ingress-ssl-policy
  redirectToHttps:
    enabled: true
---
# Same as before, but metadata.annotations specifies which
# Google ingress controller, static IP, and certificate to
# deploy the site with.
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: osc-website-ingress
  labels:
    app: osc-website
  annotations:
    kubernetes.io/ingress.class: "gce"
    kubernetes.io/ingress.global-static-ip-name: oscwebsite
    networking.gke.io/managed-certificates: osc-website-cert
    networking.gke.io/v1beta1.FrontendConfig: osc-website-fe-config
spec:
  defaultBackend:
    service:
      name: osc-website-service
      port:
        number: 3002
```

#### Static IP

The configuration above requires registering a static IP address. A static IP address makes deployment considerably easier, since the website won't have to be exposed on (volatile) node IP addresses.

See Google's documentation [here](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address).

#### SSL Ingress Policy

Additionally, the GKE configuration depends on a registered SSL ingress policy. SSL policies specify the set of SSL features that Google Cloud load balancers use when negotiating SSL with clients.

See Google's documentation [here](https://cloud.google.com/load-balancing/docs/use-ssl-policies).

## Creating an Admin

The Kubernetes config sets up the website with an empty database, which makes logging in to the site is impossible. This is solved by connecting to the Mongo container and calling mongosh to add the first user. This process should only be done once, additional admins can be added through the [admin dashboard](/docs/website/legacy/admin).

First, get a list of all pods
```bash
kubectl get pods
```

The command should respond with something like this:
```bash
NAME                          READY   STATUS    RESTARTS   AGE
osc-website-c5986c5ff-zdbxk   2/2     Running   0          4h55m
```

You'll be connecting to one of the pods specified by the output of the `kubectl get pods` command. Note down one of the pod names assosciated with the osc-website deployment (if you have multiple replicas, you can choose any pod just as long as its part of the osc-website deployment resource).

Connect using the following command (replace [YOUR-POD-NAME-HERE] with the pod name from above):
```bash
kubectl exec --stdin --tty [YOUR-POD-NAME-HERE] -- /bin/bash
```

Once connected, open the mongosh console by typing `mongosh`. Then, paste the following:
```bash
use test
```

```bash
db.users.insertOne({"username": "admin","password": {"hash": "�a2O���w��\u0004��Ȳ��7\u000fM�2\u0011�<\u0015z\u0016\u0019E*��cЮ\u0010\u001e\u0015���ւ)�Ne��G�VH/��9�����q\u0003�\t��פ}���i��Y�\u00125��d3�V�\t6������W;�~���?A��\u001c��X8��/\u0012��\u0007)t��9\u0001<","salt": "4vRF0ZTMELWmPGMpAgy6hsiJm/pOUlgPYFk+faK+yaFv/x0+lITG+4kX/y5bXudjMdGWLN2PV8UhH5s5dRLPaGgh2qwrbocDqEdyvbqSqVPAQxKIwFSytoRySYfKZJdCgK970UmrPDyGmoAIRZ/DN8YZ4fTirkSAeRlTWLSbyfg="},"fullName": "admin","role": "admin","isAdmin": true,"date": {"$date": "2023-09-17T15:53:18.529Z"},"__v": 0})
```

The command above adds a user with the username `admin` and password `123456`. You should now reset the admin's password using the [admin dashboard](/docs/website/legacy/admin) as soon as possible to prevent attackers from logging in with the default credentials. Resetting the password through the admin dashboard should reset the password salt as well.

Finally, type `exit` and press enter to exit the mongosh console. Type `exit` and press enter once again to close the connection to the pod.
