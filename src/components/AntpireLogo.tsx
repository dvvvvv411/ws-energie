import { cn } from "@/lib/utils";

interface AntpireLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses: Record<NonNullable<AntpireLogoProps['size']>, string> = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl',
};

const AntpireLogo = ({ size = 'md', className }: AntpireLogoProps) => {
  return (
    <span
      className={cn(
        'font-bold tracking-tight gradient-text-premium leading-none select-none',
        sizeClasses[size],
        className
      )}
    >
      Antpire
    </span>
  );
};

export default AntpireLogo;
