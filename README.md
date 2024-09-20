# SQUAADS-AI-WIZARD

SQUAADS-AI-WIZARD is an AI-powered tool designed to enhance software development workflows by providing intelligent insights and documentation for your projects.

## Features

- **Repository Analysis**: Connect your repositories to generate a comprehensive context of your code structure and relationships.
- **High-Level Documentation**: Automatically create technical documentation describing your project's infrastructure and connections.
- **Mermaid Diagram Generation**: Visualize your project's architecture with automatically generated Mermaid diagrams.
- **AI-Optimized Prompt Generation**: Create optimized prompts for AI assistance in future development tasks.

## How It Works

1. Connect your repository
2. Our AI analyzes your code and generates:
   - Project summary in markdown
   - Architecture diagrams using Mermaid
   - High-level technical documentation
   - An AI-optimized prompt for future tasks

## Key Components
```
mermaid
    graph TD
    A[Repository] --> B[AI Analysis]
    B --> C[Markdown Summary]
    B --> D[Mermaid Diagram]
    B --> E[Technical Documentation]
    B --> F[Prompt Generator]
```

## Main Screens

1. **Dashboard**: View and connect projects
2. **Project Summary**: Display generated markdown
3. **System Diagram**: Visualize and download Mermaid diagrams
4. **Prompt Generator**: Configure and download AI-optimized prompts

## Getting Started

First, run the development server:
```
bash
npm run dev
or
yarn dev
or
pnpm dev
or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.