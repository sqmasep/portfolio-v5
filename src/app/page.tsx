import Button from "~/components/Button";
import LikeCountProvider from "~/features/likeCount/components/LikeCountProvider";
import { ArrowBigRightDash } from "lucide-react";
import Technology from "~/components/Technology";
import TechStack from "~/components/TechStack";
import TechStackIcon from "~/components/TechStackIcon";

const Home = () => {
  return (
    <main className="">
      <div className="container mx-auto mt-48">
        <h1 className="mx-auto max-w-3xl text-center text-[112px] font-bold leading-[113px] text-white">
          Créateur d&apos;expériences{" "}
          <span className="text-[#983CE0]">bluffantes</span>
        </h1>

        {/* <div className="aspect-square w-[459px] rounded-full bg-[#0048FF14] blur-[230px]" /> */}

        <Button
          className="mx-auto mt-5"
          color="primary"
          size="large"
          endIcon={<ArrowBigRightDash />}
        >
          Mes projets
        </Button>

        <Technology name="ESLint" />
        <TechStack technologies={["NextJS", "React", "TypeScript"]} />
        <TechStackIcon name="NextJS" />
      </div>
      <LikeCountProvider />
    </main>
  );
};

export default Home;
