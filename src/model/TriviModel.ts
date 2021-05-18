import Question from "./Question"


class TriviModel{
    private _questions: Question[] 
    private _current: number;
    private _score: number

    constructor(){
        this._questions = []
        this._current = 0
        this._score = 0
      
    }

    public get current(){
        return this._current
    }

    public get activeQuestion(){
        return this._questions[this._current]
    }

    public set questions(questions: Question[]){
        if(questions.length <= 0) return
        this._questions = questions
    }

    public get questions(){
        return this._questions
    }


    // selectAnswer(id:number){
    //     const {answers: responses} = (this.activeQuestion)

    //     for(let i =0; i < responses.length; i ++){
    //         console.log(responses[i])      
    //     }
    // }


    next(){
        if(this._current < this._questions.length - 1)   this._current++
       
        
    }

    back(){
        if(this._current > 0) this._current--

      
    }

    initialize(){
        this._current = 0;
    }
    
 

}

export default TriviModel