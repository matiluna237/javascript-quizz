import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";
import { useNavigate } from "react-router-dom";




export function ButtonResetGame(){

    const resetGame = useQuestionsStore(state => state.resetGame);

    
    const navigate = useNavigate();
    const handleResetButton = () => {
        resetGame()
        navigate('/')
        window.location.reload();
    }


    return(  
        <Button onClick={handleResetButton}>Reset game</Button>
    )
}