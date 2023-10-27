import type { Metadata, NextPage } from "next";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import "../styles/globals.css";
import Navbar from "~/layouts/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RLSV v5",
  description: "RLSV v5",
};

const RootLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className="dark" lang="en">
      <body className={clsx(outfit.className, "bg-[#09090B]")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
