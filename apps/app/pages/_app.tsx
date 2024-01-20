import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  WagmiProvider,
  createConfig,
  http,
  useAccount,
  useConnect,
} from "wagmi";
import { polygon, sepolia } from "viem/chains";
import { injected, metaMask } from "wagmi/connectors";
import { Layout } from "@components/layout";
import "../styles/globals.css";

const config = createConfig({
  chains: [polygon],
  connectors: [injected(), metaMask()],
  transports: {
    [polygon.id]: http(),
  },
});
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </WagmiProvider>
  );
}
