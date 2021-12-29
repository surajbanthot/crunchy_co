import Coupon from "./coupons";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center pt-20 pb-10">
          <img src="/granola.png" className="w-40 h-40" />
        </div>
        <Link href="/plans">
          <a className="p-16">
            <span className="bg-green-300 p-5 rounded-lg font-semibold shadow-lg">
              SEE OUR PLANS
            </span>
          </a>
        </Link>

        <span className="font-medium p-20">
          Shopping with us for the firt time? Use&nbsp;
          <span className="font-bold">
            <Coupon />
          </span>
          &nbsp;to Avail 20% discount on your purchase.
        </span>
        <a href="#Working" className="scroll-smooth">
          <img src="/arrow-pointer.png" className="h-20 w-20 mb-24" />
        </a>

        <div id="Working">
          <div className="font-bold text-3xl text-slate-600 pb-12">
            How it Works
          </div>
        </div>
        <div className="flex justify-between">
          <div className="m-10">
            <img src="/shop.png" className="h-32 w-32" />
            <div>Shop</div>
          </div>
          <div className="m-10 px-16">
            <img src="/shipped.png" className="h-32 w-32" />
            <div>Ship</div>
          </div>
          <div className="m-10">
            <img src="/snack.png" className="h-32 w-32" />
            <div>Snack</div>
          </div>
        </div>
      </main>
    </>
  );
}
