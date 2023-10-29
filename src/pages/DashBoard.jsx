import React from "react";
import etherium from "../assets/etherium.svg";
import zomi from "../assets/zomi.png";
import zlp from "../assets/zlp.png";
import DonutChart from "../components/DonutChart";

const Overview = {
  Aum: 34,
  "$ZLP Pool": 34,
  "24h Volume": 0,
  "Long Position": 0,
  "Short Position": 0,
};

const zlpIndexComposition = [
  {
    token: "Ethereum",
    sm: "Eth",
    img: "https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg",
    price: "$1,794.89",
    pool: "$19",
    weight: "50.49% / 25.00%",
    UTILIZATION: "0.00%",
  },
  {
    token: "Wrapped Bitcoin",
    sm: "WBTC",
    img: "https://zomi.finance/static/media/ic_wbtc_24.5dda0ca3.svg",
    price: "$34,155.69",
    pool: "$0",
    weight: "0.00% / 25.00%",
    UTILIZATION: "0.00%",
  },
  {
    token: "ApeCoin",
    sm: "APE",
    img: "https://zomi.finance/static/media/ic_ape_24.a00a11a9.svg",
    price: "$1.39",
    pool: "$0",
    weight: "0.00% / 25.00%",
    UTILIZATION: "0.00%",
  },
  {
    token: "USD Coin",
    sm: "USDC",
    img: "https://zomi.finance/static/media/ic_usdc_24.0952740b.svg",
    price: "$1.00",
    pool: "$14",
    weight: "49.50% / 25.00%",
    UTILIZATION: "0.00%",
  },
];

const zomidata = {
  Price: "$0.00",
  Supply: "10,000 $ZOMI",
  "Total Staked": "$0",
  "Market Cap": "$10",
};

const zlpdata = {
  Price: "$1.137",
  Supply: "29 $ZLP",
  "Total Staked": "$34",
  "Market Cap": "$34",
  "Stablecoin Percentage": "49.50%",
};

const TotalStats = {
  "Total Fees": 0,
  "Total Volume": 0,
  "Floor Price Fund": "627,497",
};

