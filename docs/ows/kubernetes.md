---
title: Kubernetes
description: OWS Kubernetes
sidebar_position: 3
---

# Kubernetes

OpenWebServices is deployed on Kubernetes. This section describes the process for provision deployments for the OAuth2, dashboard, WebSMTP, and [Club Website](https://github.com/ufosc/Club_Website_2) microservices. After installing the repository, you may find deployment scripts in the `deploy` directory.

## Dependencies
1. [Docker](https://www.docker.com/).
2. [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine?hl=en) (GKE)
   * Alternatively, you may use a local K8s environment like [Minikube](https://minikube.sigs.k8s.io/docs/) or use the Kubernetes environment that ships with [Docker Desktop](https://docs.docker.com/desktop/kubernetes/).
3. [GCloud CLI](https://cloud.google.com/sdk/gcloud) (if using GKE).

## Building

Before applying any Kubernetes script, you'll need to generate artifacts from each package. If you're using docker, this is accomplished by navigating to the desired directory (in this case, one of: OAuth2, dashboard, or the Club_Website_2 repository) and running:
```bash
docker build --tag <ARTIFACT_NAME> .
```

Where `<ARTIFACT_NAME>` is the name you wish to attach with the associated project (e.g. "oauth2-dashboard" or "oauth2-server").

### Submitting Artifacts to Google Cloud
Assuming you've installed [gcloud CLI](https://cloud.google.com/sdk/gcloud) and have a [cluster already set up](https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster), the first step to submitting a build is to create an artifact repository:
```bash
gcloud artifacts repositories create <REPO-NAME> --project <PROJECT-NAME> --repository-format=docker --location=<CLUSTER-LOCATION> --description="Docker repository"
```

Where `<REPO-NAME>` will be the name of your new repository (can be anything you want), `<PROJECT-NAME>` is the name of the Google Cloud project associated with your cluster, and `<CLUSTER-LOCATION>` should generally be set to the same location as your cluster: e.g. `us-central1`, `us-west2`, etc.

Then, navigate to each of the Oauth2, dashboard directories, as well as the Club_Weebsite_2 repository, and run the following command for each:
```bash
gcloud builds submit --region=<CLUSTER-LOCATION> --tag us-central1-docker.pkg.dev/>PROJECT-NAME>/<REPO-NAME>/<PROJECT-NAME>:<PROJECT-TAG>
```

Where `<CLUSTER-LOCATION>`, `<PROJECT-NAME>`, and `<REPO-NAME>` must specify the same values as in the repository-creation command.`<PROJECT-NAME>` and `<PROJECT-TAG>` are the names you give to the underlying artifact, e.g. `osc-website:v1.0.1` or `oauth2-server:v0.0.1`, etc.

## Secrets
Secrets are specified in the `deploy/secrets.yml` file. They are omitted, but the document format is preserved. When deploying, you'll need to specify your own values (which must be base64 encoded).

## Obtaining an IP Address
The scripts are configured such that they expect a global static IP address. This may be accomplished as follows:
```bash
gcloud compute addresses create <IP-NAME> --global
```

Where `<IP-NAME>` can be any name you wish to give it (note, this has no effect on the IP address, it will be randomly assigned by Google). It may take some time for the address to register, but you may monitor available addresses as follows:
```bash
gcloud compute addresses list
```

## Deploying
If using Google Cloud, ensure that you've [authenticated](https://cloud.google.com/docs/authentication/gcloud) your gcloud install and connected to your cluster. Apply the scripts in the following order:
```bash
kubectl apply -f secrets.yml
kubectl apply -f mongodb.yml
kubectl apply -f oauth2.yml
kubectl apply -f website.yml
kubectl apply -f ingress.yml
```

### Deploying Locally
If using a local environment, you may skip applying `ingress.yml` (unless you have a dedicated [ingress controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)), and instead use NodePort services to expose applications: navigate to `oauth2.yml`, `website.yml` and uncomment the `type: NodePort` and `nodePort: ...` attributes.

Depending on your environment, you may have issues provisioning a PersistentVolumeClaim in `mongodb.yml`. In that case, you can remove the PersistentVolumeClaim resource and comment out the `volumeMounts` and `volumes` attributes in the mongodb deployment.

Running the whole microservice stack requires a moderately powerful machine. As a consequence of OS preemption, you may notice API calls being dropped. In that case, concentrating every container into a single deployment seems to significantly improve performance. However, it would be a lot wiser (and less painful) to just set up a cloud-hosted testing environment or run each service directly on your machine (as opposed to a container).
