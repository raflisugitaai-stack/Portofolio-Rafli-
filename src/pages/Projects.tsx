"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
  return (
    <Card className="flex flex-col">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex items-end justify-start gap-2">
        {liveUrl && (
          <Button asChild variant="outline">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Lihat Langsung
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "Aplikasi Manajemen Tugas",
      description: "Aplikasi web untuk mengelola tugas pribadi dan tim dengan fitur drag-and-drop.",
      imageUrl: "/placeholder.svg", // Ganti dengan gambar proyek Anda
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Situs Web E-commerce",
      description: "Platform belanja online dengan keranjang, pembayaran, dan manajemen produk.",
      imageUrl: "/placeholder.svg", // Ganti dengan gambar proyek Anda
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Pribadi",
      description: "Situs blog yang responsif untuk berbagi artikel dan pemikiran.",
      imageUrl: "/placeholder.svg", // Ganti dengan gambar proyek Anda
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Proyek Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;