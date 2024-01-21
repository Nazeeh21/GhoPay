// define a getNFT route
import { NextApiRequest, NextApiResponse } from "next";
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(config);

export default async function getNFTs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.body;
  console.log("address from api route: ", req.body);
  const nfts = await alchemy.nft.getNftsForOwner(address);

  console.log("nfts from api route: ", nfts);
  res.status(200).json(nfts);
}
