"use client";
import Link from "next/link";
import Button from "~/components/Button";

const Navbar: React.FC = () => {
  return (
    <div className="">
      <span className="">RLSV v5</span>
      <Link href="/about">À propos</Link>
      <Link href="/contact">Contact</Link>
      <Button variant="glass">Portfolio</Button>
    </div>
  );
};

export default Navbar;
