import {Questionnaire} from "../../../data/Questionnaire"

export default function handler(req, res){
    res.status(200).json(Questionnaire)
}