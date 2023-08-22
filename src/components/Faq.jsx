'use client'

import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'

const faqs = [
  {
    question: "Where can I get more information about sBTC?",
    answer: "There are quite a few interesting unlocks with sBTC, but to simplify, sBTC enables a kind of 'write' for Bitcoin. With sBTC you can effectively take your Bitcoin, move it to the L2, and do all kinds of interesting things with it. Critically, smart contracts can interact with sBTC, opening the door for DeFi and really any type of applications you see in other ecosystems, but with the added security benefits of Bitcoin backing it.<br><br>Read more: <a class='font-medium underline' href='https://stacks.org/sbtc-use-cases'>Blog post: 10 ways sBTC Unlocks the Power of Bitcoin</a>"
  },
  {
    question: "How does sBTC work?",
    answer: "Note: Some aspects of sBTC are still being designed and subject to change. This page will be updated as various elements become finalized.<br><br>sBTC operates by utilizing a synthetic asset model on the Stacks blockchain. To acquire sBTC, users swap their Bitcoin for sBTC through a smart contract. The value of sBTC is pegged to the value of Bitcoin, allowing users to represent their Bitcoin holdings in the form of sBTC on the Stacks blockchain. This synthetic representation enables users to engage in various DeFi applications, such as lending, borrowing, or trading, while still retaining the benefits and ownership of their underlying Bitcoin. The Stacks blockchain ensures the security and integrity of the sBTC ecosystem, while the value of sBTC remains tied to the value of Bitcoin."
  }
]


export function Faq() {
  return (
    <section>
      <div className="mt-16">
        <h2 className="text-4xl font-bold">Frequently asked questions</h2>

        <dl className="pt-0 border-[0.5px] bg-white rounded-lg border-gray-400/70 mt-8 divide-y divide-gray-400/50">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="p-8">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-white">
                      <span className="flex items-center gap-x-4">
                        <span className="block shrink-0 w-4 h-4 bg-primary-02 rounded-full"></span>
                        <span className="text-2xl font-medium text-gray-900">{faq.question}</span>
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={clsx(open ? 'rotate-45' : 'rotate-0', 'h-6 w-6 transform transition ease-in-out duration-300')}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path d="M1 12H23" stroke="#17161C" strokeLinecap="square"/>
                          <path d="M12 1V23" stroke="#17161C" strokeLinecap="square"/>
                        </svg>
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-3 pr-12 max-w-[75%]">
                    <p className="ml-8 font-extralight text-gray-700" dangerouslySetInnerHTML={{__html: faq.answer}} />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  )
}
