import { technologies, type TechnologyName } from "~/data/technologies";

interface TechnologyProps {
  name: TechnologyName;
}

const Technology: React.FC<
  TechnologyProps &
    Omit<React.ComponentPropsWithoutRef<"div">, keyof TechnologyProps>
> = ({ name, ...props }) => {
  const found = technologies.find(technology => technology.name === name);
  return <div {...props}>{found?.name}</div>;
};

export default Technology;
