export type Project = {
  name: string;
  slug: string;
  collaborator?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    name: "Portraits",
    slug: "portraits",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488161628813-04466f0016e8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=1200&h=800&fit=crop",
    ],
  },
  {
    name: "Fashion Editorial",
    slug: "fashion-editorial",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1200&h=800&fit=crop",
    ],
  },
];
