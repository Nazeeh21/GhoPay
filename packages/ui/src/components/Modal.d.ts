/// <reference types="react" />
import { Address } from "viem";
interface ModalProps {
    children?: React.ReactNode;
    amount: BigInt;
    recipient: Address;
}
export declare function Modal({ children, ...props }: ModalProps): JSX.Element;
export {};
