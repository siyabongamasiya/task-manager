let process = require("process")
let nextId = 1
let tasks = []

function createTask(id,taskName){
    if(taskName !== ""){
        newTask = {
            id : nextId,
            taskname : taskName
        }

        tasks.push(newTask)
    }else{
        console.log("No task name provided!!")
    }
    nextId++
}

function readTasks(){
    return tasks
}

// createTask(nextId,"do homework")
// createTask(nextId,"wash car!!")
// console.log(readTasks())

console.log(process.argv[4])

// createTask("")