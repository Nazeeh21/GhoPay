import { Address, erc20Abi } from "viem";
import { TxnButton, TxnButtonProps } from "../../web3ui/TxnButton";
import { useAccount, useReadContract } from "wagmi";

interface ActionButtonsProps {
  recipient: Address;
  amount: BigInt;
}

interface ButtonProps {
  functionName: string;
  args: readonly unknown[] | undefined;
  buttonLabel?: string | React.ReactNode;
  children?: TxnButtonProps["children"];
}
const ERC20_TOKEN_ADDRESS = "0xf5F2c3Bd2EC96c83233349c80be2cA9e714926c6";

const Button: React.FC<ButtonProps> = ({
  args,
  functionName,
  buttonLabel,
  children,
}) => (
  <TxnButton
    writeContractArgs={{
      abi: erc20Abi,
      address: ERC20_TOKEN_ADDRESS,
      functionName,
      args,
    }}
    buttonLabel={buttonLabel}
    className="w-full p-2 text-white bg-gradient-to-r from-[#FC00FF] to-[#00DBDE] bg-gradient-to-r from-[#5C258D] to-[#4389A2] border border-[rgba(255,255,255,0.11)] rounded-[0.5625rem] shadow-[0px 1px 2px rgba(22,22,22,0.12)] transition-transform hover:scale-105"
  >
    {children}
  </TxnButton>
);

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  amount,
  recipient,
}) => {
  const { address } = useAccount();

  const { data, isError, isFetched, isFetching, error, refetch } =
    useReadContract({
      abi: erc20Abi,
      address: ERC20_TOKEN_ADDRESS,
      functionName: "allowance",
      args: [address!, recipient],
    });

  console.log(Number(data?.toString()), isError, isFetched, isFetching, error);

  if (isFetching) return <div>Fetching Allowance...</div>;

  if (isError) return <div>Error fetching allowance {error.message}</div>;

  const allowanceRequired = Number(amount) - Number(data?.toString());
  console.log({ allowanceRequired });

  if (allowanceRequired <= 0) {
    return (
      <Button
        functionName="transferFrom"
        args={[address, recipient, amount]}
        buttonLabel="Make Payment"
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
      args={[recipient, allowanceRequired]}
      buttonLabel="Approve GHO Tokens"
    >
      {({ isSuccess, error, isPending, status }) => {
        if (isPending) return "Loading...";
        if (isSuccess && !error) {
          console.log("refetching");
          refetch();
        }
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
