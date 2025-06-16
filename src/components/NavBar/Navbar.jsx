import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { Sidebar } from "./navigation-sheet";

const Navbar = () => {
  return (
    <div className="bg-muted">
      <nav
        className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <h1 className="text-2xl font-bold">Rayen Bakali</h1>
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
          <div className="flex items-center gap-3">
            <Button className="rounded-full">Contact me</Button>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
