import { Button, Grid, Stack } from "@mui/material";
import { Footer } from "./Footer";
import { Game } from "./Game";
import { useState } from "react";
import { ButtonResetGame } from "./ButtonResetGame";



export function EndScreen() {

    const [showQA, setShowQA] = useState(false);

    const handleClickShowQA = () => {
        setShowQA(!showQA)
    }

    return(
        <>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12}>
                <Stack direction='column' alignItems='center' justifyContent='center'>
                    <h1>Results</h1>
                    <Footer></Footer>
                </Stack>

                <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
                    
                </Stack>
                
                <Stack direction='row' gap={2} alignItems='center' justifyContent='center' style={{marginTop:20}}>
                    <Button onClick={handleClickShowQA}>Show Questions And Answers</Button>
                    <ButtonResetGame></ButtonResetGame> 
                </Stack>

                

                

                {showQA && <Game></Game>}
            </Grid>
        </Grid>
        </>
    )
    
}