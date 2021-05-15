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
        this.view.paint(this.model.current + 1)
    }

}


export default Trivi