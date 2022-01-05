import React, { useState, useEffect } from "react";

const Coupon = ({coupon_code}) => {
  return <>{coupon_code}</>;
};

export default Coupon;

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/coupon");
  const data = await response.json();
  return {
    props: {
      coupon_code: data,
    },
  };
}
