import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";
import { technologies, type TechnologyName } from "~/data/technologies";
import ReactIcon from "../../public/techIcons/react.svg";

interface TechStackIconProps {
  name: TechnologyName;
}

const techStackIcon = tv({
  base: "rounded-full p-3.5 shadow-[4px_4px_8px_#00000033] active:shadow-[4px_4px_8px_#00000033,inset_4px_4px_8px_#0000001a]",
  variants: {
    variant: {
      dashed: "bg-gradient-to-r from-[#202636] to-[#1C212E]",
      plain: "",
    },
  },

  defaultVariants: {
    variant: "dashed",
  },
});

const TechStackIcon: React.FC<
  TechStackIconProps &
    VariantProps<typeof techStackIcon> &
    Omit<
      React.ComponentPropsWithoutRef<"button">,
      keyof TechStackIconProps | keyof VariantProps<typeof techStackIcon>
    >
> = ({ name, variant, ...props }) => {
  const found = technologies.find(technology => technology.name === name);

  return (
    <button type="button" {...props} className={techStackIcon({ variant })}>
      <img width={32} height={32} src={ReactIcon.src} />
    </button>
  );
};

export default TechStackIcon;
