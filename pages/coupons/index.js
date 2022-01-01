import React, { useState, useEffect } from "react";

const Coupon = () => {
  const [coupon, setcoupon] = useState("");
  useEffect(async () => {
    const response = await fetch("/api/coupon");
    const data = await response.json();
    setcoupon(data);
  }, []);
  return <>{coupon}</>;
};

export default Coupon;