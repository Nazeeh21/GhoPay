/// <reference types="react" />
import { Address } from "viem";
import { Config } from "wagmi";
interface ModalProps {
    children?: React.ReactNode;
    amount: BigInt;
    recipient: Address;
    config: Config;
}
export declare function Modal({ children, ...props }: ModalProps): JSX.Element;
export {};
