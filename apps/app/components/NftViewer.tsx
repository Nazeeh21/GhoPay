import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react"; // or your specific import path
import { config } from "wagmiConfig";
import { Modal } from "./Modal";

export interface NFTData {
  name: string;
  description: string;
  image: string;
}

const NftViewer: React.FC<NFTData> = ({description, image, name}) => {

  return (
    <Card className="border-gray-400 border-2 p-2 rounded-2xl">
        <>
          <img
            alt="NFT Artwork"
            className="w-full overflow-hidden rounded-t-xl object-cover"
            height="200"
            src={image}
            width="200"
          />
          <hr className="border-t border-gray-300 my-2 dark:border-gray-700" />
          <CardContent>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Price: {(Math.random() / 10).toFixed(3)} ETH
            </p>
           <div className="mt-3">
           </div>
          </CardContent>
        </>
    </Card>
  );
};

export default NftViewer;