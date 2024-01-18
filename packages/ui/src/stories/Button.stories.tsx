import React from 'react'
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../button";

const Comp = () => {
  return (
    <Button className=''>Clichjksdbnkme</Button>
  );
};
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Comp> = {
  component: Comp,
};

export default meta;
type Story = StoryObj<typeof Comp>;

export const ButtonComp: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};