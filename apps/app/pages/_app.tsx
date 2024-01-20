import { Layout } from "@components/layout";
import type { AppProps } from "next/app";
import "../styles/globals.css"


// const queryClient = new QueryClient();

// const config = createConfig({
//   chains: [polygon],
//   connectors: [injected()],
//   transports: {
//     [polygon.id]: http(),
//   },
//   ssr: false
// });
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <WagmiProvider config={config}>
    //   <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    //   </QueryClientProvider>
    // </WagmiProvider>
  );
}
