# Step 4: Deploy the Application to AWS EKS with Kubernetes

In this step, we have deployed our containerized Hello World Express application to an Amazon EKS cluster using Kubernetes. We created a deployment and a service to manage our application and expose it to the internet.

## Description

We used the following main components in this step:

1. **Deployment**: A Kubernetes Deployment is used to manage the desired state of our application. We created a deployment manifest (YAML file) that describes the desired number of replicas, Docker image, and container ports.

2. **Service**: A Kubernetes Service is used to expose our application to the internet. We created a service manifest (YAML file) that defines the type of service as a LoadBalancer, targeting our deployment's label selector and exposing the application on port 80.

3. **Amazon EKS**: Amazon Elastic Kubernetes Service (EKS) is a managed Kubernetes service provided by AWS. We used Amazon EKS to create and manage our Kubernetes cluster and worker nodes.

4. **AWS Load Balancer**: As our service type is LoadBalancer, AWS automatically provisions a Classic Load Balancer to distribute incoming traffic to the application pods.

## Usage

To access the deployed application, you can use the Load Balancer URL provided after successfully applying the Kubernetes manifests. The URL should look like this:

```
http://<load_balancer_id>.<region>.elb.amazonaws.com
```

This URL points to the Classic Load Balancer created by AWS, which in turn routes the incoming traffic to the application pods running on the EKS cluster.

You can use this URL to access the application in a web browser or any other HTTP client. The application should display a styled "Hello World!" message, served by the Express.js application running inside a Docker container on the EKS cluster.


# Loading the Local Docker Image into Amazon ECR

In this section, we describe the process we followed to push our local Docker image to the Amazon Elastic Container Registry (ECR), which allows Kubernetes to pull the image for deployment.

## Description

Amazon ECR is a fully-managed Docker container registry that makes it easy to store, manage, share, and deploy Docker container images. We used ECR to store our containerized Hello World Express application.

We performed the following steps to load our local Docker image into ECR:

1. **Create an ECR repository**: We created a new Amazon ECR repository to store our Docker image.

2. **Authenticate Docker to ECR**: We authenticated our local Docker client to the ECR registry using the AWS CLI.

3. **Tag the Docker image**: We tagged our local Docker image with the ECR repository URL.

4. **Push the Docker image**: We pushed our local Docker image to the ECR repository.

5. **Update Kubernetes manifest**: We updated the Kubernetes deployment manifest with the ECR image URL.

## Usage

After successfully pushing the Docker image to ECR, we updated the `image` field in the Kubernetes deployment manifest to reference the ECR image URL. This allows Kubernetes to pull the image from ECR when deploying the application.

The ECR image URL has the following format:

```
<aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository_name>:<tag>
```

For example:

```
123456789012.dkr.ecr.us-east-2.amazonaws.com/hello-world-express:latest
```

By loading our local Docker image into ECR and updating the Kubernetes manifest, we ensured that our application can be deployed on Amazon EKS using the Docker image stored in ECR.
