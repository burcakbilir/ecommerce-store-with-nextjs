"use client"

import { addToCart } from "@/lib/features/cart/cartSlice"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"


export default function ProductDetail(){
  const dispatch = useDispatch()
  const [product, setProduct] = useState()
  const params = useParams()
  const { id } = params


    useEffect(() => {
        const getProduct = async () => {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await res.json();
    
          if (data) {
            setProduct(data);
          }
        };
    
       if(id){
        getProduct();
       }
      }, [id]);
  
    
   
    return(
        <section className="text-gray-700 body-font overflow-hidden bg-white dark:bg-slate-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="ecommerce" src={product?.image}  className="lg:w-1/2 w-full h-[600px] object-contain object-center rounded-md border border-gray-200 p-10 dark:border-gray-600 bg-white"/>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest dark:text-gray-500">Ecommerce Store</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 dark:text-white">{product?.title}</h1>
                <p className="leading-relaxed dark:text-gray-300">{product?.description}</p>
                <div className="flex mt-10">
                  <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">${product?.price.toFixed(2)}</span>
                  <button className="flex ml-auto text-white font-semibold bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded-md" onClick={()=>{
                    dispatch(addToCart(product))
                    toast.success(`${product.title} successfully added to your cart`)}
                    }>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}