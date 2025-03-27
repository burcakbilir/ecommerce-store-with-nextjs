import Link from "next/link";

export default function Hero() {
  return (
    <div className="dark:bg-slate-900">
      <div className="text-center py-10 sm:py-20 md:py-28 lg:py-32 mx-auto max-w-2xl">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
        %50&apos;ye Varan İndirimlerle Alışveriş Keyfini Yaşayın!
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Fırsatlar sizi bekliyor! Popüler ürünlerde %50&apos;ye varan indirimler ile
          şimdi alışveriş yapın ve cebinizi koruyun. Sınırlı süreli
          kampanyalarla ihtiyacınız olan her şeyi en uygun fiyatlarla bulun!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/products"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Keşfet
          </Link>
        </div>
      </div>
    </div>
  );
}
