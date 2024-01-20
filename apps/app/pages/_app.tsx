import { Layout } from "@components/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { config } from "wagmiConfig";
import "../styles/globals.css";
import { ConnectKitProvider } from "connectkit";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
