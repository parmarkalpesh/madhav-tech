import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export type Statistic = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Project = {
  id: number;
  title: string;
  category: 'Web' | 'App' | 'UI/UX';
  image: {
    src: string;
    width: number;
    height: number;
    hint: string;
  };
  githubUrl?: string;
  liveUrl?: string;
};

export type ContactInfo = {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
};
