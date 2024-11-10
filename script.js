


let task=[];

const addTask=()=>{
    const inputList = document.getElementById("inputItem")
    if(inputList.value){
        task.push(inputList.value)
        inputList.value=""

        displayTask()
    }
}



const  removeLastTask = ()=>{
    
    task.pop();
    displayTask();
}


const displayTask = ()=>{
    const taskList  = document.getElementById('task_list')

    taskList.innerHTML = task.map((item)=>`<li>${item}</li>`).join('')
}




