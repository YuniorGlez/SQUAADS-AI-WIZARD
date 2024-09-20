'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { GitHubLogoIcon, FileTextIcon, DiagramTreeIcon, FileIcon, DownloadIcon } from '@radix-ui/react-icons'

interface Repository {
  id: string;
  name: string;
  url: string;
}

export default function Dashboard() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [activeRepo, setActiveRepo] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch('/api/repositories');
        if (response.ok) {
          const data = await response.json();
          setRepositories(data);
        } else {
          console.error('Failed to fetch repositories');
        }
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRepositories();
  }, []);

  const generateContent = (type) => {
    setGeneratedContent(`Generated ${type} for ${activeRepo}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Development Assistant</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Connected Repositories</CardTitle>
            <CardDescription>Select a repository to work with</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              {isLoading ? (
                <p>Loading repositories...</p>
              ) : repositories.length === 0 ? (
                <p>No repositories found.</p>
              ) : (
                repositories.map((repo) => (
                  <Button
                    key={repo.id}
                    variant={activeRepo === repo.id ? "secondary" : "ghost"}
                    className="w-full justify-start mb-2"
                    onClick={() => setActiveRepo(repo.id)}
                  >
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    {repo.name}
                  </Button>
                ))
              )}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
              Connect New Repository
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Generate Resources</CardTitle>
            <CardDescription>Create AI-powered documentation and assets</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="context" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="context">Context</TabsTrigger>
                <TabsTrigger value="diagrams">Diagrams</TabsTrigger>
                <TabsTrigger value="tech-doc">Tech Doc</TabsTrigger>
                <TabsTrigger value="prompt">AI Prompt</TabsTrigger>
              </TabsList>
              <TabsContent value="context">
                <Button onClick={() => generateContent('Context')} disabled={!activeRepo}>
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  Generate Context Markdown
                </Button>
              </TabsContent>
              <TabsContent value="diagrams">
                <Button onClick={() => generateContent('Diagrams')} disabled={!activeRepo}>
                  <DiagramTreeIcon className="mr-2 h-4 w-4" />
                  Generate Mermaid Diagrams
                </Button>
              </TabsContent>
              <TabsContent value="tech-doc">
                <Button onClick={() => generateContent('Tech Documentation')} disabled={!activeRepo}>
                  <FileIcon className="mr-2 h-4 w-4" />
                  Generate CTO-level Documentation
                </Button>
              </TabsContent>
              <TabsContent value="prompt">
                <Button onClick={() => generateContent('AI Prompt')} disabled={!activeRepo}>
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  Generate AI Prompt
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      {generatedContent && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
            <CardDescription>Preview of the generated resource</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              <pre>{generatedContent}</pre>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Button>
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download Resource
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}