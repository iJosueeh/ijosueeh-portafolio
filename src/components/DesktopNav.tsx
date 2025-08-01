"use client";

import * as React from "react";
import { Home, Info, Briefcase, FolderKanban, Sparkles, Mail, type LucideIcon } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface NavItem {
  href: string;
  text: string;
}

interface DesktopNavProps {
  navItems: NavItem[];
  "client:load"?: true;
}

const iconMap: Record<string, LucideIcon> = {
  "Home": Home,
  "About Us": Info,
  "Experience": Briefcase,
  "Projects": FolderKanban,
  "Skills": Sparkles,
  "Contact": Mail,
};

export function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-x-5">
        {navItems.map((item) => {
          const Icon = iconMap[item.text];
          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                className={`${navigationMenuTriggerStyle()} ${item.text === "Home" ? "bg-gray-800 text-white text-lg" : "text-lg"}`}
              >
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                {item.text}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}



