import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

// Sample data.
const data = {
  navMain: [
    {
      title: "Profile",
      url: "#",
      items: [
        { title: "Personal Information", url: "/personal-information" },
        { title: "Education", url: "/education" },
        { title: "Work Experience", url: "/work-experience" },
        { title: "Skills", url: "/skills" },
        { title: "Certifications", url: "/certifications" },
        { title: "Projects", url: "/projects" },
        { title: "Achievements", url: "/achievements" },
        { title: "Social Media", url: "/social-media" },
      ],
    },
    {
      title: "Our Services",
      url: "#",
      items: [{ title: "Resume Builder", url: "#" }],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex justify-center gap-2 md:justify-center">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="flex w-28 items-center justify-center rounded-md text-primary-foreground">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Sidebar Groups */}
        {data.navMain.map((group, index) => (
          <SidebarGroup key={index}>
            <Separator />
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <Separator />
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item, subIndex) => (
                  <SidebarMenuItem key={subIndex}>
                    <SidebarMenuButton asChild className="hover:bg-accent px-6">
                      <NavLink 
                        to={`.${item.url}`} 
                        // className={({ isActive }) => `hover:bg-accent ${isActive ? "bg-accent" : ""}`} 
                        className=""
                        >
                          {item.title}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}