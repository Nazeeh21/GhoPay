import * as React from "react";
import { useContractWrite } from "wagmi";
import { Abi, Address } from "viem";
import { ButtonProps } from "../shadcnComponents/ui/button";
export interface TxnButtonProps extends Omit<ButtonProps, "children"> {
    writeContractArgs: {
        abi: Abi;
        address: Address;
        functionName: string;
        args: readonly unknown[];
    };
    buttonLabel?: string | React.ReactNode;
    children?: React.ReactNode | ((state: ReturnType<typeof useContractWrite>) => React.ReactNode);
    onSuccess?: (data?: ReturnType<typeof useContractWrite>["data"]) => void;
}
declare const TxnButton: React.FC<TxnButtonProps>;
export { TxnButton };
