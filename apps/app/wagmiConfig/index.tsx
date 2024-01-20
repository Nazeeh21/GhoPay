import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { goerli } from "wagmi/chains";

export const config = createConfig(getDefaultConfig({
  // Required API Keys
  infuraId: process.env.INFURA_ID!, // or infuraId
  walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID!,
  chains: [goerli],
  appName: "GhoPay",
}));