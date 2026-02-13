"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";

function ProjectSection({ project }: { project: typeof projects[0] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((i) => (i + 1) % project.images.length);
  const prevImage = () => setCurrentImage((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div className="flex min-h-screen" style={{ padding: '0 4rem' }}>
      {/* Left column - name area (about 25%) */}
      <div className="w-[25%]" />

      {/* Middle column - project info (about 25%), top-aligned */}
      <div className="w-[25%]" style={{ paddingTop: '4rem' }}>
        <div className="text-[15px] leading-relaxed">
          <p style={{ color: "var(--accent)" }}>{project.name}</p>
          {project.collaborator && (
            <p>{project.collaborator}</p>
          )}
          <p>{project.images.length} images</p>
        </div>
      </div>

      {/* Right column - slideshow (50%) */}
      <div className="w-[50%] flex items-start justify-end min-h-screen relative" style={{ paddingTop: "4rem" }}>
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
            className="h-full w-auto max-w-full object-contain"
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
      {/* Fixed name - top left */}
      <div className="fixed top-0 left-0 z-50" style={{ padding: '4rem' }}>
        <Link href="/" className="text-[15px] tracking-normal hover:opacity-60 transition-opacity" style={{ color: "var(--accent)" }}>
          Shannon Delaney Stewart
        </Link>
      </div>

      {/* Fixed links - bottom left */}
      <div className="fixed bottom-0 left-0 z-50" style={{ padding: '4rem' }}>
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
