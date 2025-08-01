"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, Info, Briefcase, FolderKanban, Sparkles, Mail, type LucideIcon } from "lucide-react";

interface NavItem {
  href: string;
  text: string;
}

interface MobileNavProps {
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

export function MobileNav({ navItems }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-y-4 mt-6">
          {navItems.map((item) => {
            const Icon = iconMap[item.text];
            return (
              <a key={item.href} href={item.href} className={`text-lg hover:underline flex items-center ${item.text === "Home" ? "bg-gray-800 text-white p-2 rounded" : ""}`}>
                {Icon && <Icon className="mr-2 h-5 w-5" />}
                {item.text}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}