export default function DashBoard({ scrSize }) {
  console.log(scrSize);
  return (
    <div className="text-white">
      <div className="md:mx-32 mx-5 my-10">
        <div className="flex gap-4 items-center">
          <h1 className="text-4xl font-semibold">Stats</h1>
          <img src={etherium} className="h-7" alt="" />
        </div>
        <p className="text-[#ffffff9c] mt-2 mb-8">
          Ethereum Total Stats start from 06 Jan 2022. <br />
          For detailed stats:
        </p>
        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex-1 bg-[#151515] rounded-md border border-[#ffffff5b]">
            <h1 className="text-xl p-2 px-4 border-b border-[#ffffff5b]">
              Overview
            </h1>
            <ul>
              {Object.entries(Overview).map(([key, value]) => (
                <li key={key}>
                  <div className="flex justify-between mx-4 my-3">
                    <p className="text-[#ffffffb6]">{key}</p>
                    <p className="underline decoration-[#ffffff86] decoration-1 underline-offset-4 decoration-dashed">
                      ${value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-[#151515] rounded-md border border-[#ffffff5b]">
            <h1 className="text-xl p-2 px-4 border-b border-[#ffffff5b]">
              Total Stats
            </h1>
            <ul>
              {Object.entries(TotalStats).map(([key, value]) => (
                <li key={key}>
                  <div className="flex justify-between mx-4 my-3">
                    <p className="text-[#ffffffb6]">{key}</p>
                    <p className="underline decoration-[#ffffff86] decoration-1 underline-offset-4 decoration-dashed">
                      ${value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-3  items-center mt-8 mb-1">
          <h1 className="text-4xl font-semibold">Tokens</h1>
          <img src={etherium} className="h-7" alt="" />
        </div>
        <p className="text-[#ffffffa3] ">Platform and $ZLP index tokens.</p>
        <div className="flex flex-col">
          <div className="flex md:flex-row flex-col gap-8 mt-6">
            <div className="flex-1 flex md:flex-row flex-col items-center rounded-md border border-[#ffffff5b] bg-[#151515]">
              <div className="flex-1">
                <div className="flex items-center gap-3 py-4 px-4  border-b border-[#ffffff5b]">
                  <img src={zomi} className="h-10" alt="" />
                  <div>
                    <h1 className="text-xl">
                      $ZOMI
                      <p className="text-sm text-[#ffffffa2]">$ZOMI</p>
                    </h1>
                  </div>
                </div>
                <ul className="text-sm md:text-[16px]">
                  {Object.entries(zomidata).map(([key, value]) => (
                    <li key={key}>
                      <div className="flex gap-24 md:gap-0 justify-between mx-4 my-3">
                        <p className="text-[#ffffffb6]">{key}</p>
                        <p className="">${value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" flex-initial">
                <DonutChart centerText={"Distribution"} ratio={[94, 6]} />
              </div>
            </div>
            <div className="flex-1 flex md:flex-row flex-col items-center rounded-md border border-[#ffffff5b] bg-[#151515]">
              <div className="flex-1">
                <div className="flex items-center gap-3 py-2 px-4  border-b border-[#ffffff5b]">
                  <img src={zomi} className="h-10" alt="" />
                  <div>
                    <h1 className="text-xl">
                      $ZLP
                      <p className="text-sm text-[#ffffffa2]">$ZLP</p>
                    </h1>
                  </div>
                </div>
                <ul className="">
                  {Object.entries(zlpdata).map(([key, value]) => (
                    <li key={key}>
                      <div className="flex gap-20 text-sm md:gap-0 md:text-[16px] justify-between mx-4 my-3">
                        <p className="text-[#ffffffb6]">{key}</p>
                        <p className="">${value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" flex-initial">
                <DonutChart centerText={"$ZLP Pool"} ratio={[50, 50]} />
              </div>
            </div>
          </div>
          {scrSize !== "small" ? (
            <div className="border border-[#ffffff59] rounded-md mt-10 ">
              <div className="flex py-5 gap-5 px-6 border-b border-[#ffffff6f]">
                <h1>$ZLP Index Composition</h1>
                <img src={etherium} alt="" />
              </div>
              <ul className="flex justify-between text-sm my-5 mx-6">
                <li className="w-48">TOKEN</li>
                <li className="w-32">PRICE</li>
                <li className="w-36">POOL</li>
                <li className="">WEIGHT</li>
                <li>UTILIZATION</li>
              </ul>
              {zlpIndexComposition.map((e, i) => (
                <ul className="flex justify-between my-5 mx-4" key={i}>
                  <li className=" w-48 ">
                    <div className="flex items-center gap-4">
                      <img src={e.img} className="h-10" alt="" />
                      <p className="">{e.token}</p>
                    </div>
                  </li>
                  <li className="w-32">{e.price}</li>
                  <li className="w-28">{e.pool}</li>
                  <li className="w-32">{e.weight}</li>
                  <li>{e.UTILIZATION}</li>
                </ul>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-8 mt-10">
              {zlpIndexComposition.map((e, i) => (
                <div
                  key={i}
                  className="border border-[#ffffff94] rounded-md bg-[#151515]"
                >
                  <div className="flex px-4 py-4 border-b border-[#ffffff86] gap-2">
                    <img src={e.img} alt="" />
                    <h1>{e.sm}</h1>
                  </div>
                  <ul className="m-4 flex flex-col gap-3">
                    <li className="flex justify-between">
                      <p>Price</p>
                      <p>{e.price}</p>
                    </li>
                    <li className="flex justify-between">
                      <p>Pool</p>
                      <p>{e.pool}</p>
                    </li>
                    <li className="flex justify-between">
                      <p>Weight</p>
                      <p>{e.weight}</p>
                    </li>
                    <li className="flex justify-between">
                      <p>Utilization</p>
                      <p>{e.UTILIZATION}</p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
