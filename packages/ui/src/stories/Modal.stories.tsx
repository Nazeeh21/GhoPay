import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from '../components/Modal';

const Comp = () => {
  return (
<Modal />
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