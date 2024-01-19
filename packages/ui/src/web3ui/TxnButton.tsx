import * as React from "react";
import {
  UseWriteContractReturnType,
  useWriteContract,
  type UseWriteContractParameters,
} from "wagmi";
import { WriteContractVariables } from "wagmi/query";

import type { Config } from "@wagmi/core";
import { Abi } from "viem";
import { Button, ButtonProps } from "../shadcnComponents/ui/button";

// context type
type ContextType<config extends Config = Config, context = unknown> = Omit<
  UseWriteContractReturnType<config, context>,
  "writeContract" | "writeContractAsync"
>;

const TxnButtonContext = React.createContext<ContextType | null>(null);

// interface defined to accept the arguments of useWriteContract and `writeContract` function as a prop
interface TxnButtonProps<config extends Config = Config, context = unknown>
  extends Omit<ButtonProps, "children"> {
  writeContractArgs: WriteContractVariables<
    Abi,
    string,
    readonly unknown[],
    config,
    config["chains"][number]["id"]
  >;
  useWriteContractArgs?: UseWriteContractParameters<config, context>;
  buttonLabel?: string | React.ReactNode;
  children?: React.ReactNode | ((state: ContextType) => React.ReactNode);
}

// TxnButton component
const TxnButton: React.FC<TxnButtonProps> = ({
  writeContractArgs,
  useWriteContractArgs,
  className,
  buttonLabel,
  children,
  ...buttonProps
}) => {
  const { writeContract, ...returnData } =
    useWriteContract(useWriteContractArgs);

  const buttonText =
    typeof children !== "function"
      ? children
      : returnData.isPending
      ? "Loading..."
      : returnData.isSuccess
      ? "Success"
      : returnData.isError
      ? "Error"
      : buttonLabel ?? "Transact";

  return (
    <TxnButtonContext.Provider value={returnData}>
      <Button
        className={className}
        disabled={!writeContract || returnData.isPending}
        onClick={() => writeContract?.(writeContractArgs)}
        {...buttonProps}
      >
        {buttonText}
      </Button>
      {typeof children === "function" && children(returnData)}
    </TxnButtonContext.Provider>
  );
};

TxnButton.displayName = "TxnButton";

export { TxnButton };
