import React, {useState} from 'react'

const Coupon = () => {
    const [coupon, setcoupon] = useState('');

    const fetchCoupon = async () =>{
        const response = await fetch('/api/coupon');
        const data = await response.json();
        console.log(data);
        setcoupon(data);
    }
    return (
        <div>
            <button onClick={fetchCoupon}>Coupon Code</button>
            {coupon}
        </div>
    )
}

export default Coupon
