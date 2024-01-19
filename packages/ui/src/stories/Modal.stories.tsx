import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal";
import { WagmiProvider, createConfig, http } from "wagmi";
import { sepolia } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});
const queryClient = new QueryClient();

const Comp = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Modal />
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

export const ModalComp: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
