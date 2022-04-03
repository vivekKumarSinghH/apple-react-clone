import React, { useState } from 'react'

function Footer() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  return (
    <div className="  bg-[rgb(245,245,247)]">
      <div className="  text-[#6E6E73] m-auto w-[90%] p-2 md:w-[70%]">
        <p className="text-[12px] font-semibold">
          ‡No Cost EMI available for purchases made using qualifying credit
          cards on 3, 6 or 12 month tenures only. Offer available on qualifying
          purchases made after 1:30 PM IST on January 20, 2022 and before 11:59
          PM IST on April 28, 2022. Minimum order spend applies as per your
          credit card’s issuing bank threshold. Offer cannot be combined with
          Apple Store for Education or Corporate Employee Purchase Plan pricing.
          Credit card eligibility is subject to terms and conditions between you
          and your credit card issuing bank. Offer may be revised or withdrawn
          at any time without any prior notice. Offer valid for limited period.
          Terms & conditions apply.
          <br /> <br /> Representative example: Based off a 12 month tenure.
          ₹69900 total cost includes 15% p.a. and No Cost EMI savings of ₹5363,
          paid over 12 months as 12 monthly payments of ₹5825.
          <br /> <br />
          Apple TV+ is ₹99/month after free trial. One subscription per Family
          Sharing group. Offer is valid for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply.
        </p>
        <hr />
      </div>

      <div className="px-10 md:hidden text-[#6E6E73] flex flex-col gap-2 ">
        <div>
          <div
            className="font-semibold"
            onClick={() => {
              setShow(!show)
            }}
          >
            Shop and Learn
          </div>

          {show ? (
            <div>
              <div className="hover:underline duration-200 py-1">Store</div>
              <div className="hover:underline duration-200 py-1">Mac</div>
              <div className="hover:underline duration-200 py-1">iPad</div>
              <div className="hover:underline duration-200 py-1">iPhone</div>
              <div className="hover:underline duration-200 py-1">Watch</div>
              <div className="hover:underline duration-200 py-1">TV & Home</div>
              <div className="hover:underline duration-200 py-1">
                iPod touch
              </div>
              <div className="hover:underline duration-200 py-1"> AirTag</div>
              <div className="hover:underline duration-200 py-1">
                Accessories
              </div>
            </div>
          ) : null}
        </div>

        <div>
<div className="font-semibold" onClick={() => {
  setShow2(!show2)
}}>Services</div>

{show2?
<div>
<div className="hover:underline duration-200 py-1">Apple Music</div>
<div className="hover:underline duration-200 py-1">Apple TV+</div>
<div className="hover:underline duration-200 py-1">Apple Arcade</div>
<div className="hover:underline duration-200 py-1">iCloud</div>
<div className="hover:underline duration-200 py-1">Apple One</div>
<div className="hover:underline duration-200 py-1">Apple Books</div>
<div className="hover:underline duration-200 py-1">
  Apple Podcasts
</div>
<div className="hover:underline duration-200 py-1">App Store</div>
</div>

:null}
</div>

<div className="font-semibold ">Account</div>

<div className="font-semibold">Apple Store</div>

<div className="font-semibold">For Business</div>

<div className="font-semibold ">For Education</div>

<div className="font-semibold ">For Healthcare</div>

<div className="font-semibold">Apple Values</div>

<div className="font-semibold ">About Apple</div>
</div>

      <div className=" text-[#6E6E73]  w-[70%] m-auto mt-10 p-2 hidden md:grid md:grid-cols-5">
        <div>
          <div className="font-semibold">Shop and Learn</div>
          <div className="hover:underline duration-200 py-1">Store</div>
          <div className="hover:underline duration-200 py-1">Mac</div>
          <div className="hover:underline duration-200 py-1">iPad</div>
          <div className="hover:underline duration-200 py-1">iPhone</div>
          <div className="hover:underline duration-200 py-1">Watch</div>
          <div className="hover:underline duration-200 py-1">TV & Home</div>
          <div className="hover:underline duration-200 py-1">iPod touch</div>
          <div className="hover:underline duration-200 py-1"> AirTag</div>
          <div className="hover:underline duration-200 py-1">Accessories</div>
        </div>

        <div>
          <div className="font-semibold">Services</div>
          <div className="hover:underline duration-200 py-1">Apple Music</div>
          <div className="hover:underline duration-200 py-1">Apple TV+</div>
          <div className="hover:underline duration-200 py-1">Apple Arcade</div>
          <div className="hover:underline duration-200 py-1">iCloud</div>
          <div className="hover:underline duration-200 py-1">Apple One</div>
          <div className="hover:underline duration-200 py-1">Apple Books</div>
          <div className="hover:underline duration-200 py-1">
            Apple Podcasts
          </div>
          <div className="hover:underline duration-200 py-1">App Store</div>

          <div className="font-semibold mt-6">Account</div>
          <div className="hover:underline duration-200 py-1">
            Manage Your Apple ID
          </div>
          <div className="hover:underline duration-200 py-1">
            Apple Store Account
          </div>
          <div className="hover:underline duration-200 py-1">iCloud.com</div>
        </div>

        <div>
          <div className="font-semibold">Apple Store</div>
          <div className="hover:underline duration-200 py-1">Ways to Buy</div>
          <div className="hover:underline duration-200 py-1">
            Apple Trade In
          </div>
          <div className="hover:underline duration-200 py-1">
            Recycling Programme
          </div>
          <div className="hover:underline duration-200 py-1">Order Status</div>
          <div className="hover:underline duration-200 py-1">Shopping Help</div>
        </div>

        <div>
          <div className="font-semibold">For Business</div>
          <div className="hover:underline duration-200 py-1">
            Apple and business
          </div>

          <div className="font-semibold mt-6">For Education</div>
          <div className="hover:underline duration-200 py-1">
            Apple and Education
          </div>
          <div className="hover:underline duration-200 py-1">
            Shop for Education
          </div>
          <div className="hover:underline duration-200 py-1">
            Shop for University
          </div>

          <div className="font-semibold mt-6">For Healthcare</div>
          <div className="hover:underline duration-200 py-1">
            Apple in Healthcare
          </div>
          <div className="hover:underline duration-200 py-1">
            Health on Apple watch
          </div>
        </div>

        <div>
          <div className="font-semibold">Apple Values</div>
          <div className="hover:underline duration-200 py-1">Accessibility</div>
          <div className="hover:underline duration-200 py-1">Environment</div>
          <div className="hover:underline duration-200 py-1">Privacy</div>
          <div className="hover:underline duration-200 py-1">
            Supplier Responsibility
          </div>

          <div className="font-semibold mt-6">About Apple</div>
          <div className="hover:underline duration-200 py-1">Newsroom</div>
          <div className="hover:underline duration-200 py-1">
            Apple Leadership
          </div>
          <div className="hover:underline duration-200 py-1">
            Career Opportunities
          </div>
          <div className="hover:underline duration-200 py-1">Investors</div>
          <div className="hover:underline duration-200 py-1">
            Ethics & Compliance
          </div>
          <div className="hover:underline duration-200 py-1">Events</div>
          <div className="hover:underline duration-200 py-1">Contact Apple</div>
        </div>
      </div>

      <div className=" w-[90%] md:w-[70%] m-auto p-2 mt-6">
        More ways to shop:{' '}
        <span className="text-blue-700">Find a retailer </span> near you. or
        call 000800 0401966.
        <hr className="mt-2" />
      </div>
      <div className="w-[90%] md:w-[70%] m-auto p-2 py-4">
        Copyright 2022 Apple Inc. All rights reserved.
        <span className="ml-5 border-l-2 px-2 border-grey-600">
          Privacy Policy
        </span>
        <span className="ml-5 border-l-2 px-2 border-grey-600">
          Terms of Use
        </span>
        <span className="ml-5 border-l-2 px-2 border-grey-600">
          {' '}
          Sales Policy
        </span>
        <span className="ml-5 border-l-2 px-2 border-grey-600"> Legal</span>
        <span className="ml-5 border-l-2 px-2 border-grey-600"> Site Map</span>
        <span className="ml-5 border-l-2 px-2 border-grey-600"> India</span>
      </div>
    </div>
  )
}

export default Footer
