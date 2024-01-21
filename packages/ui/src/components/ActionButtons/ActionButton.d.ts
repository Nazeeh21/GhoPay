/// <reference types="react" />
import { Address } from "viem";
interface ActionButtonsProps {
    recipient: Address;
    amount: BigInt;
}
export declare const Spinner: () => JSX.Element;
export declare const TxnSuccess: () => JSX.Element;
declare const ActionButtons: React.FC<ActionButtonsProps>;
export { ActionButtons };
