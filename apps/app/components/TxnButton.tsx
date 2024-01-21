import * as React from "react";
import { useContractWrite } from "wagmi";
import { Abi, Address } from "viem";
import { Button, ButtonProps } from "@/components/ui/button";

export interface TxnButtonProps extends Omit<ButtonProps, "children"> {
  writeContractArgs: {
    abi: Abi;
    address: Address;
    functionName: string;
    args: readonly unknown[];
  };
  buttonLabel?: string | React.ReactNode;
  children?:
    | React.ReactNode
    | ((state: ReturnType<typeof useContractWrite>) => React.ReactNode);
  onSuccess?: (data?: ReturnType<typeof useContractWrite>["data"]) => void;
}

const TxnButton: React.FC<TxnButtonProps> = ({
  writeContractArgs,
  className,
  buttonLabel,
  children,
  onSuccess,
  ...buttonProps
}) => {
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    write,
    writeAsync,
    reset,
    status,
  } = useContractWrite(writeContractArgs);

  React.useEffect(() => {
    if (isSuccess && data) {
      console.log("success: returning data");
      onSuccess?.(data);
    }
  }, [isSuccess, onSuccess, status]);

  const buttonText = isLoading
    ? "Loading..."
    : isSuccess
    ? "Success"
    : isError
    ? "Error"
    : buttonLabel ?? "Transact";

  return (
    <Button
      className={className}
      disabled={isLoading}
      onClick={() => {
        try {
          writeAsync?.();
        } catch (error) {
          console.log("Error writing to contract:", error);
        }
      }}
      {...buttonProps}
    >
      <div className="w-full flex items-center justify-center text-center m-auto">
        {buttonText}
      </div>
      {typeof children === "function" &&
        children({
          data,
          error,
          isError,
          isIdle,
          isLoading,
          isSuccess,
          write,
          reset,
          status,
          variables: undefined,
          writeAsync: undefined,
        })}
    </Button>
  );
};

TxnButton.displayName = "TxnButton";

export { TxnButton };
