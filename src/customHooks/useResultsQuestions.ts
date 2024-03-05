import { useQuestionsStore } from "../store/questions";



export function useResultsQuestions() {
    const questions = useQuestionsStore(state => state.questions);

    let cantCorrects = 0;
    let cantIncorrects = 0;
    let cantUnanswered = 0;
    let porcentajeCorrectas = 0;
    let porcentajeIncorrects = 0;
    
    questions.forEach(q => {
        if(q.userSelectedAnswer == null) cantUnanswered++;
        if(q.userSelectedAnswer == q.correctAnswer) {
            cantCorrects++;
            porcentajeCorrectas = (cantCorrects/questions.length) * 100;
        } 
        if(q.userSelectedAnswer != null && q.userSelectedAnswer != q.correctAnswer) {
            cantIncorrects++;
            porcentajeIncorrects = (cantIncorrects/questions.length) * 100;
        } 
    });

    return{
        cantCorrects,
        cantIncorrects,
        cantUnanswered,
        porcentajeCorrectas,
        porcentajeIncorrects
    }
}