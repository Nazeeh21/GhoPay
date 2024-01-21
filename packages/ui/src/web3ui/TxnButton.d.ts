import * as React from "react";
import { UseWriteContractReturnType, type UseWriteContractParameters } from "wagmi";
import { WriteContractVariables } from "wagmi/query";
import type { Config } from "@wagmi/core";
import { Abi } from "viem";
import { ButtonProps } from "../shadcnComponents/ui/button";
export type ContextType<config extends Config = Config, context = unknown> = Omit<UseWriteContractReturnType<config, context>, "writeContract" | "writeContractAsync">;
export interface TxnButtonProps<config extends Config = Config, context = unknown> extends Omit<ButtonProps, "children"> {
    writeContractArgs: WriteContractVariables<Abi, string, readonly unknown[], config, config["chains"][number]["id"]>;
    useWriteContractArgs?: UseWriteContractParameters<config, context>;
    buttonLabel?: string | React.ReactNode;
    children?: React.ReactNode | ((state: ContextType) => React.ReactNode);
    onSuccess?: (data?: ContextType) => void;
}
declare const TxnButton: React.FC<TxnButtonProps>;
export { TxnButton };
