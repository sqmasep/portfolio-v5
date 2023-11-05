"use client";

import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";
import type { WithChildren } from "../../types";
import { clickableVariants } from "~/animations/clickable";

interface ButtonProps extends WithChildren {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const button = tv({
  base: "rounded-full",

  variants: {
    isFullWidth: {
      true: "w-full",
    },
    color: {
      primary: "text-black bg-white hover:bg-[#F2F2F2]",
      secondary: "",
      glass: "",
    },
    size: {
      small: "px-2 py-1 text-sm",
      medium: "px-4 py-2",
      large: "px-6 py-3 text-lg",
    },
  },

  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});

const Button: React.FC<
  ButtonProps &
    VariantProps<typeof button> &
    Omit<
      React.ComponentPropsWithoutRef<typeof motion.button>,
      keyof VariantProps<typeof button> | keyof ButtonProps | "children"
    >
> = ({
  startIcon,
  endIcon,
  children,
  className,
  color,
  isFullWidth,
  size,
  ...props
}) => {
  return (
    <motion.button
      type="button"
      {...props}
      variants={clickableVariants}
      whileTap="parent"
      className={button({ color, size, isFullWidth, className })}
    >
      <motion.span
        className="flex items-center gap-2"
        variants={clickableVariants}
        whileTap="child"
      >
        {startIcon}
        {children}
        {endIcon}
      </motion.span>
    </motion.button>
  );
};

export default Button;
