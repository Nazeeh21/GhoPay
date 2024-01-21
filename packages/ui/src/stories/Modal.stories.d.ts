/// <reference types="react" />
import type { Meta, StoryObj } from "@storybook/react";
declare const Comp: () => JSX.Element;
declare const meta: Meta<typeof Comp>;
export default meta;
type Story = StoryObj<typeof Comp>;
export declare const ModalComp: Story;
