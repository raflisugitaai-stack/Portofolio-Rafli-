"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface GenerativeAIProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const GenerativeAIProjectCard: React.FC<GenerativeAIProjectCardProps> = ({
  title,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
}) => {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl font-semibold text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-end justify-start gap-2 p-4 pt-0">
        {liveUrl && (
          <Button asChild variant="outline" className="text-sm">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Lihat Langsung
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline" className="text-sm">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default GenerativeAIProjectCard;