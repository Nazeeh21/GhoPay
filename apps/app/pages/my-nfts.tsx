import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import NftViewer from "@components/NftViewer";
import { Skeleton } from "@/components/ui/skeleton";

export default function Component() {
  const [fetching, setFetching] = useState(false);
  const { address } = useAccount();
  const [NFTsOwned, setNftsOwned] = useState<Array<Object>>();

  useEffect(() => {
    setFetching(true);
    async function fetchData() {
      const response = await fetch(`/api/getNfts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: "0x1a343eFB966E63bfA25A2b368455448f02466Ffc",
        }),
      });

      const data = await response.json();

      setNftsOwned(data?.ownedNfts);

      console.log("nft data from /my-nfts", data);
    }

    try {
      fetchData();
    } catch (error) {
      console.error("Error fetching NFT data:", error);
    } finally {
      setFetching(false);
    }
  }, [address]);
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">My NFTs</h1>
          {/* <p className="text-lg text-red-500 mb-6">
            Please switch to the correct network to view your NFTs.
          </p> */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {fetching? 
            new Array(8)
                  .fill(0)
                  .map((_, index) => 
                    <Skeleton
                      className="border-gray-400 border-2 h-60 bg-gray-100 p-2 rounded-2xl"
                      key={index}
                    />
                  )
              : NFTsOwned?.map((nft: any, index: number) => (
                  <NftViewer
                    key={index}
                    image={nft.image.originalUrl}
                    name={nft.name}
                    description={nft.description}
                  />
                ))}
          </div>
        </div>
      </main>
    </div>
  );
}
