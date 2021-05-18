import Trivi from "./Trivi";


const container = document.querySelector("#questions")!

const trivi = new Trivi(container);

trivi.model.questions = [
    {
        id: 1,
        prompt: "The first person convicted of speeding in history was going at what speed?",
        answers: [
            {text: "18 mph", isCorrect: false, id:1},
            {text: "30 mph", isCorrect: false, id:2},
            {text: "8 mph", isCorrect: true, id:3},
            {text: "20 mph", isCorrect: false, id:4}
        ]
    },
    {
       id: 2,
        prompt: "'New car smell' consists of how many different chemicals?",
        answers: [
            {text: "Over 300 chemicals", isCorrect: false, id:5},
            {text: "Around 100-200 chemicals", isCorrect: false, id:6},
            {text: "Around 50-100 chemicals", isCorrect: true, id:7},
            {text: "Less than 49 chemicals", isCorrect: false, id:8} 
        ]
    },
    {
        id: 3,
         prompt: "Where has the hottest temperature been recorded?",
         answers: [
             {text: "El Azizia, Libya", isCorrect: false, id:9},
             {text: "Death Valley, United States", isCorrect: true, id:10},
             {text: "Timbuktu, Mali", isCorrect: false, id:11},
             {text: "Bangkok, Thailand", isCorrect: false, id:12} 
         ]
     }
]


trivi.start()

console.log(trivi)


