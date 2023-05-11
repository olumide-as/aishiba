import { React } from "react";
import {
  ascendex,
  bgimage,
  bitkan,
  camelot,
  lbank,
  mexc,
  star,
  tick,
} from "../../Assets";
import { Brandsmall } from "../../Components";
import { Accordion, Timeline, Tabs, Progress } from "flowbite-react";
import Brandbig from "../../Components/Brandbig/Brandbig";

const Home = () => {
  //Perks
  const plans = [
    {
      name: "Ownership",
      desc: "By owning one of our 48000 AiShiba OG Collection, you automatically become an early member of AiShiba army. All NFT holders are eligible for our upcoming airdrop and future events.",
    },
    {
      name: "100% Community-Owned",
      desc: "AiShiba is built different that is why we are allocating 100% of our tokens to the community to decide the value of the project. NOTE: NO TOKEN IS ALLOCATED TO TEAM and it even gets better",
    },
    {
      name: "Locked Liquidity",
      desc: "The hallmark of every great project is transparency and fairness. Inorder to ensure the safety of our investors, we will lock liquidity to boost investors confidence and ensure we continue building long term",
    },
    {
      name: "Earn Rewards for holding $SHIBAI Token",
      desc: "Arb Rewards will be distributed to top 500 holders weekly as a way to earn passive income You can also stake your NFT and SHIBAI to earn ARB token",
    },
  ];

  return (
    <div>
      {/* Landing */}
      <section className="lg:mt-12 lg:mx-24 mt-12 max-w-screen-xl pb-12 px-4 items-center justify-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-6xl xl:text-8xl font-righteous">
            Meet
            <span className="text-orange-500"> Ai</span>Shiba
          </h1>

          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 ">
            The Community-inspired meme coin for arbitrum blockchain
          </p>

          <div className="flex flex-col gap-x-12 items-center lg:items-start">
            <Brandsmall imgUrl={star} brand="Zero FUD" />
            <Brandsmall imgUrl={star} brand="100% Community Owned" />
            <Brandsmall imgUrl={star} brand="Zero FUGAZI" />
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src={bgimage}
            className=" mx-auto sm:w-6/12  lg:w-2/3 md:w-4/12"
            alt="aishiba"
          />
        </div>
      </section>

      {/* Claim */}
      <section className=" m-4 p-4 ">
        <div className="max-w-screen-xl mx-auto text-slate-50 p-4 lg:w-6/12 rounded-2xl border border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
          <Tabs.Group className="text-left font-jost ">
            <Tabs.Item active={true} title="NFT Claim" className='text-slate-50'>
              <h5 className="font-bold text-xl pb-4">
                Claim Airdrop For Your NFT
              </h5>

              <p className="text-orange-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 ">
                Who is eligible?
              </p>

              <Brandsmall
                imgUrl={tick}
                brand="AiShiba OG Collection NFT Holder"
              />

              <div className="mt-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="items-center justify-center sm:flex"
                >
                  <input
                    type="number"
                    placeholder="Your Airdrop Allocation"
                    className="text-gray-500 w-full md:w-6/12 p-3 rounded-md border outline-none focus:border-orange-500"
                  />

                  <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-orange-600 sm:mt-0 sm:ml-3 sm:w-auto">
                    Connect Wallet
                  </button>
                </form>

                <div className="m-4">
                  <Progress
                    progress={0}
                    labelProgress={true}
                    progressLabelPosition="outside"
                    textLabel="210,000,000,000,000,000"
                    labelText={true}
                    textLabelPosition="outside"
                    size="md"
                  />
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title="ARB/OG Claim" className="text-orange-500">
              <h5 className="font-bold text-xl pb-4">Claim Airdrop</h5>

              <p className="text-orange-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 ">
                Who is eligible?
              </p>

              <Brandsmall imgUrl={tick} brand="Early Birds" />

              <Brandsmall imgUrl={tick} brand="Arb Claimooorssss" />

              <p className="text-orange-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 ">
                Choose a side?
              </p>

              <div>
                <ul className="mt-3 space-y-3">
                  {/* Radio */}
                  <li className="flex items-center gap-x-2.5">
                    <input
                      type="radio"
                      name="role"
                      defaultChecked
                      id="admin"
                      className="form-radio border-gray-400 text-orange-600 focus:ring-orange-600 duration-150"
                    />
                    <label
                      htmlFor="admin"
                      className="text-slate-50 font-medium"
                    >
                      Early Birds
                    </label>
                  </li>

                  <li className="flex items-center gap-x-2.5">
                    <input
                      type="radio"
                      name="role"
                      defaultChecked
                      id="admin"
                      className="form-radio border-gray-400 text-orange-600 focus:ring-orange-600 duration-150"
                    />
                    <label
                      htmlFor="admin"
                      className="text-slate-50 font-medium"
                    >
                      Arb Claimooorssss
                    </label>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="items-center justify-center sm:flex"
                >
                  <input
                    type="number"
                    placeholder="Your Airdrop Allocation"
                    className="text-gray-500 w-full md:w-6/12 p-3 rounded-md border outline-none focus:border-orange-500"
                  />

                  <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-orange-600 sm:mt-0 sm:ml-3 sm:w-auto">
                    Connect Wallet
                  </button>
                </form>

                <div className="m-4">
                  <Progress
                    progress={0}
                    labelProgress={true}
                    progressLabelPosition="outside"
                    textLabel="210,000,000,000,000,000"
                    labelText={true}
                    textLabelPosition="outside"
                    size="md"
                  />
                </div>
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </section>

      {/* Perks */}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-righteous">
              Perks
            </h2>
          </div>

          <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4 font-jost">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className="relative flex-1 flex items-stretch flex-col rounded-xl border border-orange-500 sm:mt-0 mt-10 bg-gradient-to-b from-orange-950 to-neutral-950"
              >
                <div className="p-8 space-y-4">
                  <h3 className="text-orange-500 font-righteous text-xl pb-4">
                    {item.name}
                  </h3>

                  <p className="text-slate-50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Tokenomics*/}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-righteous">
              Tokenomics
            </h2>
          </div>

          <div className="font-jost max-w-screen-xl mx-auto text-slate-50 m-12 p-4 lg:w-6/12 rounded-2xl border border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
            <p className="mt-2 text-slate-50">
              SHIBAI is the fundamental token within the AiShiba ecosystem. It
              possesses powerful deflationary attributes and offers users the
              opportunity to generate passive income via staking, thereby
              establishing enduring value for the token.
            </p><br></br>

            <p className="mt-2 font-bold text-xl text-orange-500">
              Total Supply : 210,000,000,000,000,000 tokens<br></br><br></br>
              Token Symbol : $SHIBAI<br></br><br></br>
              Token Allocation :<br></br>
              90% distributed as airdrop to eligible wallets<br></br>
              10% DEX Liquidity and CEX Listing<br></br><br></br>
            </p>

            <p className="mt-2 text-slate-50">
              Our tokenomics and airdrop eligibility criteria is fully explained
              in our
              <a
                href="https://aishiba.gitbook.io/aishiba-1/overview/our-mission"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline dark:text-orange-600"
              >whitepaper</a>
              
            </p>
          </div>
        </div>
      </section>

      {/*Roadmap*/}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4 text-slate-50 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-righteous">
              Roadmap
            </h2>
          </div>

          <Timeline className="m-4 xl:m-12 xl:p-12">
            <Timeline.Item className="text-left">
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time className="text-slate-50 font-jost">
                  .
                </Timeline.Time>
                <Timeline.Title className="text-orange-500 font-righteous font-normal text-2xl xl:text-4xl p-1">
                  Phase 1: Pre-Launch
                </Timeline.Title>
                <Timeline.Body className="text-slate-50 font-jost">
                  <ul className="list-disc">
                    <li>
                      Conduct market research to determine the demand for a new
                      memecoin project.
                    </li>
                    <li>
                      Develop a comprehensive whitepaper that outlines the
                      project’s goals, features, and roadmap.
                    </li>
                    <li>
                      Build a team of developers, marketers, and community
                      managers to help execute the project.
                    </li>
                    <li>
                      Launch website and social media channels to start building
                      a community and generating buzz.
                    </li>
                  </ul>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item className="text-left">
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time className="text-slate-50 font-jost">
                  .
                </Timeline.Time>
                <Timeline.Title className="text-orange-500 font-righteous font-normal text-2xl xl:text-4xl p-1">
                  Phase 2: Token Creation and Distribution
                </Timeline.Title>
                <Timeline.Body className="text-slate-50 font-jost">
                  <ul className="list-disc">
                    <li>Launch the AiShiba OG NFT Collection.</li>
                    <li>
                      Launch the token on a decentralized exchange (DEX)
                      platform, such as Uniswap or Camelot Dex.
                    </li>
                    <li>
                      Set a total supply for the token and decide on an initial
                      distribution strategy for airdrops and work with auditors
                      to ensure the token’s code is secure and free from
                      vulnerabilities.
                    </li>
                  </ul>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item className="text-left">
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time className="text-slate-50 font-jost">
                  .
                </Timeline.Time>
                <Timeline.Title className="text-orange-500 font-righteous font-normal text-2xl xl:text-4xl p-1">
                  Phase 3: Initial Exchange Listing
                </Timeline.Title>
                <Timeline.Body className="text-slate-50 font-jost">
                  <ul className="list-disc">
                    <li>
                      Apply for AiShiba listing on major centralized exchanges
                      (CEX) such as Mexc, Binance, Coinbase, or Kraken.
                    </li>
                    <li>
                      Engage in marketing efforts to increase the token’s
                      visibility and attract investors.
                    </li>
                    <li>Coingecko and CoinMarket listings.</li>
                  </ul>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item className="text-left">
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time className="text-slate-50 font-jost">
                  .
                </Timeline.Time>
                <Timeline.Title className="text-orange-500 font-righteous font-normal text-2xl xl:text-4xl p-1">
                  Phase 4: Community Building and Growth
                </Timeline.Title>
                <Timeline.Body className="text-slate-50 font-jost">
                  <ul className="list-disc">
                    <li>
                      Launch a community forum and engage with Aishiba Arb token
                      holders to gather feedback and improve the project.
                    </li>
                    <li>
                      Host events and promotions to incentivize people to hold
                      and use the token, such as contests or giveaways.
                    </li>
                    <li>
                      Build partnerships with other projects and influencers to
                      expand Aishiba Arb’s reach.
                    </li>
                  </ul>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item className="text-left">
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time className="text-slate-50 font-jost">
                  .
                </Timeline.Time>
                <Timeline.Title className="text-orange-500 font-righteous font-normal text-2xl xl:text-4xl p-1">
                  Phase 5: Project Expansion
                </Timeline.Title>
                <Timeline.Body className="text-slate-50 font-jost">
                  <ul className="list-disc">
                    <li>
                      Launch additional features, such as staking or yield
                      farming, to provide additional benefits to Aishiba Arb
                      token holders.
                    </li>
                    <li>
                      Develop a mobile wallet or other tools to make it easier
                      for people to use and hold the token.
                    </li>
                    <li>
                      Explore opportunities to integrate Aishiba Arb into other
                      blockchain ecosystems, such as DeFi protocols or NFT
                      marketplaces.
                    </li>
                  </ul>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item className="text-left">
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time className="text-slate-50 font-jost">
                  .
                </Timeline.Time>
                <Timeline.Title className="text-orange-500 font-righteous font-normal text-2xl xl:text-4xl p-1">
                  Phase 6: Long-Term Sustainability
                </Timeline.Title>
                <Timeline.Body className="text-slate-50 font-jost">
                  <ul className="list-disc">
                    <li>
                      Continue to build and engage with the Aishiba Arb
                      community to ensure the project’s longevity.
                    </li>
                    <li>
                      Explore options for governance and decentralization to
                      make the project more community-driven and sustainable
                      over the long term.
                    </li>
                    <li>
                      Work with regulators and compliance experts to ensure that
                      Aishiba Arb remains compliant with applicable laws and
                      regulations.
                    </li>
                  </ul>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </section>

      {/*F.A.Qs*/}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-slate-50 text-4xl font-semibold sm:text-6xl font-righteous">
              F.A.Qs
            </h2>
          </div>

          <Accordion className="p-4 xl:p-12 mx-4 my-12 xl:m-12 border-orange-500 bg-gradient-to-b from-orange-950 to-neutral-950">
            <Accordion.Panel>
              <Accordion.Title className="text-slate-50 focus:text-orange-500 hover:text-orange-500 font-jost">
                What is AiShiba?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-slate-50 dark:text-orange-500 font-jost">
                  An AI protocol which is the product of a group of AI
                  algorithms who are passionate about Arbitrum and hope to
                  create a powerful series of products with AI+Web3+DeFi.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-slate-50 focus:text-orange-500 hover:text-orange-500 font-jost">
                How do I claim the $SHIBAI airdrop?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-slate-50 dark:text-orange-500 font-jost">
                  1. Connect your wallet<br></br>
                  2. Check if you are eligible<br></br>
                  3. Claim your free tokens
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-slate-50 focus:text-orange-500 hover:text-orange-500 font-jost">
                What is SHIBAI tokenomics?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-slate-50 dark:text-orange-500 font-jost">
                  Check our
                  <a
                    href="https://aishiba.gitbook.io/aishiba-1/overview/our-mission"
                    className="text-orange-500 hover:underline dark:text-orange-600"
                  >
                    Whitepaper
                  </a>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-slate-50 focus:text-orange-500 hover:text-orange-500 font-jost">
                Will there be more NFTs in the future?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-slate-50 dark:text-orange-500 font-jost">
                  A series of NFTs will be launched in the future for adopters,
                  AI peripheral product development, and more.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-slate-50 focus:text-orange-500 hover:text-orange-500 font-jost">
                Where can I trade $SHIBAI?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-slate-50 dark:text-orange-500 font-jost">
                  SHIBAI already trading on MEXC, LBANK , CAMELOT DEX, BITKAN &
                  ASCENDEX. Stay tuned for more exchange listings.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-slate-50 focus:text-orange-500 hover:text-orange-500 font-jost ">
                What is Flowbite?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-slate-50 dark:text-orange-500 font-jost">
                  If you meet the following criteria and are interested in
                  participating in the development of AI Shiba, please contact
                  us through the partner channel in Discord. We are looking for:
                  <br></br>
                  A. Projects on Arbitrum that are interested in cooperating to
                  bring surprises to their project followers/token holders in
                  the next phase of our preparation.<br></br>
                  B. Content creators, KOLs, YouTubers, or TikTokers of MEME
                  images and NEO story series who are interested in and willing
                  to participate in the AI Shiba project with their skills. We
                  will provide exciting rewards for early partners. Reach out on
                  our the partner channel in Discord
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </section>

      {/*Exchanges*/}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto px-4  md:px-8">
          <div className=" mx-auto text-center">
            <h2 className="text-slate-50 text-4xl sm:text-6xl font-righteous">
              Exchanges
            </h2>
          </div>
          <p className="leading-relaxed mt-2 text-[15px] text-slate-50">
            You can trade you $SHIBAI on these exchanges
          </p>

          <div className="flex flex-wrap gap-x-12 items-center justify-center m-4 ">
            <a
              href="https://app.camelot.exchange/?token2=0xfa296fca3c7dba4a92a42ec0b5e2138da3b29050"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Brandbig imgUrl={camelot} brand="" />
            </a>
            <a
              href="https://m.mexc.com/trade/spot-kline#SHIBAI_USDT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Brandbig imgUrl={mexc} brand="" />
            </a>
            <a
              href="https://www.lbank.info/exchange/shibai/usdt/#alts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Brandbig imgUrl={lbank} brand="" />
            </a>
            <a
              href="https://bitkan.com/trade/SHIBAI-USDT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Brandbig imgUrl={bitkan} brand="" />
            </a>
            <a
              href="https://m.ascendex.com/en/cashtrade-spottrading/usd/shibai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Brandbig imgUrl={ascendex} brand="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
