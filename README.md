# Hello World EKS Deployment

This project demonstrates how to deploy a simple "Hello World" application using Express (Node.js) and Bootstrap on an Amazon EKS cluster.

## Completed Steps

1. [x] [Create a simple Hello World application using Express (Node.js) and Bootstrap](step-1.md)
    - Set up a new Node.js project
    - Install Express and create a basic web server
    - Add a route to serve the Hello World page
    - Integrate Bootstrap to make the page more presentable

2. [x] [Create a Docker container for the application](step-2.md)
    - Write a Dockerfile to define the application's container
    - Build the Docker image
    - Run the Docker container locally to test the application

3. [x] [Set up an Amazon EKS cluster](step-3.md)
    - Install and configure the AWS CLI and eksctl
    - Create a VPC using the Amazon EKS VPC sample configuration
    - Create the Amazon EKS cluster using eksctl
    - Update the `kubectl` configuration to work with the EKS cluster

4. [x] [Deploy the application to the EKS cluster](step-4.md)
    - Create a Kubernetes deployment manifest for the application
    - Load the local Docker image into Amazon ECR
    - Update the Kubernetes manifest with the ECR image URL
    - Apply the Kubernetes manifest to the EKS cluster
    - Expose the application using a Kubernetes service

## Next Steps

5. Set up a CI/CD pipeline and deployment automation
6. Use Terraform for infrastructure provisioning

## Technologies Used

- Deployment Automation
- CI/CD
- Cloud Architecture
- DevOps
- Docker
- Kubernetes
- Linux
- Terraform
