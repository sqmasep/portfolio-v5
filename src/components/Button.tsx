"use client";

import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

interface ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const button = tv({
  variants: {
    isFullWidth: {
      true: "w-full",
    },
    variant: {
      primary: "",
      secondary: "",
      glass: "",
    },
    size: {
      sm: "",
      md: "",
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
> = ({ ...props }) => {
  return <button type="button" {...props} />;
};

export default Button;
