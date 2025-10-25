'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github, Globe } from 'lucide-react';

import type { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ProjectGridProps = {
  projects: Project[];
};

const categories = ['All', 'Web', 'App', 'UI/UX'];

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter((project) => 
    filter === 'All' || project.category === filter
  );

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
            className="rounded-full transition-all"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50">
            <CardHeader className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image.src}
                  alt={project.title}
                  width={project.image.width}
                  height={project.image.height}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.image.hint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </CardHeader>
            <CardContent className="p-4 relative -mt-12 z-10">
              <p className="text-sm text-primary-foreground/80">{project.category}</p>
              <CardTitle className="font-headline text-xl text-primary-foreground">{project.title}</CardTitle>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 rounded-full">
                    <Github className="h-4 w-4" /> GitHub
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2 rounded-full">
                    <Globe className="h-4 w-4" /> Live Demo
                  </Button>
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
