/// <reference types="react" />
import { Address } from "viem";
interface ActionButtonsProps {
    recipient: Address;
    amount: BigInt;
}
export declare const ActionButtons: React.FC<ActionButtonsProps>;
export {};
