import { http, injected,  } from "@wagmi/core";
// import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { goerli } from "wagmi/chains";

export const config = createConfig({
  chains: [goerli],
  connectors: [injected()],
  transports: {
    [goerli.id]: http(),
  },
});