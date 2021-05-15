import Answer from "./Response"

 class Question{
     id: number
    prompt: string
    answers: Answer[]

   constructor(id: number, prompt: string, answers: Answer[]){
       this.id = id
       this.prompt = prompt
       this.answers = answers
   } 
}

export default Question;