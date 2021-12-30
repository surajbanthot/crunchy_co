import React, {
    useState,
    useEffect
} from 'react'

const Coupon = () => {
    const [coupon, setcoupon] = useState('');
    useEffect(async () => {
            const response = await fetch('/api/coupon');
            const data = await response.json();
            console.log(data);
            setcoupon(data);
        },[])
    return ( <>
            {coupon} 
            </>
);

    }

export default Coupon

/*
 "The budget allocated for snacks": [

    ],
    "3": "Ferquency of pruchase",
    "4": "Age Group of the employees",
    "5": "If we need to know about any health concerns",
    "6": "If they are already purchasing snacks elsewhere",
    "7": "Where did they hear about us",
    "8": "How soon do they want to get started"
*/