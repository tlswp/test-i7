import { FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../_utils/cn';

const buttonVariants = cva(
  'h-12 px-6 py-3 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-black hover:bg-primary/80',
        secondary: 'bg-secondary-bg text-white hover:bg-secondary-bg/80',
      },
      size: {
        default: 'h-12 px-6 py-3',
        small: 'h-10 px-5 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
} & VariantProps<typeof buttonVariants>;

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;
