import React from "react";
import oi from "../assets/oi.svg";
import ttv from "../assets/ttv.svg";
import tu from "../assets/tu.svg";
import ss from "../assets/ss.svg";
import rlr from "../assets/rlr.svg";
import soc from "../assets/soc.svg";
import zomi from "../assets/zomi.png";
import zlp from "../assets/zlp.png";
import "../css/style.css";

export default function HomePage({ scrSize }) {
  return (
    <div className="text-white">
      <section className="md:border-b md:border-[#ffffff2f] pb-16">
        <div className="mt-20 md:mx-32 mx-5 ">
          <h1 className="text-5xl md:text-6xl tracking-tighter">
            Decentralized <br />
            Perpetual Exchange
          </h1>
          <p className="md:text-[20px] text-sm my-3 font-light tracking-wide">
            Trade BTC, ETH, AVAX and other top <br /> cryptocurrencies with up
            to 30x leverage <br /> directly from your wallet
          </p>
          <button className="bg-emerald-500 px-4 py-2 rounded-md my-5 text-[15px] hover:bg-emerald-600 ">
            Launch Exchange
          </button>
          <div className="flex-col md:flex-row flex justify-between gap-10 h-32 mt-14">
            <div className="flex border flex-1 items-center darkShadow1 border-[#49484864] rounded-md px-7 py-5 gap-5">
              <img src={ttv} className="h-12" alt="" />
              <div>
                <p className="text-sm md:text-[20px]">Total Trading Volume</p>
                <p className="text-3xl">$0</p>
              </div>
            </div>
            <div className="flex flex-1 border border-[#49484864] darkShadow1 rounded-md px-7 items-center py-5 gap-5">
              <img src={oi} className="h-12" alt="" />
              <div>
                <p className="text-sm md:text-[20px]">Open Interest</p>
                <p className="text-3xl">$0</p>
              </div>
            </div>
            <div className="flex border flex-1 border-[#49484864] darkShadow1 items-center rounded-md px-7 py-5 gap-5">
              <img src={tu} className="h-12" alt="" />
              <div>
                <p className="text-sm md:text-[20px]">Total Users</p>
                <p className="text-3xl">0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:mt-20  mt-56 pb-10">
        <div className="flex flex-col md:flex-row md:gap-32 gap-16 mx-5 md:mx-32">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-2xl mb-4">
              <img src={rlr} alt="" />
              <h2>Reduce Liquidation Risks</h2>
            </div>
            <p className="text-[#ffffffb5] text-md md:text-lg">
              An aggregate of high-quality price <br /> feeds determine when
              liquidations <br /> occur. This keeps positions safe <br />
              from temporary wicks.
            </p>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 text-2xl mb-4">
              <img src={soc} alt="" />
              <h2>Save on Costs</h2>
            </div>
            <p className="text-[#ffffffb5] text-md md:text-lg">
              Enter and exit positions with <br /> minimal spread and zero price{" "}
              <br /> impact. Get the optimal price <br /> without incurring
              additional costs.
            </p>
          </div>
          <div className="flex-1 ">
            <div className="flex items-center gap-3 text-2xl mb-4">
              <img src={ss} alt="" />
              <h2>Simple Swaps</h2>
            </div>
            <p className="text-[#ffffffb5] text-md md:text-lg">
              Open positions through a simple <br /> swap interface.
              Conveniently swap <br /> from any supported asset into the <br />{" "}
              position of your choice.
            </p>
          </div>
        </div>
        <div className="mt-28 pb-10 mx-5 md:mx-32">
          <h1 className="text-4xl font-semibold my-4">
            Two token create our <br /> ecosystem
          </h1>
          <div className="flex flex-col md:flex-row gap-10 text-lg">
            <div className="flex-1 border border-[#ebeaea2e] bg-[#151515] rounded-lg px-6 pb-5 darkShadow1">
              <div className="flex items-center gap-4 text-2xl my-4">
                <img src={zomi} className="h-12" alt="" />
                <h1>$ZOMI</h1>
              </div>
              <p>
                $ZOMI is the utility and governance token. Accrues 30% of the
                platform's generated fees.
              </p>
              <p className="my-4 text-sm text-[#ffffffa1] ">
                Ethereum APR: 0.00%
              </p>
              <div className="flex gap-4 text-sm">
                <button className="py-1 rounded-md px-3.5 hover:bg-emerald-600 bg-emerald-500">
                  Buy
                </button>
                <button className="py-1 rounded-md px-3.5 border border-[#ffffffa1] hover:bg-[#2e2d2d6e] ">
                  Read more
                </button>
              </div>
            </div>
            <div className="flex-1 border border-[#ebeaea2e] bg-[#151515] rounded-lg px-6 darkShadow1 pb-5">
              <div className="flex items-center gap-4 text-2xl my-4">
                <img src={zlp} className="h-12" alt="" />
                <h1>$ZLP</h1>
              </div>
              <p>
                $ZLP is the liquidity provider token. Accrues 70% of the <br />
                platform's generated fees
              </p>
              <p className="my-4 text-sm text-[#ffffffa1] ">
                Ethereum APR: 1,655928,224.10%
              </p>
              <div className="flex gap-4 text-sm">
                <button className="py-1 rounded-md px-3.5 hover:bg-emerald-600 bg-emerald-500">
                  Buy
                </button>
                <button className="py-1 rounded-md px-3.5 border border-[#ffffffa1] hover:bg-[#2e2d2d6e] ">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
