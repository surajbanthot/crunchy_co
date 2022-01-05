import Coupon from "./coupons";
import Link from "next/link";
import Image from "next/image"
export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center text-center">
        <div className="pt-20 pb-10">
          <Image  src="/granola.png"  className="w-40 h-40" alt="granola home page image" width='160' height='160'/>
        </div>
        <Link href="/plans" passHref>
          <a className="p-16">
            <span className="bg-green-300 p-5 rounded-lg font-semibold shadow-lg">
              SEE OUR PLANS
            </span>
          </a>
        </Link>

        <span className="font-medium p-20 mb-2">
          Shopping with us for the firt time? Use&nbsp;
          <span className="font-bold">
            <Coupon />
          </span>
          &nbsp;to Avail 20% discount on your purchase.
        </span>
        <a href="#Working" className="scroll-smooth">
          <Image alt="arrow pointer" src="/arrow-pointer.png" className="h-20 w-20 mb-28" width='80' height='80'/>
        </a>
        <div id="Working">
          <div className="font-bold text-3xl text-slate-600 pb-12">
            How it Works
          </div>
        </div>
        <div className="flex justify-between">
          <div className="m-10">
            <Image alt="shop image" src="/shop.png" className="h-32 w-32" width='128' height='128' />
            <div>Shop</div>
          </div>
          <div className="m-10 px-16">
            <Image alt="afdf" src="/shipped.png" className="h-32 w-32" width='128' height='128'/>
            <div>Ship</div>
          </div>
          <div className="m-10">
            <Image alt="afdf" src="/snack.png" className="h-32 w-32" width='128' height='128'/>
            <div>Snack</div>
          </div>
        </div>
      </main>
    </>
  );
}
