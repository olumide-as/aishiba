import React from "react";
import { Icon, aicode } from "../../Assets";
import { Tabs } from "flowbite-react";

const Aicode = () => {
  return (
    <div>
      {/*F.A.Qs*/}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto  md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-righteous">
              AICODE
            </h2>
          </div>

          <div className="my-24">
            <Tabs.Group
              aria-label="Full width tabs"
              className="font-jost  "
            >
              <Tabs.Item title="Burning Mining" class="text-orange-500 text-lg">
                <div className="max-w-screen-xl mx-auto font-jost m-24 lg:w-11/12 rounded-2xl border border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
                  <div className="p-8 text-slate-50 text-3xl">
                    <p>Burning Mining Statistics</p>
                  </div>

                  <div className="p-8 flex flex-row flex-wrap justify-around border-y border-orange-500">
                    <div className="py-4">
                      <p className="text-slate-50">
                        Total AICODE for Burning Mining
                      </p>
                      <p className="text-orange-500 font-bold text-lg">
                        12600000.000
                      </p>
                    </div>
                    <div className=" py-4">
                      <p className="text-slate-50">Total AICODE Distributed</p>
                      <p className="text-orange-500 font-bold text-lg">
                        305454.500
                      </p>
                    </div>
                    <div className=" py-4">
                      <p className="text-slate-50">
                        Total SHIBAI burned in Burning Mining
                      </p>
                      <p className="text-orange-500 font-bold text-lg">
                        26.488.9T
                      </p>
                    </div>
                    <div className=" py-4">
                      <p className="text-slate-50">Total SHIBAI Destroyed</p>
                      <p className="text-orange-500 font-bold text-lg">
                        13,244.5T
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row  p-4  ">
                    <div className=" rounded-2xl py-4 m-2 basis-1/2 border border-orange-500">
                      <p className="text-slate-50">Today's SHIBAI Burned</p>
                      <img
                        src={Icon}
                        width={50}
                        height={50}
                        alt="AiShiba"
                        className="mx-auto py-4"
                      />

                      <p className="text-orange-500 font-bold text-lg">
                        67.9514T SHIBAI
                      </p>
                      <div className="p-4"></div>
                    </div>

                    <div className=" rounded-2xl py-4 basis-1/2 m-2 border border-orange-500">
                      <p className="text-slate-50">
                        Today's AICODE Distributed
                      </p>
                      <img
                        src={aicode}
                        width={50}
                        height={50}
                        alt="AiShiba"
                        className="mx-auto py-4"
                      />

                      <p className="text-orange-500 font-bold text-lg">
                        23496.500 AICODE
                      </p>
                      <div className="p-4"></div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row  px-4 pb-4  ">
                    <div className=" rounded-2xl py-4 m-2 basis-1/2 border border-orange-500">
                      <p className="text-slate-50">My SHIBAI in Burning Pool</p>
                      <img
                        src={Icon}
                        width={50}
                        height={50}
                        alt="AiShiba"
                        className="mx-auto py-4"
                      />
                      <p className="text-orange-500 font-bold text-lg">
                        0.000 SHIBAI
                      </p>

                      <div className="p-4">
                        <a
                          href="#0"
                          className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                        >
                          Burn
                        </a>
                      </div>
                    </div>

                    <div className=" rounded-2xl py-4 basis-1/2 m-2 border border-orange-500">
                      <p className="text-slate-50">My Reward </p>
                      <img
                        src={aicode}
                        width={50}
                        height={50}
                        alt="AiShiba"
                        className="mx-auto py-4"
                      />
                      <p className="text-orange-500 font-bold text-lg">
                        0.000 AICODE
                      </p>

                      <div className="p-4">
                        <a
                          href="#0"
                          className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                        >
                          Claim
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-50 p-4 text-2xl text-left">Rules</p>

                  <p className="text-slate-50 p-4 text-left">
                    1. 50% of the invested SHIBAI will be burned, while the
                    other 50% will be placed in a time-locked address as an
                    incentive after the launch of AIFI. (Destroyed Address:)
                    <br></br>
                    2. SHIBAI’s burning and AICODE’s mining will be completed at
                    24:00 (UTC) every day. Participants will obtain AICODE
                    proportionally based on their daily share of total SHIBAI
                    burnings.<br></br>
                    3. Today's estimated reward amount is constantly changing,
                    and it is related to how much SHIBAI you burn and how much
                    SHIBAI gets burned in total.<br></br>
                    4. When there is a balance of AICODE in the account, it can
                    be claimed by clicking on the "Claim" button.
                  </p>

                  <p className="text-red-600 p-4 text-left">
                    Note: SHIBAI cannot be undone once it is deposited in the
                    Burning Pool.
                  </p>
                </div>
              </Tabs.Item>

              <Tabs.Item title="Trade Mining" className="text-orange-500">
                <div className="max-w-screen-xl mx-auto font-jost m-24 lg:w-11/12 rounded-2xl border border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
                  <div className="p-8 text-slate-50 text-3xl">
                    <p>Trade Mining Statistics</p>
                  </div>

                  <div className="p-8 flex flex-row flex-wrap justify-around border-y border-orange-500">
                    <div className="py-4">
                      <p className="text-slate-50">
                        Total AICODE for Trade Mining
                      </p>
                      <p className="text-orange-500 font-bold text-lg">
                        8400000.000
                      </p>
                    </div>
                    <div className=" py-4">
                      <p className="text-slate-50">Total AICODE Distributed</p>
                      <p className="text-orange-500 font-bold text-lg">
                        203632.000
                      </p>
                    </div>
                    <div className=" py-4">
                      <p className="text-slate-50">Total Valid Purchase</p>
                      <p className="text-orange-500 font-bold text-lg">
                        $63908699.000
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row  p-4  ">
                    <div className=" rounded-2xl py-4 m-2 basis-1/2 border border-orange-500">
                      <p className="text-slate-50">Today's Valid Pruchase</p>
                      <img
                        src={Icon}
                        width={50}
                        height={50}
                        alt="AiShiba"
                        className="mx-auto py-4"
                      />

                      <p className="text-orange-500 font-bold text-lg">
                        $651143.000
                      </p>
                      <div className="p-4"></div>
                    </div>

                    <div className=" rounded-2xl py-4 basis-1/2 m-2 border border-orange-500">
                      <p className="text-slate-50">
                        Today's AICODE Distributed
                      </p>
                      <img
                        src={aicode}
                        width={50}
                        height={50}
                        alt="AiShiba"
                        className="mx-auto py-4"
                      />

                      <p className="text-orange-500 font-bold text-lg">
                        15664.000 AICODE
                      </p>
                      <div className="p-4"></div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row  px-4 pb-4  ">
                    <div className=" rounded-2xl py-4 m-2 basis-1/2 border border-orange-500">
                      <p className="text-slate-50">My Valid Purchase</p>
                      <img
                        src={Icon}
                        width={50}
                        height={50}
                        alt="AiShiba"
                        className="mx-auto py-4"
                      />
                      <p className="text-orange-500 font-bold text-lg">$0.00</p>

                      <div className="p-4">
                        <a
                          href="#0"
                          className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                        >
                          Buy SHIBAI
                        </a>
                      </div>
                    </div>

                    <div className=" rounded-2xl py-4 basis-1/2 m-2 border border-orange-500">
                      <p className="text-slate-50">My Rewards </p>
                      <img
                        src={aicode}
                        width={50}
                        height={50}
                        alt="AiShiba"
                        className="mx-auto py-4"
                      />
                      <p className="text-orange-500 font-bold text-lg">
                        0.000 AICODE
                      </p>

                      <div className="p-4">
                        <a
                          href="#0"
                          className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                        >
                          Claim
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-50 p-4 text-2xl text-left">Rules</p>

                  <p className="text-slate-50 p-4 text-left">
                    1. You are eligible to take part in AICODE's rewards
                    distribution if you make an AIDOGE purchase on Camelot
                    valued more than 500$ in a single transaction.
                    <br></br>
                    2. Today's estimated reward amount is constantly changing,
                    and it is related to how much AIDOGE you purchase and how
                    much the entire transaction amount for purchasing AIDOGE is.
                    <br></br>
                    3. The AIDOGE you trade can only be used to share the AICODE
                    output on the same day.<br></br>
                    4. The oracle machine is used to calculate the transaction
                    amount in trading mining, and the price is constantly
                    fluctuating. When purchasing AIDOGE, please ensure that you
                    reserve an appropriate amount of space to prevent the
                    transaction amount from falling below the required standard.
                    We recommend purchasing more than $600 to ensure a
                    successful transaction.<br></br>
                    5. Any transaction amount exceeding $500 will be considered
                    as a valid purchase amount.<br></br>
                    6. Only purchases made in Camelot v2 ETH/AIDOGE will be
                    counted in trading mining. Please refrain from using
                    aggregators and Camelot V3, as these may cause the
                    transaction being split, resulting in a transaction amount
                    that does not meet the required standard.
                  </p>
                </div>
              </Tabs.Item>
            </Tabs.Group>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aicode;
