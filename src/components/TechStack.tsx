import type { TechnologyName } from "~/data/technologies";
import type { NonEmptyTuple } from "../../types";
import TechStackIcon from "./TechStackIcon";

interface TechStackProps {
  technologies: NonEmptyTuple<TechnologyName>;
}

const TechStack: React.FC<
  TechStackProps &
    Omit<React.ComponentPropsWithoutRef<"div">, keyof TechStackProps>
> = ({ technologies, ...props }) => {
  return (
    <div {...props} className="flex -space-x-8 duration-150 hover:-space-x-4">
      {technologies.map(technology => (
        <TechStackIcon
          name={technology}
          key={technology}
          className="transition-all"
        />
      ))}
    </div>
  );
};

export default TechStack;
