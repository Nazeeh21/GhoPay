import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { Modal } from "../components/Modal";
import { config } from "./ConnectWallet.stories";

const queryClient = new QueryClient();

const Comp = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Modal
          amount={BigInt(6)}
          recipient="0xcc626cE857cCb909427845aBA0c59445C75Ea5a2"
        />
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
