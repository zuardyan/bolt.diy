# GrowerAI

[![GrowerAI: The #1 AI Marketing Software - AI-powered development platform](./public/social_preview_index.jpg)](https://www.thegrower.ai)

Welcome to GrowerAI, an AI-powered full-stack development platform that brings together cutting-edge AI technology and marketing operations expertise. Built on the foundation of modern development tools, GrowerAI allows you to choose the LLM that you use for each prompt! Currently, you can use OpenAI, Anthropic, Ollama, OpenRouter, Gemini, LMStudio, Mistral, xAI, HuggingFace, DeepSeek, or Groq models - and it is easily extended to use any other model supported by the Vercel AI SDK!

-----
Check the [GrowerAI Docs](https://www.thegrower.ai/docs) for official installation instructions and more information.

-----

GrowerAI was developed to revolutionize AI marketing software development, combining the power of AI-driven insights with full-stack development capabilities.

## Table of Contents

- [Join the Community](#join-the-community)
- [Features](#features)
- [Setup](#setup)
- [Run the Application](#run-the-application)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [FAQ](#faq)

## Join the community

[Contact us at info@thegrower.ai](mailto:info@thegrower.ai) to join the GrowerAI community!

## Features

- **AI-powered full-stack web development** for **NodeJS based applications** directly in your browser.
- **Support for multiple LLMs** with an extensible architecture to integrate additional models.
- **Attach images to prompts** for better contextual understanding.
- **Integrated terminal** to view output of LLM-run commands.
- **Revert code to earlier versions** for easier debugging and quicker changes.
- **Download projects as ZIP** for easy portability and sync to a folder on the host.
- **Integration-ready Docker support** for a hassle-free setup.
- **Deploy** directly to **Netlify**
- **Marketing-focused AI tools** optimized for social media and digital marketing campaigns

## Setup

If you're new to installing software from GitHub, don't worry! If you encounter any issues, feel free to contact us at info@thegrower.ai or submit an issue. The following instructions will help you get GrowerAI up and running on your local machine.

Let's get you up and running with GrowerAI!

## Quick Download

[![Download Latest Release](https://img.shields.io/github/v/release/zuardCoder/grower-ai?label=Download%20GrowerAI&sort=semver)](https://github.com/zuardCoder/grower-ai/releases/latest) ← Click here to go to the latest release version!

## Prerequisites

Before you begin, you'll need to install Node.js:

### Install Node.js

Node.js is required to run the application.

1. Visit the [Node.js Download Page](https://nodejs.org/en/download/)
2. Download the "LTS" (Long Term Support) version for your operating system
3. Run the installer, accepting the default settings
4. Verify Node.js is properly installed:
   - **For Windows Users**:
     1. Press `Windows + R`
     2. Type "cmd" and press Enter
     3. Type `node --version` to verify installation
   - **For Mac/Linux Users**:
     1. Open Terminal
     2. Type `node --version` to verify installation

## Running the Application

You have two options for running GrowerAI: directly on your machine or using Docker.

### Option 1: Direct Installation (Recommended for Beginners)

1. **Install Package Manager (pnpm)**:

   ```bash
   npm install -g pnpm
   ```

2. **Install Project Dependencies**:

   ```bash
   pnpm install
   ```

3. **Start the Application**:

   ```bash
   pnpm run dev
   ```
   
### Option 2: Using Docker

This option requires some familiarity with Docker but provides a more isolated environment.

#### Additional Prerequisite

- Install Docker: [Download Docker](https://www.docker.com/)

#### Steps:

1. **Build the Docker Image**:

   ```bash
   # Using npm script:
   npm run dockerbuild

   # OR using direct Docker command:
   docker build . --target grower-ai-development
   ```

2. **Run the Container**:
   ```bash
   docker compose --profile development up
   ```

## Configuring API Keys and Providers

### Adding Your API Keys

Setting up your API keys in GrowerAI is straightforward:

1. Open the home page (main interface)
2. Select your desired provider from the dropdown menu
3. Click the pencil (edit) icon
4. Enter your API key in the secure input field

### Configuring Custom Base URLs

For providers that support custom base URLs (such as Ollama or LM Studio), follow these steps:

1. Click the settings icon in the sidebar to open the settings menu
2. Navigate to the "Providers" tab
3. Search for your provider using the search bar
4. Enter your custom base URL in the designated field

> **Note**: Custom base URLs are particularly useful when running local instances of AI models or using custom API endpoints.

### Supported Providers

- Ollama
- LM Studio
- OpenAI
- Anthropic
- Google Gemini
- Mistral
- xAI
- HuggingFace
- DeepSeek
- Groq
- OpenRouter
- And more!

## Setup Using Git (For Developers)

This method is recommended for developers who want to:

- Contribute to the project
- Stay updated with the latest changes
- Switch between different versions
- Create custom modifications

#### Prerequisites

1. Install Git: [Download Git](https://git-scm.com/downloads)

#### Initial Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/zuardCoder/grower-ai.git
   ```

2. **Navigate to Project Directory**:

   ```bash
   cd grower-ai
   ```

3. **Install Dependencies**:

   ```bash
   pnpm install
   ```

4. **Start the Development Server**:
   ```bash
   pnpm run dev
   ```

>**Open the WebUI to test (Default: http://localhost:5173)**
>   - Beginners: 
>     - Try to use a sophisticated Provider/Model like Anthropic with Claude Sonnet 3.x Models to get best results
>     - The System Prompt is optimized for GrowerAI's marketing-focused development needs

#### Staying Updated

To get the latest changes from the repository:

1. **Save Your Local Changes** (if any):

   ```bash
   git stash
   ```

2. **Pull Latest Updates**:

   ```bash
   git pull 
   ```

3. **Update Dependencies**:

   ```bash
   pnpm install
   ```

4. **Restore Your Local Changes** (if any):
   ```bash
   git stash pop
   ```

---

## Available Scripts

- **`pnpm run dev`**: Starts the development server.
- **`pnpm run build`**: Builds the project.
- **`pnpm run start`**: Runs the built application locally using Wrangler Pages.
- **`pnpm run preview`**: Builds and runs the production build locally.
- **`pnpm test`**: Runs the test suite using Vitest.
- **`pnpm run typecheck`**: Runs TypeScript type checking.
- **`pnpm run typegen`**: Generates TypeScript types using Wrangler.
- **`pnpm run deploy`**: Deploys the project to Cloudflare Pages.
- **`pnpm run lint:fix`**: Automatically fixes linting issues.

---

## Contributing

We welcome contributions! Please contact us at info@thegrower.ai to get started with contributing to GrowerAI.

---

## FAQ

For answers to common questions and support, visit [www.thegrower.ai](https://www.thegrower.ai) or contact us at info@thegrower.ai.

# Licensing

**Commercial WebContainer API License**

GrowerAI source code is distributed under MIT license terms, but it uses WebContainers API that [requires licensing](https://webcontainers.io/enterprise) for production usage in commercial, for-profit settings. If you're using the API to meet the needs of your customers, prospective customers, and/or employees, you need a license to ensure compliance with the Terms of Service.

---

**GrowerAI - The #1 AI Marketing Software**
*Revolutionizing development with AI-powered marketing insights*

For more information, visit [www.thegrower.ai](https://www.thegrower.ai)