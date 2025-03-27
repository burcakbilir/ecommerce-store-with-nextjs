"use client";

import Link from "next/link";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "@/lib/features/cart/cartSlice";

import dynamic from "next/dynamic";

const ToggleButton = dynamic(()=> import("../components/ToggleButton"), {ssr: false})

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch()
  const totalQuantity = useSelector((state)=> state.cart.totalQuantity)
  

  useEffect(()=> {
   dispatch(getCartTotal())
  },[])

  return (
    <header className="bg-white dark:bg-slate-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Ecommerce Store</span>
            <Image
              alt=""
              src="/store-solid.svg"
              className="h-8 w-auto"
              width={10}
              height={10}
            />
            <span className="text-indigo-600 font-semibold">
              Ecommerce Store
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/">
            {" "}
            <span className="text-sm/6 text-gray-900 dark:text-white">Home</span>
          </Link>
          <Link href="/products">
            {" "}
            <span className="text-sm/6 text-gray-900 dark:text-white">Products</span>
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
          <div className="relative cursor-pointer">
            <Link href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="absolute top-[-2px] right-[-2px] bg-indigo-600 size-3 rounded-full text-white text-xs flex items-center justify-center p-2">
                {totalQuantity ? totalQuantity : "0"}
              </span>
            </Link>
          </div>
        <ToggleButton/>
       
          <button
            type="button"
            className="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-sm px-5 py-2.5  cursor-pointer"
          >
            Log in
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                alt=""
                src="/store-solid.svg"
                className="h-8 w-auto"
                width={10}
                height={10}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="/" passHref legacyBehavior>
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-slate-600"
                  >
                    Anasayfa
                  </a>
                </Link>
                <Link href="/products" passHref legacyBehavior>
                  <a
                    href="/products"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-slate-600"
                  >
                    Ürünler
                  </a>
                </Link>
              </div>

              <div className="py-6">
                <div className="flex items-center justify-between">
                <Link href="/cart"
                  
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-slate-600"
                  >
                 Sepetim
                  </Link>
                  <span className="bg-indigo-600 size-3 rounded-full text-white text-xs flex items-center justify-center p-2">
                    {totalQuantity ? totalQuantity : "0"}
                  </span>
                 
                </div>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-slate-600"
                >
                  Giriş Yap
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
