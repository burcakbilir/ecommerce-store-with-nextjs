
"use client"
import Link from "next/link";
import { useSelector } from "react-redux";


export default function CheckoutPage() {
  const carts = useSelector((state)=> state.cart.carts)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)

  return (
    <main className="bg-gray-100 h-full dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pt-24 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Siparişinizi Tamamlayın
          </h1>
          <Link href="/" className="text-white bg-indigo-600 flex items-center justify-center rounded-md font-semibold px-6"><span>Ödeme Adımına Geç</span></Link>
        </div>
        <section className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[500px] overflow-y-auto">
          
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">İsim</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="John" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Soyisim</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Doe" required />
        </div>
        
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">İletişim Numarası</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ülke</label>
            <input type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
        <div>
            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">İl</label>
            <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
        <div>
            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">İlçe</label>
            <input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
      
       
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="john.doe@company.com" required />
    </div> 
    <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adres</label>
            <textarea type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
   
    
    
</form>

           </div>
          <div className="bg-white dark:bg-gray-700 rounded-md">
            <div className="p-5 flex flex-col gap-5 h-[500px] overflow-y-auto">
            <h1 className="font-semibold tracking-tight text-lg text-gray-700 dark:text-white">Sipariş Özeti</h1>
           {carts.map((item)=> (
            <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-200 dark:border-gray-600 py-4" key={item.id}>
              <div className="flex items-center justify-center">
              <img src={item.image} className="w-20 h-20 object-contain bg-white rounded-md"/>
              </div>
              <h3 className="text-sm text-gray-700 dark:text-white font-semibold text-center">{item.title.slice(0,30)}...</h3>
              <span className="text-sm text-center text-gray-700 dark:text-white">{item.quantity} Adet</span>
              <span className="text-sm text-center font-semibold text-gray-700 dark:text-white">${item.totalPrice ? item.totalPrice.toFixed(2) : item.price }</span>
            </div>
           ))}
           <span className="text-gray-700 dark:text-white font-semibold">Total : ${totalAmount.toFixed(2)}</span>
            </div>
            
            </div>
        </section>
      </div>
    </main>
  );
}
