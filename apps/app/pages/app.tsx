

import { Card, CardContent } from "@/components/ui/card";
import { Modal } from "@components/Modal";
import { useAccount } from "wagmi";
import { config } from "wagmiConfig";

export default function Index() {
  const { address } = useAccount();

  console.log({ address });

  return (
    <div className="flex -z-10 flex-col min-h-screen">
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="border-gray-400 border-2 p-2 rounded-2xl">
              <img
                alt="NFT Artwork"
                className="w-full overflow-hidden rounded-t-xl object-cover"
                height="200"
                src="https://avatars.githubusercontent.com/u/56908732?v=4"
                width="200"
              />{" "}
              <hr className="border-t border-gray-300 my-2 dark:border-gray-700" />
              <CardContent>
                <h3 className="text-lg font-bold">NFT Title</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Price: 0.01 ETH
                </p>
                <Modal config={config}
                  amount={BigInt(6)}
                  recipient="0xcc626cE857cCb909427845aBA0c59445C75Ea5a2"
                />
              </CardContent>
            </Card>
            <Card className="border-gray-400 border-2 p-2 rounded-2xl">
              <img
                alt="NFT Artwork"
                className="w-full overflow-hidden rounded-t-xl object-cover"
                height="200"
                src="https://avatars.githubusercontent.com/u/56908732?v=4"
                width="200"
              />{" "}
              <hr className="border-t border-gray-300 my-2 dark:border-gray-700" />
              <CardContent>
                <h3 className="text-lg font-bold">NFT Title</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Price: 0.02 ETH
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-400 border-2 p-2 rounded-2xl">
              <img
                alt="NFT Artwork"
                className="w-full overflow-hidden rounded-t-xl object-cover"
                height="200"
                src="https://avatars.githubusercontent.com/u/56908732?v=4"
                width="200"
              />{" "}
              <hr className="border-t border-gray-300 my-2 dark:border-gray-700" />
              <CardContent>
                <h3 className="text-lg font-bold">NFT Title</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Price: 0.03 ETH
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-400 border-2 p-2 rounded-2xl">
              <img
                alt="NFT Artwork"
                className="w-full overflow-hidden rounded-t-xl object-cover"
                height="200"
                src="https://avatars.githubusercontent.com/u/56908732?v=4"
                width="200"
              />{" "}
              <hr className="border-t border-gray-300 my-2 dark:border-gray-700" />
              <CardContent>
                <h3 className="text-lg font-bold">NFT Title</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Price: 0.04 ETH
                </p>
                <div className="z-100">
                <Modal
                config={config}
                  amount={BigInt(6)}
                  recipient="0xcc626cE857cCb909427845aBA0c59445C75Ea5a2"
                />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
