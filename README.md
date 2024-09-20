# SQUAADS-AI-WIZARD

SQUAADS-AI-WIZARD is an AI-powered tool designed to enhance software development workflows by providing intelligent insights and documentation for your projects.

## Features

- **Repository Analysis**: Connect your repositories to generate a comprehensive context of your code structure and relationships.
- **High-Level Documentation**: Automatically create technical documentation describing your project's infrastructure and connections.
- **Mermaid Diagram Generation**: Visualize your project's architecture with automatically generated Mermaid diagrams.
- **AI-Optimized Prompt Generation**: Create optimized prompts for AI assistance in future development tasks.

## Getting Started

### Prerequisites

- Docker
- Node.js (version 16.13 or higher)
- npm or yarn

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/squaads-ai-wizard.git
   cd squaads-ai-wizard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the PostgreSQL database using Docker:
   ```
   docker-compose up -d
   ```

4. Set up the environment variables:
   ```
   cp .env.example .env
   ```
   Then, edit the `.env` file and set the `DATABASE_URL` to:
   ```
   DATABASE_URL="postgresql://admin:password@localhost:5432/squaads_ai_wizard?schema=public"
   ```

5. Run Prisma migrations:
   ```
   npx prisma migrate dev
   ```

6. Generate Prisma client:
   ```
   npx prisma generate
   ```

7. Start the development server:
   ```
   npm run dev
   ```

8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Verifying Setup

To verify that the database connection is working:

1. Visit `http://localhost:3000/api/test` in your browser. You should see a JSON response with a created user.

2. You can also use Prisma Studio to view and manipulate the database:
   ```
   npx prisma studio
   ```

## Main Screens

1. **Dashboard**: View and connect projects
2. **Project Summary**: Display generated markdown
3. **System Diagram**: Visualize and download Mermaid diagrams
4. **Prompt Generator**: Configure and download AI-optimized prompts

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Docker Documentation](https://docs.docker.com/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.