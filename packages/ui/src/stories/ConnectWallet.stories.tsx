import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { polygon, sepolia } from "viem/chains";
import {
  WagmiProvider,
  createConfig,
  http,
  useAccount,
  useConnect,
} from "wagmi";
import { injected, metaMask } from "wagmi/connectors";
import { Button } from "../shadcnComponents/ui/button";

export const config = createConfig({
  chains: [polygon],
  connectors: [injected(), metaMask()],
  transports: {
    [polygon.id]: http(),
  },
});
const queryClient = new QueryClient();

const ConnectWalletComp = () => {
  const { connect } = useConnect();
  const { isConnected, address } = useAccount();
  return (
    <>
      {isConnected && address ? (
        <div>Connected Address: {address}</div>
      ) : (
        <Button
          onClick={() =>
            connect({
              connector: metaMask(),
              chainId: sepolia.id,
            })
          }
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
};

const Comp = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWalletComp />
      </QueryClientProvider>
    </WagmiProvider>
  );
};
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Comp> = {
  component: Comp,
};

export default meta;
type Story = StoryObj<typeof Comp>;

export const ConnectWallet: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
