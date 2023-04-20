import { answers } from './answers';
import { options } from './options';
import { questions } from './questions';

export function getQuestions() {
    const questionIds = [];
    let randInt;
    while (questionIds.length < 10) {
        randInt = parseInt(Math.random() * questions.length) + 1;
        if (!questionIds.includes(randInt))
            questionIds.push(randInt)
    }
    return questionIds.map(qid => ({
        options: shuffle(getOption(qid)),
        ...questions.find(q => q.id === qid)
    }))
}

export function scoreTest(questions) {
    let correctScore = 0;
    questions.forEach(question => {
        const { qid, choice } = question;
        if (getAnswer(qid) === choice) ++correctScore;
    });
    return correctScore;
}

export function getAnswer(questionId) {
    return answers[questionId - 1];
}

function getOption(questionId) {
    return options[questionId - 1];
}

function shuffle(obj) {
    let arry = Object.entries(obj);
    for (let x = 0, y = 0; x < arry.length; x++) {
        y = parseInt(Math.random() * arry.length);
        [arry[x], arry[y]] = [arry[y], arry[x]];
    }
    return Object.fromEntries(arry);
}
