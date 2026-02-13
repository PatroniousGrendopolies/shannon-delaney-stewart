export type Project = {
  name: string;
  slug: string;
  collaborator?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    name: "Color Card",
    slug: "color-card",
    images: [
      "/images/color-card/01.jpg",
      "/images/color-card/02.jpg",
      "/images/color-card/03.jpg",
      "/images/color-card/04.jpg",
    ],
  },
  {
    name: "Sebastian in 360 lighting",
    slug: "sebastian-in-360-lighting",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=800&fit=crop",
    ],
  },
];
