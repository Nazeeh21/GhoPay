import { erc20Abi } from "viem";
import { TxnButton } from "../../web3ui/TxnButton";

export const ActionButtons = () => {
  return (
    <>
      <TxnButton writeContractArgs={{
        abi: erc20Abi,
        address: "0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D",
        functionName: "approve",
        args: ["spender", "1213"]
      }} className="w-full p-2 text-white bg-gradient-to-r from-[#FC00FF] to-[#00DBDE] bg-gradient-to-r from-[#5C258D] to-[#4389A2] border border-[rgba(255,255,255,0.11)] rounded-[0.5625rem] shadow-[0px 1px 2px rgba(22,22,22,0.12)] transition-transform hover:scale-105">
        Approve GHO
      </TxnButton>
    </>
  );
};
