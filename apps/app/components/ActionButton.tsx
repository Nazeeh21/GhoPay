import { MAX_ALLOWANCE } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Abi, Address, Hash } from "viem";
import {
  useAccount,
  useContractRead,
  useWaitForTransaction
} from "wagmi";
import contractAbi from "../@/lib/abi.json";
import ghoAbi from "../@/lib/ghoABi.json";
import { TxnButton, TxnButtonProps } from "./TxnButton";

interface ActionButtonsProps {
  recipient: Address;
  amount: BigInt;
}

interface ButtonProps
  extends Pick<TxnButtonProps, "children" | "onSuccess" | "writeContractArgs"> {
  buttonLabel?: string | React.ReactNode;
}

export const Spinner = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 mx-auto" />
    <p className="mt-4 text-center">Processing transaction...</p>
  </div>
);

export const TxnSuccess = () => (
  <div className=" flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <CheckIcon className="h-16 w-16 text-green-500 mx-auto" />
      <p className="mt-4 text-center">Transaction successful!</p>
    </div>
  </div>
);

const GHO_TOKEN_SEPOLIA_ADDRESS = "0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const [txnData, setTxnData] = useState<Hash>();
  const {
    data,
    isLoading,
    isError,
    isSuccess: txnSuccess,
    refetch: refetchTxnData,
    isFetching,
    status,
    isRefetching,
    error,
  } = useWaitForTransaction({
    hash: txnData ?? "0x0",
  });

  useEffect(() => {
    console.log({ txnSuccess });
    console.log({ txnData });
    console.log({ status });
    console.log({ isLoading });
    // (async () => {
    if (txnSuccess && !error) {
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

  if (isLoading && txnData && !txnSuccess) return <Spinner />;

  return (
    <TxnButton
      onSuccess={(data) => {
        setTxnData((prev) => data?.hash);
        if (data?.hash) {
          refetchTxnData();
        }
      }}
      buttonLabel={props.buttonLabel}
      writeContractArgs={props.writeContractArgs}
      className="w-full p-2 text-white bg-gradient-to-r from-[#FC00FF] to-[#00DBDE] bg-gradient-to-r from-[#5C258D] to-[#4389A2] border border-[rgba(255,255,255,0.11)] rounded-[0.5625rem] shadow-[0px 1px 2px rgba(22,22,22,0.12)] transition-transform hover:scale-105 flex flex-col justify-center items-center"
    >
      {children}
    </TxnButton>
  );
};
const ActionButtons: React.FC<ActionButtonsProps> = ({ recipient, amount }) => {
  const { address } = useAccount();
  const [txnType, setTxnType] = useState<"approveTxn" | "transferTxn">();
  const [txnSuccess, setTxnSuccess] = useState(false);

  const {
    data: allowance,
    refetch: refetchAllowance,
    isFetching,
    isRefetching: refetchingAllowance,
    isError,
    error,
  } = useContractRead({
    abi: ghoAbi,
    address: GHO_TOKEN_SEPOLIA_ADDRESS,
    functionName: "allowance",
    args: [address, recipient],
  });

  const allowanceRequired = Number(amount) - Number(allowance?.toString());

  console.log("allowance required", allowanceRequired);

  if (txnSuccess && txnType === "transferTxn") {
    return <TxnSuccess />;
  }

  if (isFetching || refetchingAllowance)
    return <div>Fetching Allowance...</div>;

  if (isError) return <div>Error fetching allowance {error?.message}</div>;
  return (
    <>
      {allowanceRequired <= 0 ? (
        <Button
          writeContractArgs={{
            abi: contractAbi as Abi,
            address: recipient,
            functionName: "mint",
            args: [
              12532609583862916517,
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
      ) : (
        <Button
          writeContractArgs={{
            abi: ghoAbi as Abi,
            address: GHO_TOKEN_SEPOLIA_ADDRESS,
            functionName: "approve",
            args: [recipient, MAX_ALLOWANCE],
          }}
          buttonLabel="Approve GHO Tokens"
          onSuccess={async () => {
            setTxnType("approveTxn");
            setTxnSuccess(true);
            console.log("refetching allowance");
            await refetchAllowance();
          }}
        >
          {({ isSuccess, error, isLoading, status }) => {
            // if (isLoading) return "Loading...";
            error && console.error(error?.message);
            return (
              <div className="overflow-y-auto  max-h-20 px-5 pl-10">
                {/* {status === "loading" && "Loading..."} */}
                {isSuccess && "Success"}
                {error && "Error" + error.cause}
              </div>
            );
          }}
        </Button>
      )}
    </>
  );
};

export { ActionButtons };
