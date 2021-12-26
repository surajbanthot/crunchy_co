import {coupon} from "../../../data/coupon"

export default function handler(req, res){
    res.status(200).json(coupon);
}