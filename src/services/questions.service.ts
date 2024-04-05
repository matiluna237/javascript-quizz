
const URL_DATA = "https://javascript-quizz.pages.dev/data.json"

export async function fetchQuestionsFromJson() {
    const res = await fetch(URL_DATA)
    const json = await res.json()
    return json;
}