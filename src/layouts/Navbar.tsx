import Link from "next/link";
import Button from "~/components/Button";

const Navbar: React.FC = () => {
  return (
    <div className="container fixed inset-x-0 top-0 mx-auto flex items-center justify-between gap-2 rounded-full p-4 backdrop-blur-md">
      <span className="">RLSV v5</span>
      <div className="flex items-center gap-8 text-gray-500">
        <Link href="/about">À propos</Link>
        <Link href="/contact">Contact</Link>
        <Button color="primary">Portfolio</Button>
      </div>
    </div>
  );
};

export default Navbar;
