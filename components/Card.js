"use client";

import { addToCart, decrementQuantity, getCartTotal, incrementQuantity } from "@/lib/features/cart/cartSlice";
import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Card({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const carts = useSelector((state)=> state.cart.carts)

  const handleAddCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} successfully added to your cart`);
  };

  const handleIncrementItem = (product) => {
    dispatch(incrementQuantity(product));
    dispatch(getCartTotal());
  };

  const handleDecrementItem = (product) => {
    dispatch(decrementQuantity(product));
    dispatch(getCartTotal());
  };

  const getTargetQuantity = (productId) => {
    const targetProduct = carts.find((item)=> item.id === productId)
    const targetQuantity = targetProduct.quantity

    return targetQuantity
  }
  

  return (
    <div className="flex flex-col justify-between group relative border border-gray-300 dark:border-slate-800 shadow-md rounded-md p-4 cursor-pointer">
      <div onClick={() => router.push(`/product/${product.id}`)}>
        <Image
          alt={`${product?.image} + ${product.id}`}
          src={product.image}
          className="aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 dark:bg-white"
          width={600}
          height={600}
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <h3 className="text-sm text-gray-700 font-semibold dark:text-gray-500">{product.title}</h3>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </p>
         {
          carts.find((item)=> item.id === product.id) ? (
            <div className="flex items-center">
                        <button
                          className="h-5 w-5 flex items-center justify-center rounded-md border border-indigo-300 bg-indigo-500 hover:bg-indigo-400 focus:outline-none text-white"
                          onClick={() => handleDecrementItem(product)}
                        >
                          -
                        </button>
                      <span className="px-4 text-gray-700 dark:text-white">{getTargetQuantity(product.id)}</span>
                        <button
                          className="h-5 w-5 flex items-center justify-center rounded-md border border-indigo-300 bg-indigo-500 hover:bg-indigo-400 focus:outline-none text-white"
                          onClick={() => handleIncrementItem(product)}
                        >
                          +
                        </button>
                      </div>
          ): (
            <Button
            type="button"
            className="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-500  font-bold rounded-lg text-sm px-5 py-2.5  cursor-pointer"
            onClick={handleAddCart}
          >
           Sepete Ekle
          </Button>
          )
         }
        </div>
      </div>
    </div>
  );
}
