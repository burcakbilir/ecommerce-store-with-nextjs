"use client";

import {
  clearCart,
  decrementQuantity,
  getCartTotal,
  incrementQuantity,
  removeFromCart,
} from "@/lib/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter()
  const carts = useSelector((state) => state.cart.carts);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    dispatch(getCartTotal());
    toast.success(`${product.title} removed from cart.`);
  };

  const handleIncrementItem = (product) => {
    dispatch(incrementQuantity(product));
    dispatch(getCartTotal());
  };

  const handleDecrementItem = (product) => {
    dispatch(decrementQuantity(product));
    dispatch(getCartTotal());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="dark:bg-slate-900">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-baseline justify-between border-b border-gray-200 dark:border-b-gray-600 pt-24 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sepetiniz
        </h1>
        <span className="text-gray-600 dark:text-gray-400">{totalQuantity !== 0 && `Sepetinizde ${totalQuantity} adet ürün bulunmaktadır.`}</span>
      </div>
      <section aria-labelledby="products-heading" className="pt-6 pb-24">
      {carts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-5 h-[500px] overflow-y-auto">
              {carts &&  
                carts.map((product, idx) => (
                  <div
                    className="grid grid-cols-1 sm:grid-cols-7 gap-5 border-b border-gray-200 dark:border-b-gray-600 py-8"
                    key={idx}
                  >
                    <div className="sm:col-span-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                       
                        <div className="bg-white dark:bg-white w-full h-[150px] rounded-md p-2 flex items-center justify-center ">
                        <Image
                          src={product.image}
                          width={100}
                          height={100}
                          alt={`${product.image} + ${product.id}`}
                          className="rounded-md object-contain w-full h-full "
                        />
                        </div>
                        <div className="col-span-2">
                        <div className="flex flex-col gap-2 items-center sm:items-start">
                        <Link href={`/product/${product.id}`}><span className="font-semibold dark:text-white">{product.title}</span></Link>
                          <span className="text-gray-600 text-sm dark:text-gray-300">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                  
                        </div>
                      </div>{" "}
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="flex">
                        <button
                          className="h-5 w-5 flex items-center justify-center rounded-md border border-indigo-300 bg-indigo-500 hover:bg-indigo-400 focus:outline-none text-white"
                          onClick={() => handleDecrementItem(product)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={product.quantity}
                          className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                          readOnly
                        />
                        <button
                          className="h-5 w-5 flex items-center justify-center rounded-md border border-indigo-300 bg-indigo-500 hover:bg-indigo-400 focus:outline-none text-white"
                          onClick={() => handleIncrementItem(product)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-semibold text-gray-700 dark:text-white">
                        $
                        {product.totalPrice
                          ? product.totalPrice.toFixed(2)
                          : product.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-center items-center">
                      {" "}
                      <button
                        className="bg-rose-500 p-2 rounded-md cursor-pointer"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
               }
            </div>
          </div>
         {carts.length > 0 && (
           <div className="bg-[#f3f3f3] dark:bg-gray-600 p-6 rounded-md flex flex-col gap-6">
           <h3 className="text-lg text-gray-700 font-semibold dark:text-white">
             Sipariş Özeti
           </h3>
           <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-500 py-4">
             <span className="text-gray-500 text-sm dark:text-gray-400">Ara Toplam</span>
             <span className="text-gray-700 font-semibold dark:text-white">
               ${totalAmount.toFixed(2)}
             </span>
           </div>
           <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-500 pb-4">
             <span className="text-gray-500 text-sm dark:text-gray-400">Kargo Ücreti</span>
             <span className="text-gray-700 font-semibold dark:text-white">$0.00</span>
           </div>
           <div className="flex items-center justify-between">
             <span className="text-gray-700 font-semibold dark:text-gray-400">
               Sipariş Toplamı
             </span>
             <span className="text-gray-700 font-semibold dark:text-white">
               ${totalAmount.toFixed(2)}
             </span>
           </div>
           <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=> router.push("/checkout")}>
             Ödeme Adımına Geç
           </button>
           <button
             className="rounded-md bg-rose-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-rose-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
             onClick={() => handleClearCart()}
           >
             Sepeti Temizle
           </button>
         </div>
         )}
        </div>
      ) : (<div className="flex flex-col items-center justify-center text-gray-700 mt-10 gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span className="dark:text-white">Sepetinizde ürün bulunmamaktadır.</span>
      </div>)}
      </section>
    </main>
    </div>
  );
}
