import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Services",
    href: "#services",
  },
  
];

export const NavMenu = (props) => (
  <NavigationMenu {...props}>
    <NavigationMenuList
      className="gap-2 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navLinks.map((link) => (
          <NavigationMenuItem key={link.title}>
          <NavigationMenuLink asChild>
            <a href={link.href}>{link.title}</a>
        </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
