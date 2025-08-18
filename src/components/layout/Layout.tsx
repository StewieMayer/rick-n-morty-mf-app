import { PropsWithChildren } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w bg-gray-300">
      <Header />
      <main className="flex flex-1 w-full px-6 py-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
