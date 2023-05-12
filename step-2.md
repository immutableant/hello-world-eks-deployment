# Step 2: Docker Container for the Hello World Application

This step covers the process of creating a Docker container for the Hello World application built using Express (Node.js) and Bootstrap. The containerization process allows the application to run consistently across different environments.

## Description

The Docker container is created using a Dockerfile, which defines the base image, dependencies, and the commands needed to run the application. By containerizing the Hello World application, it can be easily deployed to different environments, ensuring consistency and reducing potential issues related to differences in system configurations.

## Usage

To build and run the Docker container for the Hello World application, follow these steps:

1. Ensure that Docker is installed on your system.

2. Navigate to the project directory using the terminal.

3. Build the Docker image using the following command (replace `<image_name>` with a name of your choice):

```bash
docker build -t <image_name> .
```


This command builds the Docker image using the Dockerfile provided in the project directory.

4. Run the Docker container by executing the following command (replace `<image_name>` with the name you used in the previous step and `<container_name>` with a desired container name):

```bash
docker run -d -p 3000:3000 --name <container_name> <image_name>
```


This command runs the Docker container and maps port 3000 on your local machine to port 3000 on the container.

5. Open a web browser and navigate to `http://localhost:3000`. You should see the "Hello World" page styled with Bootstrap.

To stop and remove the Docker container, run the following commands (replace `<container_name>` with the name you used earlier):

```bash
docker stop <container_name>
docker rm <container_name>
```


These commands stop and remove the Docker container, freeing up resources on your system.
