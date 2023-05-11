import React from "react";
import { Icon, aicode, arb} from "../../Assets";

const Earn = () => {
  return (
    <div>
      {/*F.A.Qs*/}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-righteous">
              Stake to Earn
            </h2>
          </div>

          <div className="max-w-screen-xl mx-auto font-jost m-24 lg:w-8/12 rounded-2xl border border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
            <div className="p-8 text-slate-50 text-3xl">
              <p>SHIBAI Staking Statistics</p>
            </div>

            <div className="p-8 flex flex-row justify-around border-y border-orange-500">
              <div className="py-4">
                <p className="text-slate-50">Current Staking</p>
                <p className="text-orange-500 font-bold text-lg">48,595.6T</p>
              </div>
              <div className=" py-4">
                <p className="text-slate-50">APY</p>
                <p className="text-orange-500 font-bold text-lg">285.522 %</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  p-4  ">
              <div className=" rounded-2xl py-4 m-2 basis-1/2 border border-orange-500">
                <p className="text-slate-50">My Staking</p>
                <p className="text-orange-500 font-bold text-lg">0 SHIBAI</p>
                <img
                            src={Icon}
                            width={50}
                            height={50}
                            alt="AiShiba"
                            className="mx-auto py-4"
                        />
                <div className="p-4">
                <a
                  href="#0"
                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                >
                  Start Staking
                </a>
                </div>
              </div>
               
              <div className=" rounded-2xl py-4 basis-1/2 m-2 border border-orange-500">
                <p className="text-slate-50">My Reward</p>
                <p className="text-orange-500 font-bold text-lg">0 SHIBAI</p>
                <img
                            src={Icon}
                            width={50}
                            height={50}
                            alt="AiShiba"
                            className="mx-auto py-4"
                        />
                <div className="p-4">
                <a
                  href="#0"
                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                >
                  Claim Rewards
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto font-jost m-24 lg:w-8/12 rounded-2xl border border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
            <div className="p-8 text-slate-50 text-3xl">
              <p>AICODE Staking Statistics</p>
            </div>

            <div className="p-8 flex flex-row justify-around border-y border-orange-500">
              <div className="py-4">
                <p className="text-slate-50">Current Staking</p>
                <p className="text-orange-500 font-bold text-lg">437124.574</p>
              </div>
              <div className=" py-4">
                <p className="text-slate-50">APY</p>
                <p className="text-orange-500 font-bold text-lg">28283.639 %</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  p-4  ">
              <div className=" rounded-2xl py-4 m-2 basis-1/2 border border-orange-500">
                <p className="text-slate-50">My Staking</p>
                <p className="text-orange-500 font-bold text-lg">0 AICODE</p>
                <img
                            src={aicode}
                            width={50}
                            height={50}
                            alt="AiShiba"
                            className="mx-auto py-4"
                        />
                <div className="p-4">
                <a
                  href="#0"
                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                >
                  Start Staking
                </a>
                </div>
              </div>
               
              <div className=" rounded-2xl py-4 basis-1/2 m-2 border border-orange-500">
                <p className="text-slate-50">My Reward</p>
                <p className="text-orange-500 font-bold text-lg">0 ARB</p>
                <img
                            src={arb}
                            width={50}
                            height={50}
                            alt="AiShiba"
                            className="mx-auto py-4"
                        />
                <div className="p-4">
                <a
                  href="#0"
                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                >
                  Claim Rewards
                </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Earn;
