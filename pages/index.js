import Coupon from "./coupons";

export default function Home() {
  return (
    <>
      <main className="">
        <img src="/granola.png" className="h-60 w-60" />
        <div>See our Plans</div>
        <div>
          <span>Shopping with us for the firt time? Use<Coupon />To Avail 20% discount on your purchase.</span>
        </div>
      </main>
    </>
  );
}
