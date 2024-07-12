"use client";
import { cn } from "../lib/utils";
import {
  Home,
  Phone,
  User2,
  Drill,
  NotebookPen,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const items = [
    { name: "Home", icon: <Home />, link: "/" },
    { name: "About", icon: <User2 />, link: "/about" },
    { name: "Blog", icon: <NotebookPen />, link: "/blog" },
    { name: "Projects", icon: <Drill />, link: "/projects" },
    { name: "Contact", icon: <Phone />, link: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        {items.map((item) => (
          <TooltipProvider key={item.name}>
            <Tooltip>
              <TooltipTrigger asChild>
              <Link
                  href={item.link}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    pathname === item.link ? styles.active : "",
                    "hover:text-[#2f7df4]"
                  )}
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
