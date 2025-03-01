import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
      },
      size: {
        sm: "px-3 py-1",
        md: "px-4 py-2",
        lg: "px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

import { cn } from "@/lib/utils"



function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
