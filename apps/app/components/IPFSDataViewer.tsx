import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react"; // or your specific import path
import { Modal } from "./Modal";

export interface NFTData {
  name: string;
  description: string;
  image: string;
}

const IPFSDataViewer = ({ ipfsHash }: { ipfsHash: string }) => {
  const [nftData, setNftData] = useState<NFTData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://ipfs.io/ipfs/${ipfsHash}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNftData(data);
      } catch (error) {
        console.error("Error fetching IPFS data:", error);
      }
    };

    fetchData();
  }, [ipfsHash]);

  return (
    <Card className="border-gray-400 border-2 p-2 rounded-2xl">
      {nftData ? (
        <>
          <img
            alt="NFT Artwork"
            className="w-full overflow-hidden rounded-t-xl object-cover"
            height="200"
            src={nftData.image}
            width="200"
          />
          <hr className="border-t border-gray-300 my-2 dark:border-gray-700" />
          <CardContent>
            <h3 className="text-lg font-bold">{nftData.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {nftData.description}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Price: {(Math.random() / 10).toFixed(3)} ETH
            </p>
           <div className="mt-3">
           <Modal
              amount={BigInt(12)}
              recipient="0x3e57d3c580d0437498215c7C2472B26d39a94C4B"
            />
           </div>
          </CardContent>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Card>
  );
};

export default IPFSDataViewer;
