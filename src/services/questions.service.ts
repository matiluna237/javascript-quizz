
const URL_DATA = "http://javascript-quizz.s3-website-us-east-1.amazonaws.com/data.json"

export async function fetchQuestionsFromJson() {
    const res = await fetch(URL_DATA)
    const json = await res.json()
    return json;
}