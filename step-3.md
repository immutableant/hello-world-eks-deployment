# Step 3: Setting up Amazon EKS Cluster

This step covers the process of setting up an Amazon Elastic Kubernetes Service (EKS) cluster. EKS is a managed Kubernetes service provided by AWS, which allows you to run containerized applications using Kubernetes without the need to manage the underlying infrastructure.

## Description

An Amazon EKS cluster is created using the AWS Management Console, AWS CLI, or infrastructure as code tools like Terraform or CloudFormation. In this project, we use the `eksctl` command-line utility to create and manage the EKS cluster. The EKS cluster runs on a VPC (Virtual Private Cloud) and consists of a control plane managed by AWS and worker nodes running on EC2 instances.

## Usage

To set up an Amazon EKS cluster, follow these steps:

1. Ensure that you have an AWS account with the necessary permissions to create and manage EKS clusters.

2. Install and configure the AWS CLI and `eksctl` command-line utility.

3. Create a VPC (Virtual Private Cloud) using the Amazon EKS VPC sample configuration or your own custom configuration.

4. Create the Amazon EKS cluster using the `eksctl` command, specifying the desired region, cluster name, and other required settings.

5. Update your `kubectl` configuration to work with the EKS cluster. Use the `aws eks update-kubeconfig` command with the appropriate region and cluster name.

After completing these steps, you'll have an Amazon EKS cluster ready to deploy containerized applications. You can manage your cluster using the AWS Management Console, AWS CLI, `eksctl`, or `kubectl`. To deploy your Hello World application to the EKS cluster, follow the instructions provided in the next steps of the project.

## Verification

To verify that the EKS cluster was created successfully, run the `kubectl get nodes` command. You should see a list of worker nodes in the cluster.

```bash
$ kubectl get nodes
```

## CLI Policy

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "autoscaling:Describe*",
                "route53:GetChange",
                "elasticloadbalancing:ConfigureHealthCheck",
                "iam:CreateRole",
                "iam:AttachRolePolicy",
                "iam:PutRolePolicy",
                "ssm:GetParameter",
                "elasticloadbalancing:DeleteLoadBalancer",
                "iam:DetachRolePolicy",
                "ssm:DescribeParameters",
                "iam:DeleteRolePolicy",
                "sts:DecodeAuthorizationMessage",
                "autoscaling:UpdateAutoScalingGroup",
                "cloudformation:UpdateStack",
                "elasticloadbalancing:Describe*",
                "ssm:GetParametersByPath",
                "route53:DeleteHostedZone",
                "cloudformation:List*",
                "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
                "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
                "autoscaling:TerminateInstanceInAutoScalingGroup",
                "iam:GetRole",
                "elasticloadbalancing:CreateLoadBalancer",
                "route53:CreateHostedZone",
                "autoscaling:SetDesiredCapacity",
                "route53:ListHostedZones",
                "route53:ChangeResourceRecordSets",
                "iam:DeleteRole",
                "ssm:GetParameters",
                "cloudformation:Describe*",
                "autoscaling:CreateLaunchConfiguration",
                "autoscaling:DeleteLaunchConfiguration",
                "cloudformation:CreateStack",
                "cloudformation:GetTemplate",
                "cloudformation:DeleteStack",
                "ec2:*",
                "autoscaling:DeleteAutoScalingGroup",
                "eks:*",
                "autoscaling:CreateAutoScalingGroup",
                "cloudformation:ValidateTemplate"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Sid": "Statement1",
            "Effect": "Allow",
            "Action": [
                "iam:PassRole"
            ],
            "Resource": [
                "*"
            ],
            "Condition": {
                "StringEquals": {
                    "iam:PassedToService": [
                        "eks.amazonaws.com"
                    ]
                }
            }
        },
        {
            "Sid": "Statement2",
            "Effect": "Allow",
            "Action": [
                "iam:CreateServiceLinkedRole"
            ],
            "Resource": [
                "*"
            ],
            "Condition": {
                "StringEquals": {
                    "iam:AWSServiceName": [
                        "eks.amazonaws.com"
                    ]
                }
            }
        }
    ]
}
```

## Resources

- [Amazon EKS Documentation](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
- [eksctl Documentation](https://eksctl.io/)
- [Amazon EKS VPC Sample Configuration](https://amazon-eks.s3.us-west-2.amazonaws.com/cloudformation/2020-10-29/amazon-eks-vpc-sample.yaml)
- [Amazon EKS Workshop](https://www.eksworkshop.com/)