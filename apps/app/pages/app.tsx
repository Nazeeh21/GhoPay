import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetchNFTs } from "@/lib/utils";
import IPFSDataViewer from "@components/IPFSDataViewer";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

export default function Index() {
  const { address, isConnected } = useAccount();

  // const NFTs = fetchNFTs();

  console.log({ address });

  if (!isConnected) {
    return (
      <main className="w-screen text-center flex justify-center items-center">
        <div className=" py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="border-gray-800">
              <CardContent className="flex flex-col items-center justify-center h-auto bg-gradient-to-r from-green-200 to-blue-200 text-gray-800 text-center mx-auto">
                <h3 className="text-4xl font-bold">Connect Wallet</h3>
                <p className="text-lg mt-4 mb-4">
                  Please connect your wallet to buy NFTs with GHO.
                </p>
                <ConnectKitButton theme="midnight" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div></main>
    );
  }

  return (
    <div className="flex -z-10 flex-col min-h-screen">
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {new Array(5).fill(0).map((_, index: number) => (
              <IPFSDataViewer
                key={index}
                ipfsHash="bafkreigd6jqnd6fktceoibkwlmasvjn6vpnqcev57ieamiuyxt466rrfby"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
