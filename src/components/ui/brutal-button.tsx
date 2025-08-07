import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const brutalButtonVariants = cva(
  "btn-brutal cursor-target inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        pixel: "bg-pixel-lime text-pixel-dark border-2 border-pixel-dark shadow-brutal hover:shadow-brutal-hover",
        pixelSecondary: "bg-pixel-blue text-pixel-dark border-2 border-pixel-dark shadow-brutal hover:shadow-brutal-hover",
        pixelOutline: "bg-transparent text-pixel-dark border-2 border-pixel-dark shadow-brutal hover:bg-pixel-dark hover:text-pixel-lime",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        pixel: "h-12 px-6 py-3 text-base",
        pixelLg: "h-16 px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BrutalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brutalButtonVariants> {
  asChild?: boolean
}

const BrutalButton = React.forwardRef<HTMLButtonElement, BrutalButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(brutalButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
BrutalButton.displayName = "BrutalButton"

export { BrutalButton, brutalButtonVariants }