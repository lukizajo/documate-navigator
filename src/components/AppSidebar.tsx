import { ChevronDown } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { modules } from "@/data/navigation";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ExportComments } from "@/components/ExportComments";

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        {modules.map((mod, index) => {
          const isActive = mod.pages.some((p) => location.pathname === p.path);
          const isFirstLab = mod.id === "lab-a";
          return (
            <div key={mod.id}>
              {isFirstLab && <div className="h-4" />}
              <Collapsible defaultOpen={isActive}>
                <SidebarGroup className="p-0">
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2.5 text-xs font-semibold text-sidebar-foreground hover:bg-sidebar-accent transition-colors cursor-pointer">
                    <span className="truncate">{mod.title}</span>
                    <ChevronDown className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {mod.pages.map((page) => (
                          <SidebarMenuItem key={page.slug}>
                            <SidebarMenuButton asChild className="h-auto">
                              <NavLink
                                to={page.path}
                                className="text-xs px-3 py-1.5 hover:bg-sidebar-accent rounded-md transition-colors leading-tight"
                                activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                              >
                                {page.label}
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            </div>
          );
        })}
      </SidebarContent>
      <SidebarFooter className="p-3 border-t">
        <ExportComments />
      </SidebarFooter>
    </Sidebar>
  );
}
