import React from "react";
import { IoMdClose } from "react-icons/io";

export default function ConnectWallet({ onclick }) {
  return (
    <div className="absolute flex justify-center items-center backdrop-blur-lg w-screen h-screen text-white">
      <div className="w-64 bg-[#191818] pb-2 px-2 rounded-lg">
        <div className="flex items-center mb-4 justify-between p-5 border-b border-[#ffffff73]">
          <h1>Connect Wallet</h1>
          <div onClick={onclick} className="cursor-pointer">
            <IoMdClose size={25} />
          </div>
        </div>
        <div className="flex px-5 py-3 items-center hover:bg-[#2a2828] cursor-pointer  gap-5 text-md mx-2 my-1 border border-[#ffffff50]">
          <img
            className="h-6"
            src="https://zomi.finance/static/media/metamask.4b5d438a.png"
            alt=""
          />
          <p>MetaMask</p>
        </div>
        <div className="flex px-5 py-3 items-center hover:bg-[#2a2828] cursor-pointer  gap-5 text-md mx-2 my-3 border border-[#ffffff50]">
          <img
            className="h-6"
            src="https://zomi.finance/static/media/coinbaseWallet.ae86a337.png"
            alt=""
          />
          <p>Coinbase Wallet</p>
        </div>
        <div className="flex px-5 py-3 items-center hover:bg-[#2a2828] cursor-pointer gap-5 text-md mx-2 my-1 border border-[#ffffff50]">
          <img
            className="h-6"
            src="https://zomi.finance/static/media/walletconnect-circle-blue.31c29967.svg"
            alt=""
          />
          <p>WalletConnect</p>
        </div>
      </div>
    </div>
  );
}
