"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";

function ProjectSection({ project }: { project: typeof projects[0] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((i) => (i + 1) % project.images.length);
  const prevImage = () => setCurrentImage((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', padding: '0 1.5rem' }}>
      {/* Left column - name area */}
      <div style={{ width: '25%' }} />

      {/* Middle column - project info, top-aligned */}
      <div style={{ width: '22%', paddingTop: '1.5rem' }}>
        <div style={{ fontSize: '15px', lineHeight: '1.6' }}>
          <p><a href="#" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{project.name}</a></p>
          {project.collaborator && <p>{project.collaborator}</p>}
          <p>{project.images.length} images</p>
        </div>
      </div>

      {/* Right column - slideshow (53%), top-aligned with text */}
      <div style={{ width: '53%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: '1.5rem', minHeight: '100vh' }}>
        <div style={{ position: 'relative', height: '85vh' }}>
          <div
            style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '33%', zIndex: 10, cursor: 'w-resize' }}
            onClick={prevImage}
          />
          <div
            style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '67%', zIndex: 10, cursor: 'e-resize' }}
            onClick={nextImage}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[currentImage]}
            alt={`${project.name} ${currentImage + 1}`}
            style={{ height: '100%', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Fixed name - top left */}
      <div style={{ position: 'fixed', top: 0, left: 0, padding: '1.5rem', zIndex: 50 }}>
        <Link href="/" style={{ fontSize: '15px', color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          Shannon Delaney Stewart
        </Link>
      </div>

      {/* Fixed links - bottom left */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, padding: '1.5rem', zIndex: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '15px', lineHeight: '1.6' }}>
          <Link href="/about" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            about
          </Link>
          <a href="mailto:shannondelaneystewart@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            email
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
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
