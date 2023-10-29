import React, { useState } from "react";
import ConnectWallet from "../components/ConnectWallet";

const zomi = {
  Price: "$0.00",
  Wallet: "...$ZOMI($...)",
  Stalked: "...$ZOMI($...)",
  APR: "...%",
  Rewards: "$...",
  "Multiplier Points APR": "100.00%",
  "Boost Percentage": "...%",
  "Total Staked": "0 $ZOMI($...)",
  "Total Supply": "10,000 $ZOMI($10)",
};

const vaults = {
  "Staked Tokens": "...",
  "Reserved for Vesting": "0.00 / ...",
  "Vesting Status": "0.0000 / 0.0000",
  Claimable: "0.0000 $ZOMI",
};

const zlptab = {
  Price: "$...",
  Wallet: "...ZLP ($...)",
  Stalked: "...$ZLP($...)",
  APR: "...%",
  Rewards: "$...",
  "Total Staked": "...$ZLP ($...)",
  "Total Supply": "...ZLP ($...)",
};

const zomiLines = ["Stalked", "Boost Percentage", "Total Supply", "Rewards"];

const TotalRewards = {
  "ETH(WETH)": "...($...)",
  $ZOMI: "...($...)",
  "Escrowed $ZOMI": "...($...)",
  "Multiplier Points": "...",
  "Staked Multiplier Points": "...",
  Total: "$...",
};

export default function Earn() {
  const [togleCW, settogleCW] = useState(false);

  const cnctWallet = () => {
    settogleCW(!togleCW);
  };

  return (
    <div className="text-white">
      {togleCW ? <ConnectWallet onclick={cnctWallet} /> : null}
      <div className="md:mx-32 mx-5 my-10">
        <h1 className="text-4xl my-1">Earn</h1>
        <p className="text-md text-[#ffffff81]">
          Stake $ZOMI and $ZLP to earn rewards.
        </p>
        <div className="flex md:flex-row md:text-[16px] text-sm flex-col justify-between gap-10 mt-6">
          <div className="border md:text-[16px] text-sm border-[#ffffff46] bg-[#151515] rounded-md flex-1">
            <h1 className="border-b px-4 py-3 border-[#ffffff9c]">$ZOMI</h1>
            {Object.entries(zomi).map(([key, value]) => (
              <div
                key={key}
                className={
                  zomiLines.includes(key)
                    ? "flex justify-between text-md px-4 my-4 pb-4 border-b border-[#ffffff92]"
                    : "flex justify-between text-md my-4 px-4"
                }
              >
                <p className="text-[#ffffffa2]">{key}</p>
                <p>{value}</p>
              </div>
            ))}
            <button className="bg-emerald-500 px-3 py-1.5 rounded-lg hover:bg-emerald-600 mb-4 ml-4">
              Buy $ZOMI
            </button>
          </div>
          <div className="border border-[#ffffff46] bg-[#151515] rounded-md flex-1">
            <h1 className="border-b px-4 py-3 border-[#ffffff9c]">
              Total Rewards
            </h1>
            {Object.entries(TotalRewards).map(([key, value]) => (
              <div
                key={key}
                className={"flex justify-between text-md my-4 px-4"}
              >
                <p className="text-[#ffffffa2]">{key}</p>
                <p>{value}</p>
              </div>
            ))}
            <div className="mt-40 border-t border-[#ffffff9a] pt-5">
              <button
                onClick={cnctWallet}
                className="bg-emerald-500 px-3  py-1.5 rounded-lg hover:bg-emerald-600 mb-4 ml-4"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
        <div className="flex md md:text-[16px] text-sm md:flex-row flex-col justify-between gap-10 mt-6">
          <div className="border border-[#ffffff46] bg-[#151515] rounded-md flex-1">
            <h1 className="border-b px-4 py-3 border-[#ffffff9c]">
              $ZLP (Ethereum)
            </h1>
            {Object.entries(zlptab).map(([key, value]) => (
              <div
                key={key}
                className={
                  zomiLines.includes(key)
                    ? "flex justify-between text-md px-4 my-4 pb-4 border-b border-[#ffffff92]"
                    : "flex justify-between text-md my-4 px-4"
                }
              >
                <p className="text-[#ffffffa2]">{key}</p>
                <p>{value}</p>
              </div>
            ))}
            <div>
              <button className="bg-emerald-500 px-3 py-1.5 rounded-lg hover:bg-emerald-600 mb-4 ml-4">
                Buy $ZLP
              </button>
              <button className="bg-emerald-500 px-3 py-1.5 rounded-lg hover:bg-emerald-600 mb-4 ml-4">
                Sell $ZLP
              </button>
            </div>
          </div>
          <div className="border border-[#ffffff46] bg-[#151515] rounded-md flex-1">
            <h1 className="border-b px-4 py-3 border-[#ffffff9c]">
              Escrowed $ZOMI
            </h1>
            {Object.entries(zlptab).map(([key, value]) => (
              <div
                key={key}
                className={
                  zomiLines.includes(key)
                    ? "flex justify-between text-md px-4 my-4 pb-4 border-b border-[#ffffff92]"
                    : "flex justify-between text-md my-4 px-4"
                }
              >
                <p className="text-[#ffffffa2]">{key}</p>
                <p>{value}</p>
              </div>
            ))}
            <button
              onClick={cnctWallet}
              className="bg-emerald-500 px-3  py-1.5 rounded-lg hover:bg-emerald-600 mb-4 ml-4"
            >
              Connect Wallet
            </button>
          </div>
        </div>
        <h1 className="mt-10 text-4xl font-semibold">Vest</h1>
        <p className="text-md text-[#ffffff92]">
          Convert esZOMI tokens to $ZOMI tokens. <br />
          Please read the vesting details before using the vaults.
        </p>
        <div className="flex md:flex-row flex-col gap-10 mt-5">
          <div className="border border-[#ffffff46] bg-[#151515] rounded-md flex-1">
            <h1 className="border-b px-4 py-3 border-[#ffffff9c]">
              $ZOMI Vault
            </h1>
            {Object.entries(vaults).map(([key, value], i) => (
              <div
                key={key}
                className={
                  zomiLines.includes(key)
                    ? "flex justify-between text-md px-4 my-4 pb-4 border-b border-[#ffffff92]"
                    : "flex justify-between text-md my-4 px-4"
                }
              >
                <p className="text-[#ffffffa2]">{key}</p>
                <p>{value}</p>
              </div>
            ))}
            <div className="border-t pt-5 border-[#ffffff46]">
              <button
                onClick={cnctWallet}
                className="bg-emerald-500 px-3 py-1.5 rounded-lg hover:bg-emerald-600 mb-4 ml-4"
              >
                Connect Wallet
              </button>
            </div>
          </div>
          <div className="border border-[#ffffff46] bg-[#151515] rounded-md flex-1">
            <h1 className="border-b px-4 py-3 border-[#ffffff9c]">
              $ZLF Vault
            </h1>
            {Object.entries(vaults).map(([key, value]) => (
              <div
                key={key}
                className={
                  zomiLines.includes(key)
                    ? "flex justify-between text-md px-4 my-4 pb-4 border-b border-[#ffffff92]"
                    : "flex justify-between text-md my-4 px-4"
                }
              >
                <p className="text-[#ffffffa2]">{key}</p>
                <p>{value}</p>
              </div>
            ))}
            <div className="border-t pt-5 border-[#ffffff46]">
              <button
                onClick={cnctWallet}
                className="bg-emerald-500 px-3 py-1.5 rounded-lg hover:bg-emerald-600 mb-4 ml-4"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
