# SQUAADS-AI-WIZARD

SQUAADS-AI-WIZARD is an AI-powered tool designed to enhance software development workflows by providing intelligent insights and documentation for your projects.

## Features

- **Repository Analysis**: Connect your repositories to generate a comprehensive context of your code structure and relationships.
- **High-Level Documentation**: Automatically create technical documentation describing your project's infrastructure and connections.
- **Mermaid Diagram Generation**: Visualize your project's architecture with automatically generated Mermaid diagrams.
- **AI-Optimized Prompt Generation**: Create optimized prompts for AI assistance in future development tasks.

## Getting Started

### Prerequisites

- Node.js (version 16.13 or higher)
- npm or yarn
- Docker

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

## UI Components

This project uses shadcn/ui components. To add new components, use the following command:
`npx shadcn-ui@latest add [component-name]`


## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.