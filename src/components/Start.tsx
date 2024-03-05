import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";
import { useNavigate } from "react-router-dom";



const LIMIT_QUESTIONS: number = 10

export function Start() {

    const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)
    
    const navigate = useNavigate();
    const handleStartButton = async() => {
        await fetchQuestions(LIMIT_QUESTIONS)
        navigate('/game')
    }

    return(
        <Button variant="contained" onClick={handleStartButton}>
            Start
        </Button>
    )
}