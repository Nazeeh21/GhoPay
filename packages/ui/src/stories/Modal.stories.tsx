import type { Meta, StoryObj } from "@storybook/react";

import { WagmiProvider } from "wagmi";
import { Modal } from "../components/Modal";
import { config } from "./ConnectWallet.stories";

const Comp = () => {
  return (
    <Modal
      config={config}
      amount={BigInt(6)}
      recipient="0xcc626cE857cCb909427845aBA0c59445C75Ea5a2"
    />
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
