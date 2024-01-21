import { fetchNFTs } from "@/lib/utils";
import IPFSDataViewer from "@components/IPFSDataViewer";
import { useAccount } from "wagmi";

export default function Index() {
  const { address } = useAccount();

  // const NFTs = fetchNFTs();

  console.log({ address });

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
