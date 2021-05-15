import TriviResponse from "../model/Response"


class TriviView{

    current: Element | null
    total: Element | null
    prompt: Element | null
    responses: Element | null


    constructor(){
        this.current = null
        this.total  = null
        this.prompt  = null
        this.responses  = null
    }


    initialize( attachment: Element , prefix: string = "trivi"){
        const template = `  
        <div class="card">
           <div class="card-body">
             <p><strong id="${prefix}-current">#CURRENT</strong><span id="${prefix}-total">#TOTAL</span></p>
             <p class="lead" id="${prefix}-current-prompt">#PROMPT</p>
             <div id="${prefix}-current-questions" class="d-grid gap-2 questions">
               #RESPONSES
             </div>
             <button id="${prefix}-next" class="btn btn-primary btn-sm float-end mt-3">Next</button>
           </div>
        </div>
           `
        const skeleton = document.createElement("div")
        skeleton.innerHTML = template
        attachment.appendChild(skeleton)

        this.current = attachment.querySelector(`#${prefix}-current`)
        this.total = attachment.querySelector(`#${prefix}-total`)
        this.prompt = attachment.querySelector(`#${prefix}-current-prompt`)
        this.responses = attachment.querySelector(`#${prefix}-current-questions`)
    }

    paint(current: number){
        this.current!.textContent = current.toString()
    }
  
}

export default TriviView