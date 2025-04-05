const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskInputValue = taskInput.ariaValueMax.trim();

    if(taskInputValue !== ""){
        const taskListUl = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = '<input type="checkbox">' + taskInputValue + '<button> delete </button>'
    }
    else{
        alert("Please Add a Task")
    }
}