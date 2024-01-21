import { http, injected, } from "@wagmi/core";
// import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(),
  },
});