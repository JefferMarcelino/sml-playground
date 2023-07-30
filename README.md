# SamoraLang Playground

Welcome to the SamoraLang playground! This repository contains the server part of the SamoraLang Playground, which is designed to work in conjunction with the frontend application found at [sml-frontend](https://github.com/JefferMarcelino/sml-frontend). SamoraLang is a programming language created by [@Grahms](https://github.com/Grahms), and you can find its interpreter at [Samora-Lang Interpreter GitHub Repository](https://github.com/GraHms/Samora-Lang).

## Getting Started

To get started with the SamoraLang Playground server, follow these steps:

1. **Clone the Repository**: First, clone this GitHub repository to your local machine using the following command:
   ```
   git clone https://github.com/JefferMarcelino/sml-playground.git
   ```

2. **Install Docker and Docker Compose**: Ensure that you have Docker and Docker Compose installed on your system. If you don't have them, you can download and install them from the official Docker website.

3. **Run Docker Compose**: Navigate to the project's root directory and run the following command to start the SamoraLang Playground server:
   ```
   docker compose up
   ```

## Access the Playground

Once the Docker Compose is up and running, you can access the SamoraLang API at http://localhost:3000. This is where you can interact with the server and execute SamoraLang code snippets by making POST requests, as explained in the "Running Code" section (next section).

To access the [frontend application](https://github.com/JefferMarcelino/sml-frontend), you need to download the frontend app from the sml-frontend repository. Follow the instructions provided in that repository to set up the frontend application on your local machine.

The frontend will provide a user-friendly interface to interact with the SamoraLang Playground server and execute code snippets through the API.

## Running Code

To execute SamoraLang code, you need to make a POST request to the API endpoint `/execute`, passing the code in the request body as JSON. Here's an example using the popular tool `curl`:

```bash
curl -X POST \
  http://localhost:3000/execute \
  -H 'Content-Type: application/json' \
  -d '{
    "code": "print(\"Hello, SamoraLang!\")"
  }'
```

The response will contain the output of the executed code.

## How to Contribute

We welcome and appreciate contributions to make the SamoraLang Playground even better! Whether you want to fix a bug, add a new feature, or improve the documentation, your efforts are valuable to the community.

To contribute to the SamoraLang Playground, follow these steps:

1. **Fork the Repository**: Start by forking the [sml-playground](https://github.com/JefferMarcelino/sml-playground) repository to your GitHub account. You can find the "Fork" button in the top-right corner of the repository page.

2. **Clone the Forked Repository**: Clone the forked repository to your local machine using the following command (replace `<your-username>` with your GitHub username):
   ```
   git clone https://github.com/<your-username>/sml-playground.git
   ```

3. **Create a New Branch**: Create a new branch in your local repository to work on your changes. Use a descriptive and relevant name for your branch, such as `feature/new-feature` or `fix/issue-description`.
   ```
   git checkout -b feat/new-feature
   ```

4. **Make Your Changes**: Implement the improvements or fixes you have in mind. Remember to follow the existing coding conventions and style guidelines used in the project.

5. **Test Your Changes**: Before submitting your changes, ensure that the SamoraLang Playground server works as expected. You can test it locally by running the Docker Compose and the frontend application.

6. **Commit Your Changes**: Once you are satisfied with your changes, commit them with a clear and concise commit message explaining the purpose of the commit.
   ```
   git commit -m "feat: description of the feature"
   ```

7. **Push to Your Fork**: Push your branch to your forked repository on GitHub.
   ```
   git push origin feat/new-feature
   ```

8. **Submit a Pull Request (PR)**: Go to the [sml-playground repository](https://github.com/JefferMarcelino/sml-playground) on GitHub and click the "Compare & pull request" button for your branch. Provide a detailed description of your changes in the pull request, and submit it for review.

If you have any questions or need further assistance, feel free to reach out through GitHub or any other appropriate communication channels.

I hope you enjoy experimenting with SamoraLang in this playground. Happy coding! 🚀
