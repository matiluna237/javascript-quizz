import { create } from 'zustand'
import { State } from '../interfaces/interfaces.ts'
import { fetchQuestionsFromJson } from '../services/questions.service.ts'
import { persist } from 'zustand/middleware'

//"()(persist envuelve todo el store "useQuestionStore") {name:'questions'})" middleware para persistir los datos en el localstorage
export const useQuestionsStore = create<State>()(persist((set, get) => {
    return {
        questions: [],
        currentQuestion: 0,

        fetchQuestions: async (limit: number) => {
            const res = await fetchQuestionsFromJson() //res contiene todas las preguntas
            const questionsAlAzar = res.sort(() => Math.random() -0.5).slice(0, limit) //questionsAlAzar solo contiene 10 preguntas (debido al "limit" asignado que en este caso es 10) tomadas al azar
            set({questions: questionsAlAzar}) //seteo el state "questions" con las "questionsAlAzar"
        },
        selectAnswer: (questionId: number, answerIndex: number) => {
            const { questions } = get(); //el metodo get() recupera el toda la info del UseQuestionStore, en este caso solo necesito las "questions"
            const newQuestions = structuredClone(questions) //clono las "questions"
            const questionIndex = newQuestions.findIndex(q => q.id == questionId) //obtengo el indice de la question en cuestion
            const questionInfo = newQuestions[questionIndex] //obtengo la info de la question en cuestion
            const isCorrectUserAnswer = questionInfo.correctAnswer == answerIndex //será true si el usuario seleccionó la respuesta correcta

            //cambiar la informacion de la newQuestion
            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userSelectedAnswer: answerIndex
            }
            //actualizamos el state
            set({questions: newQuestions})
        },
        goNextQuestion: () => {
            const {currentQuestion, questions} = get();
            const nextQuestion = currentQuestion + 1;
            if(nextQuestion < questions.length){
                set({
                    currentQuestion: nextQuestion
                })
            }
        },
        goPreviousQuestion: () => {
            const {currentQuestion} = get();
            const previousQuestion = currentQuestion - 1;
            if(previousQuestion >= 0 ){
                set({
                    currentQuestion: previousQuestion
                })
            }
        },
        resetGame: () => {
            set({
                questions: [],
                currentQuestion: 0
            })
        }
        

    }
},{
    name:'questions' 
}))