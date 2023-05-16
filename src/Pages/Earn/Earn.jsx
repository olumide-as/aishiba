import React, { useState } from "react";
import { Tabs } from "flowbite-react";

const Earn = () => {
  const [showStakeToken, setShowStakeToken] = useState(false);
  const [showUnstakeToken, setShowUnstakeToken] = useState(false);
  const [showStakeTokenLP, setShowStakeTokenLP] = useState(false);
  const [showUnstakeTokenLP, setShowUnstakeTokenLP] = useState(false);

  const modalStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <div>
      {/*Earn*/}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-righteous">
              Stake to Earn
            </h2>
          </div>

          <Tabs.Group
            aria-label="Full width tabs"
            style="default"
            className="font-jost py-8 "
          >
            <Tabs.Item title="NFT Staking">
              <div className="p-8 text-slate-50 text-left max-w-screen-xl mx-auto font-jost m-24 lg:w-11/12 rounded-2xl border border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
                <div className="py-8 border-b border-orange-500 text-slate-50 text-3xl">
                  <p>$SHIBAI NFT Stake</p>
                </div>

                <div className="p-8 border-b border-orange-500 text-center">
                  <p className="py-4 ">Nothing to deposit here</p>
                  <a
                    href="#0"
                    className=" py-3 px-8 font-medium text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                  >
                    Approve
                  </a>
                </div>

                <div className="p-8 flex flex-col md:flex-row flex-wrap justify-around border-y border-orange-500">
                  <div className="py-4 basis-1/3">
                    <p className="text-slate-50"> Connect your wallet first</p>
                    <p className="text-orange-500 font-bold text-lg">
                      {" "}
                      Balance NFT{" "}
                    </p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">Connect your wallet first</p>
                    <p className="text-orange-500 font-bold text-lg">
                      Count NFT in staking
                    </p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">Connect your wallet first</p>
                    <p className="text-orange-500 font-bold text-lg">Rewards</p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">0 %</p>
                    <p className="text-orange-500 font-bold text-lg">APY</p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">0</p>
                    <p className="text-orange-500 font-bold text-lg">
                      Total Users NFT staked
                    </p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">Not setted</p>
                    <p className="text-orange-500 font-bold text-lg">
                      Lock time
                    </p>
                  </div>
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title="Tokens Staking" className="text-orange-500">
              <div className="p-8 text-slate-50 text-left max-w-screen-xl mx-auto font-jost m-24 lg:w-11/12 rounded-2xl border border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
                <div className="py-8 border-b border-orange-500 text-slate-50 text-3xl">
                  <p>$SHIBAI Stake</p>
                </div>

                <div className="p-2 border-b border-orange-500 text-center">
                  <p className="py-4 ">Connect your wallet first</p>

                  <div className="flex flex-col md:flex-row justify-center">
                    <div className="p-1">
                      <button
                        onClick={() => setShowStakeToken(!showStakeToken)}
                        className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                      >
                        Stake SHIBAI
                      </button>
                      {showStakeToken && (
                        <div
                          className="fixed inset-0 flex items-center justify-center z-1000 "
                          style={modalStyle}
                        >
                          <div className="bg-white rounded-lg p-6 md:w-4/12">
                            <p className="text-orange-500 font-bold text-lg">
                              {" "}
                              Stake Your SHIBAI
                            </p>
                            <p className="text-gray-700 py-8">
                              Balance: 0 $SHIBAI
                            </p>

                            <div className="flex justify-center">
                              <div className="p-1">
                                <button
                                  onClick={null}
                                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                >
                                  Approve
                                </button>
                              </div>
                              <div className="p-1">
                                <button
                                  className="py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                  onClick={() =>
                                    setShowStakeToken(!showStakeToken)
                                  }
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-1">
                      <button
                        onClick={() => setShowUnstakeToken(!showUnstakeToken)}
                        className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                      >
                        Unstake SHIBAI
                      </button>
                      {showUnstakeToken && (
                        <div
                          className="fixed inset-0 flex items-center justify-center z-1000 "
                          style={modalStyle}
                        >
                          <div className="bg-white rounded-lg p-6 md:w-6/12">
                            <p className="text-orange-500 font-bold text-lg">
                              {" "}
                              Unstake Your SHIBAI
                            </p>
                            <p className="text-gray-700 py-8">
                              Balance: 0 $SHIBAI
                            </p>
                            <form
                              onSubmit={(e) => e.preventDefault()}
                              className="max-w-md py-4 mx-auto"
                            >
                              <div className="relative">
                                <input
                                  type="number"
                                  placeholder="Amount"
                                  className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-orange-600"
                                />
                              </div>
                            </form>

                            <div className="flex flex-col md:flex-row justify-center">
                              <div className="p-1">
                                <button
                                  onClick={null}
                                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                >
                                  Unstake SHIBAI
                                </button>
                              </div>
                              <div className="p-1">
                                <button
                                  onClick={null}
                                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                >
                                  Emergency Withdraw
                                </button>
                              </div>
                              <div className="p-1">
                                <button
                                  className="py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                  onClick={() =>
                                    setShowUnstakeToken(!showUnstakeToken)
                                  }
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-1">
                      <button
                        onClick={null}
                        className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                      >
                        Compound SHIBAI
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col md:flex-row flex-wrap  justify-around border-b border-orange-500">
                  <div className="py-4 basis-1/3">
                    <p className="text-slate-50"> Connect your wallet first</p>
                    <p className="text-orange-500 font-bold text-lg">
                      Staked SHIBAI
                    </p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">Connect your wallet first</p>
                    <p className="text-orange-500 font-bold text-lg">
                      Reward SHIBAI
                    </p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">Connect your wallet first</p>
                    <p className="text-orange-500 font-bold text-lg">
                      Balance SHIBAI
                    </p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">0 %</p>
                    <p className="text-orange-500 font-bold text-lg">APY</p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">0$</p>
                    <p className="text-orange-500 font-bold text-lg">Price</p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">0 $SHIBAI</p>
                    <p className="text-orange-500 font-bold text-lg">Tvl</p>
                  </div>
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title="LP Staking" className="text-orange-500">
              <div className="p-8 text-slate-50 text-left max-w-screen-xl mx-auto font-jost m-24 lg:w-11/12 rounded-2xl border border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
                <div className="py-8 border-b border-orange-500 text-slate-50 text-3xl">
                  <p>$SHIBAI LP Stake</p>
                </div>

                <div className="p-2 border-b border-orange-500 text-center">
                  <p className="py-4 ">Connect your wallet first</p>
                  <div className="flex flex-col md:flex-row justify-center">
                    <div className="p-1">
                      <button
                        onClick={() => setShowStakeTokenLP(!showStakeTokenLP)}
                        className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                      >
                        Stake SHIBAI LP
                      </button>
                      {showStakeTokenLP && (
                        <div
                          className="fixed inset-0 flex items-center justify-center z-1000 "
                          style={modalStyle}
                        >
                          <div className="bg-white rounded-lg p-6 md:w-4/12">
                            <p className="text-orange-500 font-bold text-lg">
                              {" "}
                              Stake Your SHIBAI
                            </p>
                            <p className="text-gray-700 py-8">
                              Balance: 0 $SHIBAI
                            </p>

                            <div className="flex justify-center">
                              <div className="p-1">
                                <button
                                  onClick={null}
                                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                >
                                  Approve
                                </button>
                              </div>
                              <div className="p-1">
                                <button
                                  className="py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                  onClick={() =>
                                    setShowStakeTokenLP(!showStakeTokenLP)
                                  }
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-1">
                      <button
                        onClick={() =>
                          setShowUnstakeTokenLP(!showUnstakeTokenLP)
                        }
                        className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                      >
                        Unstake SHIBAI LP
                      </button>
                      {showUnstakeTokenLP && (
                        <div
                          className="fixed inset-0 flex items-center justify-center z-1000 "
                          style={modalStyle}
                        >
                          <div className="bg-white rounded-lg p-6 md:w-6/12">
                            <p className="text-orange-500 font-bold text-lg">
                              {" "}
                              Unstake Your SHIBAI
                            </p>
                            <p className="text-gray-700 py-8">
                              Balance: 0 $SHIBAI
                            </p>
                            <form
                              onSubmit={(e) => e.preventDefault()}
                              className="max-w-md py-4 mx-auto"
                            >
                              <div className="relative">
                                <input
                                  type="number"
                                  placeholder="Amount"
                                  className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-orange-600"
                                />
                              </div>
                            </form>

                            <div className="flex flex-col md:flex-row justify-center">
                              <div className="p-1">
                                <button
                                  onClick={null}
                                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                >
                                  Unstake SHIBAI
                                </button>
                              </div>
                              <div className="p-1">
                                <button
                                  onClick={null}
                                  className=" py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                >
                                  Emergency Withdraw
                                </button>
                              </div>
                              <div className="p-1">
                                <button
                                  className="py-3 px-8 font-medium text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-full shadow md:inline"
                                  onClick={() =>
                                    setShowUnstakeTokenLP(!showUnstakeTokenLP)
                                  }
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center p-6">
                  <p className="text-slate-50"> Not Locked</p>
                  <p className="text-orange-500 font-bold text-lg">Lock Time</p>
                </div>

                <div className="p-8 flex flex-col md:flex-row flex-wrap  justify-around border-b border-orange-500">
                  <div className="py-4 basis-1/3">
                    <p className="text-slate-50"> Connect your wallet first</p>
                    <p className="text-orange-500 font-bold text-lg">
                      Staked SHIBAI LP
                    </p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">Connect your wallet first</p>
                    <p className="text-orange-500 font-bold text-lg">
                      Reward SHIBAI
                    </p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">Connect your wallet first</p>
                    <p className="text-orange-500 font-bold text-lg">
                      Balance SHIBAI LP
                    </p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">0 %</p>
                    <p className="text-orange-500 font-bold text-lg">APY</p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">0$</p>
                    <p className="text-orange-500 font-bold text-lg">Price</p>
                  </div>
                  <div className=" py-4 md:basis-1/3">
                    <p className="text-slate-50">0 $SHIBAI</p>
                    <p className="text-orange-500 font-bold text-lg">Tvl</p>
                  </div>
                </div>
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </section>
    </div>
  );
};

export default Earn;
