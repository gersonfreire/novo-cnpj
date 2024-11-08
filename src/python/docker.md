To install a clean Python Docker container on Ubuntu, you can pull an official Python Docker image and run it without any application code or customizations. Here are the steps:

### 1. **Pull the Official Python Docker Image**

Start by pulling the desired version of the Python Docker image. For example, if you want Python 3.10:

```bash
docker pull python:3.10
```

This downloads the Python 3.10 image to your local system. You can replace `3.10` with another version or use `python:latest` to pull the latest available version.

### 2. **Run the Python Docker Container**

To start an interactive Python shell in the container, use the following command:

```bash
docker run -it --name my-python-container python:3.10
```

- `-it`: Starts the container in interactive mode, giving you access to a command prompt.
- `--name my-python-container`: Names the container (`my-python-container`), which can be changed as desired.
- `python:3.10`: Specifies the image to run.

This command will open an interactive shell inside the Python container, where you can type Python commands directly.

### 3. **Verify the Python Installation**

Once inside the container, you can verify that Python is running:

```python
python --version
```

This should display the version of Python that came with the Docker image.

### 4. **Exit the Container**

To exit the container shell, type:

```bash
exit
```

This will stop the container. If you want to leave the container running in the background, you can start it in detached mode:

```bash
docker run -d --name my-python-container python:3.10 tail -f /dev/null
```

- This `tail -f /dev/null` command will keep the container running in detached mode without immediately exiting.

### 5. **Restart the Container (Optional)**

To restart the container, you can use:

```bash
docker start -i my-python-container
```

This command starts the container interactively again.

### 6. **Remove the Container (Optional)**

When you’re done with the container, you can remove it with:

```bash
docker rm my-python-container
```

### Summary of Commands

1. Pull the Python image:

   ```bash
   docker pull python:3.10
   ```
2. Run a Python container interactively:

   ```bash
   docker run -it --name my-python-container python:3.10
   ```
3. Exit the container:

   ```bash
   exit
   ```
4. Optionally, start the container in detached mode:

   ```bash
   docker run -d --name my-python-container python:3.10 tail -f /dev/null
   ```
5. To remove the container:

   ```bash
   docker rm my-python-container
   ```

This gives you a clean, isolated Python environment in a Docker container on your Ubuntu system.
