import {questions} from "../../../data/Questions"

export default function handler(req, res){
    res.status(200).json(questions)
}