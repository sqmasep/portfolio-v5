import { technologies, type TechnologyName } from "~/data/technologies";
import ReactIcon from "../../public/techIcons/react.svg";

interface TechnologyProps {
  name: TechnologyName;
  count?: number;
}

const Technology: React.FC<
  TechnologyProps &
    Omit<React.ComponentPropsWithoutRef<"div">, keyof TechnologyProps>
> = ({ name, count, ...props }) => {
  const found = technologies.find(technology => technology.name === name);
  return (
    <div {...props} className="flex items-center gap-3">
      <img src={ReactIcon.src} />
      <div className="flex items-center gap-3">
        <span className="font-bold text-[#8F99B2]">{found?.name}</span>
        <span className="font-bold text-[#4B546B]">{count}</span>
      </div>
    </div>
  );
};

export default Technology;
