import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingTeam from "@/components/FloatingTeam";

interface LayoutProps {
  children: ReactNode;
  showFloatingTeam?: boolean;
}

const Layout = ({ children, showFloatingTeam = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {showFloatingTeam && <FloatingTeam />}
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
