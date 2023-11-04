"use client";

import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

interface ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const button = tv({
  base: "flex items-center rounded-full gap-2",
  variants: {
    isFullWidth: {
      true: "w-full",
    },
    variant: {
      primary: "text-black bg-white",
      secondary: "",
      glass: "",
    },
    size: {
      sm: "",
      md: "px-4 py-2",
      lg: "",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const Button: React.FC<
  ButtonProps &
    VariantProps<typeof button> &
    Omit<
      React.ComponentPropsWithoutRef<"button">,
      keyof VariantProps<typeof button> | keyof ButtonProps
    >
> = ({ startIcon, endIcon, children, className, variant, size, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={button({ className, variant, size })}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
