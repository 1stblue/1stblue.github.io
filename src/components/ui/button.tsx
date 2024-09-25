import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import Image from "next/image"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        'bp-primary': 'bg-white text-primary-foreground shadow rounded-[8px]',
        'bp-primary-black': 'bg-white text-black shadow rounded-[8px]',
        'bp-primary-radius': 'bg-bp-blue-1 text-primary-foreground shadow rounded-[100px]',
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        bp: 'px-[32px] py-[15px] font-sans font-[600px] text-[16px] leading-[22.4px]'
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <div className={`${cn(buttonVariants({ variant, size, className }))} group`}>
        <Comp
          ref={ref}
          {...props}
        />
        {
          variant === 'bp-primary' &&
          <Image  src="/icons/arrow.svg" alt="arrow" width={16} height={16} className="ml-[4px] opacity-0 hover: opacity-100" />
        }
      </div>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
