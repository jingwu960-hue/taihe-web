import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:bg-primary/80 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
        brand:
          "bg-brand-foreground text-white shadow-sm hover:bg-brand-foreground/90 active:bg-brand-foreground/80 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
        sweet:
          "bg-brand-accent text-white shadow-sm hover:bg-brand-accent/90 active:bg-brand-accent/80 hover:shadow-warm hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-primary/30 bg-background text-primary shadow-sm hover:bg-primary/10 hover:border-primary hover:text-primary",
        outlineBrand:
          "border-2 border-brand-foreground/30 bg-background text-brand-foreground shadow-sm hover:bg-brand-foreground/10 hover:border-brand-foreground",
        outlineSweet:
          "border-2 border-brand-accent/30 bg-background text-brand-accent shadow-sm hover:bg-brand-accent/10 hover:border-brand-accent",
        glow: "glass-4 hover:glass-5 shadow-md hover:shadow-lg",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-primary/10 hover:text-primary",
        ghostSweet: "hover:bg-brand-accent/10 hover:text-brand-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        xs: "h-7 rounded-md px-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-6 text-base",
        xl: "h-14 rounded-xl px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
