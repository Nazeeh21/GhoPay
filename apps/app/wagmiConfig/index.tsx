import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { polygon } from "wagmi/chains";

export const config = createConfig(getDefaultConfig({
  // Required API Keys
  infuraId: process.env.NEXT_PUBLIC_INFURA_API_KEY!, // or infuraId
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  chains: [polygon],
  appName: "GhoPay",
}));