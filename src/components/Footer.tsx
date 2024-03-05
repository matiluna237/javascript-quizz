import { Alert, Card, Stack } from "@mui/material";
import { useResultsQuestions } from "../customHooks/useResultsQuestions";


export function Footer() {
    
    const {cantCorrects, cantIncorrects, cantUnanswered, porcentajeCorrectas, porcentajeIncorrects} = useResultsQuestions();

    return(
        <footer>
            <Card variant="outlined" style={{padding:5}}>
                <Stack direction='column' gap={2} alignItems='left' justifyContent='left'>
                    <Alert severity="success" style={{padding:0}}>
                        <strong style={{color:'green'}}>{`Corrects: ${cantCorrects} (${porcentajeCorrectas}%)` }</strong>
                    </Alert>
                    <Alert severity="error" style={{padding:0}}>
                        <strong style={{color:'red'}}>{`Incorrects: ${cantIncorrects} (${porcentajeIncorrects}%)`}</strong>
                    </Alert>
                    <Alert severity="info" style={{padding:0}}>
                        <strong>{`Unanswered: ${cantUnanswered}`}</strong>
                    </Alert>
                </Stack>
            </Card>
        </footer>
    )
}