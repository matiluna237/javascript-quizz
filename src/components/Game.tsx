import { useQuestionsStore } from "../store/questions";
import SyntaxHighligther from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Card, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import { Question } from "../interfaces/interfaces";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Footer } from "./Footer";
import { useResultsQuestions } from "../customHooks/useResultsQuestions";



const Question = ({info}:{info:Question}) => {

    const selectAnswer = useQuestionsStore(state => state.selectAnswer)


    //function para colorear cada fila de las respuestas
    const getBackgroundColor = (info:Question, index: number) => {
    const {userSelectedAnswer, correctAnswer} = info;

    //si el usuario no ha seleccionado nada todavia
    if(userSelectedAnswer == null) return 'transparent';
    //si ya seleccionó pero la respuesta es incorrecta
    if(index != correctAnswer && index != userSelectedAnswer) return 'transparent';
    //si ya seleccionó y es la solucion correcta
    if(index == correctAnswer) return 'green';
    //si ya seleccionó y la solucion no es la correcta
    if(index == userSelectedAnswer) return 'red';
    //si no es ninguna de las anteriores
    return 'transparent';
    }

    return(
        <> 
        <Card variant="outlined" sx={{bgcolor: '#222', padding: 1, textAlign:'left'}}>

            <h4 style={{textAlign:'center'}}>{info.question}</h4>

            <SyntaxHighligther language="javascript" style={gradientDark}>
                {info.code}
            </SyntaxHighligther>

            <List sx={{textAling:'center', bgcolor: '#333'}} disablePadding>
                {info.answers.map((answer,index) => (
                <ListItem key={index} disablePadding divider>
                    <ListItemButton onClick={() => selectAnswer(info.id, index)}
                                    onTouchStart={() => selectAnswer(info.id, index)}
                                    sx={{backgroundColor: getBackgroundColor(info, index)}}
                                    disabled={info.userSelectedAnswer != null}>
                        <ListItemText primary={answer}></ListItemText>
                    </ListItemButton>
                </ListItem>
                ))}
            </List>

        </Card>
        </>
    )
}




export function Game() {
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const goNextQuestion  = useQuestionsStore(state => state.goNextQuestion)
    const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)

    const questionInfo = questions[currentQuestion]

    console.log(questions)

    const { cantUnanswered } = useResultsQuestions()

    return (
        <>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
                <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
                    <IconButton onClick={goPreviousQuestion} disabled={currentQuestion == 0}>
                        <ArrowBackIosNew></ArrowBackIosNew>
                    </IconButton>

                    {currentQuestion + 1} / {questions.length}

                    <IconButton onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}>
                        <ArrowForwardIos></ArrowForwardIos>
                    </IconButton>
                </Stack>

                <Stack direction='column' gap={2}>
                    <Question info={questionInfo}></Question>
                    {cantUnanswered > 0 && <Footer></Footer>}
                </Stack>

            </Grid>
        </Grid>
        </>
    )
}