import TriviModel from "./model/TriviModel"
import TriviView from "./view/TriviView"


class Trivi{
    model: TriviModel
    view: TriviView
    private _attachment: Element
    private _prefix: string | undefined

    constructor(attachment: Element, options?: any){
    this._attachment = attachment
    this.model = new TriviModel()
    this.view = new TriviView()
    if(options){
        if(options.prefix) this._prefix = options.prefix
    }
    }

    start(){
        this.view.initialize(this._attachment, this._prefix)
       this.render()
        this.view.next?.addEventListener("click", (e)=>{
            e.preventDefault()  
            this.model.next()
            this.render()
        })
    }

    render(){
        this.view.paint(
            this.model.current + 1,
            this.model.questions.length,
            this.model.activeQuestion.prompt, 
            this.model.activeQuestion.answers)
    }

 

}


export default Trivi