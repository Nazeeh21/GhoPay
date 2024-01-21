import { Abi, Address } from "viem";

import { useAccount, useReadContract, useTransaction } from "wagmi";
import { useEffect, useState } from "react";
import { ContextType, TxnButton, TxnButtonProps } from "./TxnButton";
import abi from "../@/lib/abi.json";
import ghoAbi from "../@/lib/ghoABi.json";
import { MAX_ALLOWANCE } from "@/lib/utils";

interface ActionButtonsProps {
  recipient: Address;
  amount: BigInt;
}

interface ButtonProps
  extends Pick<TxnButtonProps, "children" | "onSuccess" | "writeContractArgs"> {
  buttonLabel?: string | React.ReactNode;
}
const GHO_TOKEN_SEPOLIA_ADDRESS = "0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const [txnData, setTxnData] = useState<ContextType["data"]>();
  const {
    refetch: refetchTxnData,
    isSuccess: txnSuccess,
    isPending: isTxnPending,
    isRefetching: isTxnRefetching,
    isRefetchError,
    status,
  } = useTransaction({
    hash: txnData ?? "0x0",
  });

  useEffect(() => {
    console.log({ txnSuccess });
    console.log({ txnData });
    console.log({ status });
    console.log({ isTxnPending });
    // (async () => {
    if (txnSuccess && !isRefetchError) {
      props.onSuccess?.();
    }
    // })();
  }, [txnSuccess]);

  useEffect(() => {
    console.log("refetch txnData effect", { txnData });
    (async () => {
      if (txnData) {
        console.log("refetching txnData");
        refetchTxnData();
      }
    })();
  }, [txnData]);

  if (txnData && isTxnPending)
    return <div>Waiting for transaction to complete...</div>;

  return (
    <TxnButton
      onSuccess={(data) => {
        console.log("setting txnData", { data });
        setTxnData(data?.data);
        if (data?.data) {
          console.log("refetching txnData");
          refetchTxnData();
        }
      }}
      buttonLabel={props.buttonLabel}
      writeContractArgs={props.writeContractArgs}
      className="w-full p-2 text-white bg-gradient-to-r from-[#FC00FF] to-[#00DBDE] bg-gradient-to-r from-[#5C258D] to-[#4389A2] border border-[rgba(255,255,255,0.11)] rounded-[0.5625rem] shadow-[0px 1px 2px rgba(22,22,22,0.12)] transition-transform hover:scale-105"
    >
      {children}
    </TxnButton>
  );
};

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  amount,
  recipient,
}) => {
  const { address } = useAccount();
  const [txnType, setTxnType] = useState<"approveTxn" | "transferTxn">();
  const [txnSuccess, setTxnSuccess] = useState(false);

  const {
    data,
    isError,
    isFetched,
    isFetching,
    error,
    refetch: refetchAllowance,
    isRefetching: refetchingAllowance,
    status,
  } = useReadContract({
    abi: ghoAbi,
    address: GHO_TOKEN_SEPOLIA_ADDRESS,
    functionName: "allowance",
    args: [address, recipient],
  });

  console.log("error while getting allowance: " + error);

  useEffect(() => {
    console.log("allowance status: ", { status });
  }, [status]);

  if (txnSuccess && txnType === "transferTxn") {
    return <div>Payment Successful</div>;
  }

  console.log(Number(data?.toString()), isError, isFetched, isFetching, error);

  if (isFetching || refetchingAllowance)
    return <div>Fetching Allowance...</div>;

  if (isError) return <div>Error fetching allowance {error.message}</div>;

  const allowanceRequired = Number(amount) - Number(data?.toString());
  console.log({ allowanceRequired });

  if (allowanceRequired <= 0) {
    return (
      <Button
        writeContractArgs={{
          abi: abi as Abi,
          address: recipient,
          functionName: "mint",
          args: [
            "12532609583862916517",
            "0xe54222F1220B0766e50eB156568798A7d046C8EC",
            0,
          ],
        }}
        buttonLabel="Make Payment"
        onSuccess={() => {
          setTxnType("transferTxn");
          setTxnSuccess(true);
        }}
      >
        {({ isSuccess, error, status }) => {
          error && console.error(error?.message);
          return (
            <div className="overflow-y-auto  max-h-20 px-5 pl-10">
              {isSuccess && "Success"}
              {error && "Error" + error.cause}
            </div>
          );
        }}
      </Button>
    );
  }

  return (
    <Button
      writeContractArgs={{
        abi: ghoAbi as Abi,
        address: GHO_TOKEN_SEPOLIA_ADDRESS,
        functionName: "approve",
        args: [recipient, MAX_ALLOWANCE],
      }}
      buttonLabel="Approve GHO Tokens"
      onSuccess={() => {
        setTxnType("approveTxn");
        // setTxnSuccess(true);
        console.log("refetching allowance");
        refetchAllowance();
      }}
    >
      {({ isSuccess, error, isPending, status }) => {
        if (isPending) return "Loading...";
        error && console.error(error?.message);
        return (
          <div className="overflow-y-auto  max-h-20 px-5 pl-10">
            {isSuccess && "Success"}
            {error && "Error" + error.cause}
          </div>
        );
      }}
    </Button>
  );
};
