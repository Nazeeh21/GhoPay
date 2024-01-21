import { Layout } from "@components/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { config } from "wagmiConfig";
import "../styles/globals.css";
// import { ConnectKitProvider } from "connectkit";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      {/* <ConnectKitProvider theme="rounded" debugMode> */}
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      {/* </ConnectKitProvider> */}
    </WagmiProvider>
  );
}
