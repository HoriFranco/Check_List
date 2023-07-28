let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let input = document.querySelector("input");
    let task = input.value;

    if (task.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = task;
        
        li.appendChild(addDeletBtn())
        ul.appendChild(li);
        // input.value = "";

    }
})


function addDeletBtn(params){
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click",(e)=>{
        let item = e.target.parentElement;
        ul.removeChild(item)
    })

    return deleteBtn;
     
}