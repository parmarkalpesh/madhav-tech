import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12 lg:mb-16', className)}>
      <h3 className="text-primary font-semibold text-lg">{subtitle}</h3>
      <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">{title}</h2>
    </div>
  );
}
