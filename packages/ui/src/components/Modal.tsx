import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { TxnButton } from "../web3ui/TxnButton";
import { ActionButtons } from "./ActionButtons/ActionButton";

interface ModalProps {
  children?: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Buy using GHO</button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 w-[22rem]"
          initialFocus={cancelButtonRef}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed w-[22rem] m-auto inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-medium ">
                        Buy NFT with GHO
                      </div>
                      <div>
                        <XMarkIcon onClick={closeModal}
                          className="h-6 w-6 cursor-pointer text-black font-bold"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="flex font-normal  mt-3 flex-col justify-center items-center gap-4">
                      <div className="flex  w-full items-center justify-between">
                        <div className="text-sm font-medium ">
                          Chainlink Prrice Feed
                        </div>
                        <div className="text-sm font-medium ">120 GHO</div>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <div className="text-sm font-medium ">Txn Fees</div>
                        <div className="text-sm font-medium ">2 GHO</div>
                      </div>
                      <hr className="h-px w-full bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="flex w-full items-center justify-between">
                        <div className="text-lg font-bold ">You will pay</div>
                        <div className="text-xl font-bold ">122 GHO</div>
                      </div>
                      <ActionButtons />
                      {/* <TxnButton className="w-full p-2 text-white bg-gradient-to-r from-[#FC00FF] to-[#00DBDE] bg-gradient-to-r from-[#5C258D] to-[#4389A2] border border-[rgba(255,255,255,0.11)] rounded-[0.5625rem] shadow-[0px 1px 2px rgba(22,22,22,0.12)] transition-transform hover:scale-105">
                        Buy using GHO
                      </TxnButton> */}
                    </div>
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
