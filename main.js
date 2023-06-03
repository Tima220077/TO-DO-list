const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
let list = []
const deleteLi = document.getElementsByClassName("deleteLi")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("list") )


if (leadsFromLocalStorage) {
    list = leadsFromLocalStorage
    render()
}


saveBtn.addEventListener("click", function(){
    list.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("list", JSON.stringify(list) )
    render()
})


function render(){
    let tlist = ""
    for(let i = 0; i < list.length; i++){
        tlist += `<li class="list-el">
            ${list[i]}
            <button class="deleteLi">
            CL
            </button>
            </li>` 
    }
    ulEl.innerHTML = tlist
    for(let i = 0; i < deleteLi.length; i++){
        deleteLi[i].onclick = function() {
            let listEl = document.getElementsByClassName("list-el")
            this.parentNode.remove()
            // localStorage.removeItem('list')
            delete list[i]
            list = []
            localStorage.clear()
        }
    }
}


