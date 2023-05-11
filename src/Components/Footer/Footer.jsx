import React from 'react'
import { Logo, cmc, coingecko, dextools } from '../../Assets'
import Brandbig from '../Brandbig/Brandbig';

const current = new Date();
const date = current.getFullYear();

const footerNavs = [
  {
      href: 'https://aishiba.gitbook.io/aishiba-1/overview/our-mission',
      name: 'Whitepaper  '
  },
  {
      href: '../earn',
      name: 'Earn '
  },
  {
      href: '../aicode',
      name: 'AiCode'
  },
  {
    href: 'https://aishiba.gitbook.io/aishiba-1/others/disclosures',
    name: 'Terms and Conditons'
},
]

const Footer = () => {
  return (
    <div>
      <footer className="text-slate-50 bg-opacity-0 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src={Logo} alt='aiShiba' className="w-48 mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px] text-slate-50">
                The Community-inspired meme coin for arbitrum blockchain
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li className="text-orange-500 hover:text-orange-600">
                            <a key={idx} href={item.href}>
                                { item.name }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex flex flex-col">

            <div className="flex flex-wrap gap-x-12 items-center justify-center m-4 ">
            <a href="https://www.coingecko.com/en/coins/aishiba" target="_blank" rel="noopener noreferrer"><Brandbig imgUrl={coingecko} brand="" /></a>
            <a href="https://coinmarketcap.com/currencies/aishiba/" target="_blank" rel="noopener noreferrer"><Brandbig imgUrl={cmc} brand="" /></a>
            <a href="https://dexscreener.com/arbitrum/0xbb1554b79d49327f6f000fb8057a972bfee4afca" target="_blank" rel="noopener noreferrer"><Brandbig imgUrl={dextools} brand="" /></a>
          </div>

            <div className="m-4 ">
                    <ul className="flex items-center space-x-4 ">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://twitter.com/AiShiba_Arb">
                                <svg class="svg-icon w-6 h-6 text-blue-400" viewBox="0 0 20 20">
                                    <path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                                </svg>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://discord.com/invite/W4nfd7Wkp3">
                                <svg class="svg-icon w-6 h-6 text-indigo-700" viewBox="0 0 20 20">
                                    <path fill="none" d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                                </svg>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="mt-4 sm:mt-0">
                    &copy; {date} AiShiba All rights reserved.
                </div>

            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>

    </div>
  )
}

export default Footer