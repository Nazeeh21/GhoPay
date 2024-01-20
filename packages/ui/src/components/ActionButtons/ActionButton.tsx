import { Address, erc20Abi } from "viem";
import { ContextType, TxnButton, TxnButtonProps } from "../../web3ui/TxnButton";
import { useAccount, useReadContract, useTransaction } from "wagmi";
import { useEffect, useState } from "react";

interface ActionButtonsProps {
  recipient: Address;
  amount: BigInt;
}

interface ButtonProps extends Pick<TxnButtonProps, "children" | "onSuccess"> {
  functionName: string;
  args: readonly unknown[] | undefined;
  buttonLabel?: string | React.ReactNode;
}
const ERC20_TOKEN_ADDRESS = "0xfA6209ccbE8402043b25682effCff36723692E96";

const Button: React.FC<ButtonProps> = ({
  args,
  functionName,
  children,
  ...props
}) => {
  const [txnData, setTxnData] = useState<ContextType["data"]>();
  const {
    refetch: refetchTxnData,
    isSuccess: txnSuccess,
    isPending: isTxnPending,
    isRefetching: isTxnRefetching,
    isRefetchError,
    status,
  } = useTransaction({
    hash: txnData ?? "0x0"
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
    })()
  }, [txnData]);

  if (txnData && isTxnPending)
    return <div>Waiting for transaction to complete...</div>;

  return (
    <TxnButton
      writeContractArgs={{
        abi: erc20Abi,
        address: ERC20_TOKEN_ADDRESS,
        functionName,
        args,
      }}
      onSuccess={(data) => {
        console.log("setting txnData", { data });
        setTxnData(data?.data);
        if (data?.data) {
          console.log("refetching txnData");
          refetchTxnData();
        }
      }}
      buttonLabel={props.buttonLabel}
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
    status
  } = useReadContract({
    abi: erc20Abi,
    address: ERC20_TOKEN_ADDRESS,
    functionName: "allowance",
    args: [address!, recipient],
  });

  useEffect(() => {
    console.log("allowance status: ", { status });
  }
  , [status])

  if (txnSuccess && txnType === "transferTxn") {
    return <div>Payment Successful</div>;
  }

  console.log(Number(data?.toString()), isError, isFetched, isFetching, error);

  if (isFetching || refetchingAllowance) return <div>Fetching Allowance...</div>;

  if (isError) return <div>Error fetching allowance {error.message}</div>;

  const allowanceRequired = Number(amount) - Number(data?.toString());
  console.log({ allowanceRequired });

 

  if (allowanceRequired <= 0) {
    return (
      <Button
        functionName="transfer"
        args={[recipient, amount]}
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
              {status === "pending" && "Loading..."}
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
      functionName="approve"
      args={[recipient, amount]}
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
            {status === "pending" && "Loading..."}
            {isSuccess && "Success"}
            {error && "Error" + error.cause}
          </div>
        );
      }}
    </Button>
  );
};
