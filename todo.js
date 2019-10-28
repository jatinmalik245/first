let add=document.getElementById("add")
add.addEventListener("click",addTask)
let Tasks=[];

function addTask(){
    const input=document.getElementById("task")
    if(input.value.length>2)
        Tasks.push(input.value)
    input.value=""
    // console.log(Tasks)
    input.focus();
    // let task=prompt("enter the task")
    // Tasks.push(task)
    display()

}

function display(){
    const table=document.querySelector("table")
    table.innerHTML=""
    for(let i=0;i<Tasks.length;i++){
        if(Tasks[i].length>2)
        {
            let tr=document.createElement("tr")
            let td=document.createElement("td")
            let tdbtn=document.createElement("td")
            td.textContent=Tasks[i]
            td.className="first"
            tr.appendChild(td);
            let btn=document.createElement("button")
            btn.textContent="delete"
            btn.onclick = function (){
                deleteTask(i);
            }
            tdbtn.appendChild(btn)
            tr.appendChild(tdbtn)
            table.appendChild(tr)
         
        }
        
    }
    if(Tasks.length===0){
        let td = document.createElement("td")
        td.textContent="please enter a task";
        let table =document.querySelector("table")
        table.appendChild(td);
    }
}

function deleteTask(index){
    let newTasks=Tasks.filter((val,i)=>{
        if(i===index){
            return false;
        }
        else
        return true 
    })
    Tasks=newTasks
    display()
}

