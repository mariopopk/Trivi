

class TriviResponse {
    id: number
    text: string
    isCorrect: boolean

    constructor(id:number, text: string, isCorrect: boolean){
        this.id = id
        this.text = text,
        this.isCorrect = isCorrect
    }
}

export default TriviResponse