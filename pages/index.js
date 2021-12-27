import Coupon from "./coupons";

export default function Home() {
  return (
    <>
      <main className="">
        <img src="/granola.png" className="h-60 w-60" />
        <div>See our Plans</div>
        <div>
          <span>
            Shopping with us for the firt time? Use
            <Coupon />
            To Avail 20% discount on your purchase.
          </span>
        </div>
        <img src="/arrow-pointer.png" className="h-20 w-20" />
        <div>How it Works</div>
        <div>
          <img src="/"/>
          <div>Shop</div>
        </div>
        <div>
          <div>Ship</div>
        </div>
        <div>
          <div>Snack</div>
        </div>
      </main>
    </>
  );
}
