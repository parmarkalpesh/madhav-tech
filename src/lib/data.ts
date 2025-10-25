import type { NavLink, SocialLink, Statistic, Service, Project, ContactInfo } from './types';
import { Github, Linkedin, Dribbble, Code, Brush, Smartphone, Mail, MessageSquare, Phone, Award, Briefcase, Users } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Github, label: 'GitHub' },
  { href: '#', icon: Dribbble, label: 'Dribbble' },
];

export const heroData = {
  name: "Madhav",
  title: "Full-stack Developer",
  description: "I'm a passionate full-stack developer with experience in building web applications with modern technologies. I love to create beautiful and functional user experiences.",
  profileImage: {
    src: getImage('heroProfile')?.imageUrl || '',
    width: 400,
    height: 400,
    hint: getImage('heroProfile')?.imageHint || '',
  }
};

export const aboutData = {
  title: "About Me",
  description: "I'm a Full-stack developer with over 3 years of experience. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.",
  stats: [
    { icon: Award, value: '03+', label: 'Years experience' },
    { icon: Briefcase, value: '20+', label: 'Projects completed' },
    { icon: Users, value: '24/7', label: 'Online support' },
  ] as Statistic[],
  aboutImage: {
    src: getImage('aboutMe')?.imageUrl || '',
    width: 500,
    height: 500,
    hint: getImage('aboutMe')?.imageHint || '',
  }
};

export const servicesData: Service[] = [
  {
    icon: Brush,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that enhance user experience and engagement.',
  },
{
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive and performant websites and web applications using modern stacks.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Developing mobile applications for iOS and Android platforms with a focus on usability.',
  },
];

const projectOneImage = getImage('projectOne');
const projectTwoImage = getImage('projectTwo');
const projectThreeImage = getImage('projectThree');

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Project Dashboard',
    category: 'Web',
    image: {
      src: projectOneImage?.imageUrl || '',
      width: 600,
      height: 400,
      hint: projectOneImage?.imageHint || ''
    },
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'App',
    image: {
      src: projectTwoImage?.imageUrl || '',
      width: 600,
      height: 400,
      hint: projectTwoImage?.imageHint || ''
    },
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'E-commerce Store',
    category: 'Web',
    image: {
      src: projectThreeImage?.imageUrl || '',
      width: 600,
      height: 400,
      hint: projectThreeImage?.imageHint || ''
    },
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const contactData: ContactInfo[] = [
    {
        icon: Mail,
        title: 'Email',
        value: 'madhav@example.com',
        href: 'mailto:madhav@example.com'
    },
    {
        icon: MessageSquare,
        title: 'Messenger',
        value: 'Madhav Tech',
        href: '#'
    },
    {
        icon: Phone,
        title: 'WhatsApp',
        value: '+123 456 7890',
        href: 'https://wa.me/1234567890'
    }
];
