import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24', className)}
    >
      {children}
    </section>
  );
}
