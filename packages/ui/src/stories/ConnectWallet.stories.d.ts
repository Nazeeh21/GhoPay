/// <reference types="react" />
import type { Meta, StoryObj } from "@storybook/react";
export declare const config: import("wagmi").Config<readonly [{
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://goerli.etherscan.io";
            readonly apiUrl: "https://api-goerli.etherscan.io/api";
        };
    };
    contracts: {
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xfc4AC75C46C914aF5892d6d3eFFcebD7917293F1";
            readonly blockCreated: 10339206;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 6507670;
        };
    };
    id: 5;
    name: "Goerli";
    nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/eth_goerli"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}], {
    5: import("viem").HttpTransport;
}>;
declare const Comp: () => JSX.Element;
declare const meta: Meta<typeof Comp>;
export default meta;
type Story = StoryObj<typeof Comp>;
export declare const ConnectWallet: Story;
