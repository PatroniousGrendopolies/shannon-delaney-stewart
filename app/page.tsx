"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";

function ProjectSection({ project }: { project: typeof projects[0] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((i) => (i + 1) % project.images.length);
  const prevImage = () => setCurrentImage((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div className="flex min-h-screen">
      {/* Left column - project info (33%) */}
      <div className="w-[33.33%] flex flex-col justify-center px-[1.9rem]">
        <div className="text-[15px] leading-relaxed">
          <p>{project.name}</p>
          {project.collaborator && (
            <p className="text-neutral-400">{project.collaborator}</p>
          )}
          <p>{project.images.length} images</p>
        </div>
      </div>

      {/* Right column - slideshow (67%) */}
      <div className="w-[66.67%] flex items-center justify-end pr-[1.9rem] min-h-screen relative">
        <div className="relative h-[70vh]">
          {/* Left click zone */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3 z-10 cursor-w-resize"
            onClick={prevImage}
          />
          {/* Right click zone */}
          <div
            className="absolute right-0 top-0 bottom-0 w-2/3 z-10 cursor-e-resize"
            onClick={nextImage}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[currentImage]}
            alt={`${project.name} ${currentImage + 1}`}
            className="h-full w-auto object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* Fixed header row - name left, project nav right */}
      <div className="fixed top-0 left-0 right-0 flex px-[1.9rem] pt-[1.9rem] z-50">
        <div className="w-[33.33%]">
          <Link href="/" className="text-[15px] tracking-normal hover:opacity-60 transition-opacity">
            Shannon Delaney Stewart
          </Link>
        </div>
      </div>

      {/* Fixed links - bottom left */}
      <div className="fixed bottom-0 left-0 w-[33.33%] px-[1.9rem] pb-[1.9rem] z-50">
        <div className="flex flex-col gap-0 text-[15px] leading-relaxed">
          <Link
            href="/about"
            className="hover:opacity-60 transition-opacity"
            style={{ color: "var(--accent)" }}
          >
            about
          </Link>
          <a
            href="mailto:shannondelaneystewart@gmail.com"
            className="hover:opacity-60 transition-opacity"
            style={{ color: "var(--accent)" }}
          >
            email
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
            style={{ color: "var(--accent)" }}
          >
            instagram
          </a>
        </div>
      </div>

      {/* Scrollable project feed */}
      <div>
        {projects.map((project) => (
          <ProjectSection key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
