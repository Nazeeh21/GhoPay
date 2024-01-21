import React, { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
// import { ConnectKitButton } from "connectkit";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="w-full">
      {router.pathname !== "/" && (
        <header className="flex h-20 w-full items-center px-4 md:px-6">
          <Link href="/">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-3xl font-extrabold">
              GhoPay
            </h1>
            <span className="sr-only">GhoPay</span>
          </Link>
          <div className="ml-auto flex gap-4">
            <Link
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="/my-nfts"
            >
              My NFTs
            </Link>
            {/* <ConnectKitButton /> */}
          </div>
        </header>
      )}
      {children}
    </div>
  );
};
