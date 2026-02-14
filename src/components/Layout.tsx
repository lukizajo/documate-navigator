import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useLocation } from "react-router-dom";
import { modules } from "@/data/navigation";

function useCurrentModuleTitle() {
  const location = useLocation();
  for (const mod of modules) {
    if (mod.pages.some((p) => location.pathname === p.path)) {
      return mod.title;
    }
  }
  return "";
}

export function Layout({ children }: { children: ReactNode }) {
  const moduleTitle = useCurrentModuleTitle();
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-12 flex items-center border-b px-4 sticky top-0 bg-background/95 backdrop-blur z-10">
            <SidebarTrigger />
            <span className="ml-3 text-sm font-medium text-muted-foreground hidden sm:inline truncate">
              {moduleTitle}
            </span>
          </header>
          <main className="flex-1 overflow-y-auto px-0">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}