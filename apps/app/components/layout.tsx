import React, { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="w-full">
      {router.pathname !== "/" &&<header className="flex h-20 w-full items-center px-4 md:px-6">
        <Link href="/">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-3xl font-extrabold">
            GhoPay
          </h1>
          <span className="sr-only">GhoPay</span>
        </Link>
        <div className="ml-auto">
          <Button>Connect Wallet</Button>
        </div>
      </header>}
      {children}
    </div>
  );
};
