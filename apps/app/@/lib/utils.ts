import { NFTData } from "@components/IPFSDataViewer";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchNFTs() {
  const response = await fetch('/nfts');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const nfts: NFTData[] = await response.json();
  return nfts;
}