document.querySelector('.inputForm').addEventListener('submit', addTaskList)

var tasklist = document.querySelector('.list')
var Container = document.querySelector('.container')
var Button=false

var clearButton

function addTaskList(e) {
    var task = document.querySelector('.task')


    if (task.value === '') {
        alert("Add a task")
        //console.log(e.target.parentElement.parentElement.childNodes[5].className)
    } else {
       if(Button==false){
        clearButton = document.createElement('button')
        clearButton.className = 'clearbutton'
        clearButton.appendChild(document.createTextNode('Clear All'))
        Container.appendChild(clearButton)
        Button=true
        clearButton= document.querySelector('.clearbutton')
       }
        

        const li = document.createElement('li')
        li.className = 'task-item'
        li.appendChild(document.createTextNode(task.value))


        const iconArea = document.createElement('div')
        iconArea.className = 'iconarea'

        const deleteButton = document.createElement('a')
        deleteButton.className = 'deletebutton'
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
        iconArea.appendChild(deleteButton)

        const tickButton = document.createElement('a')
        tickButton.className = 'tickbutton'
        tickButton.innerHTML = '<i class="fas fa-check-circle"></i>'
        iconArea.appendChild(tickButton)

        li.appendChild(iconArea)

        

        tasklist.appendChild(li)
        task.value = ''
    }
    e.preventDefault();
}
tasklist.addEventListener('click', deleteParent)

function deleteParent(e) {

    if (e.target.parentElement.classList.contains('deletebutton')) {
        e.target.parentElement.parentElement.parentElement.remove()
    } else if (e.target.parentElement.classList.contains('tickbutton')) {
        e.target.parentElement.parentElement.parentElement.style.color = 'green'
        e.target.parentElement.parentElement.parentElement.style.textTransform = 'uppercase'
        e.target.parentElement.parentElement.childNodes[0].style.display = 'none'
    }

    e.preventDefault()
}

clearButton.addEventListener('click',clearAllTask)
function clearAllTask(e){

    console.log(e.target.parentElement)

    e.preventDefault()
}