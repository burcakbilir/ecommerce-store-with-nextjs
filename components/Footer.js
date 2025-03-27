import { Button, Input } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const footerMenuItems = [
  {
    title: "Information",
    subTitle: [
      "About Us",
      "Privacy Policy",
      "Returns Policy",
      "Shipping Policy",
    ],
  },
  {
    title: "Account",
    subTitle: ["Login", "Sign Up", "My Orders", "Wishlist"],
  },
  {
    title: "Categories",
    subTitle: ["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"],
  },
];

export default function Footer() {
  return (
    <div className="dark:bg-slate-900">
    <div className="max-w-7xl mx-auto py-8 p-6">
      <div className="flex flex-col gap-10 md:flex-row md:gap-4 justify-between h-[100%] border-b border-gray-200 py-8 dark:border-gray-600">
        <div className="">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {footerMenuItems.map((menuItem, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-700">{menuItem.title}</h3>
              {menuItem.subTitle.map((subMenu, idx) => (
                <span key={idx} className="text-gray-500 text-sm">
                  {subMenu}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-gray-700">Bültenimize abone olun</p>
          <span className="text-sm text-gray-500">
            İndirimlerden ve daha fazla fırsattan yararlanmak için abone olun
          </span>
          <div className="flex items-center gap-4">
            <Input
              type="text"
              className="border border-gray-200 rounded-md p-2 dark:border-gray-600"
            />
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Abone Ol
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center pt-6"><span className="text-gray-500 text-sm">© 2025. All rights reserved.</span></div>
    </div>
    </div>
  );
}
