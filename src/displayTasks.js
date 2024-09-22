export class displayTasks{
    constructor(taskArray){
        this.taskArray=taskArray
        this.currentFilter = 'all';
    }

    setFilter(filterType) {
        this.currentFilter = filterType;
        this.filterTasksByDate(this.currentFilter);
    }

    addTask(task){
        this.taskArray.push(task);
        this.filterTasksByDate(this.currentFilter);
    }

    removeTask(index){
        this.taskArray.splice(index,1);
        this.filterTasksByDate(this.currentFilter);    
    }

    createTaskItem(task, index) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('taskItem');
    
        taskItem.innerHTML = `
            <div class="taskCheckmark">
                <input type="checkbox">
            </div>
            <div class="taskBody">
                <div class="taskHeader"><span>${task.task}</span></div>
                <div class="taskDescription"><span>${task.description}</span></div>
                <div class="priority"><span>${task.dropdownVal}</span></div>
                <div class="date"><span>${task.dateVal}</span></div>
            </div>
            <div class="taskDelete">
                <button data-index="${index}">delete</button>
            </div>
        `;
    
        return taskItem;
    }

    filterTasksByCategory(category, categoryName) {
        const filteredTasks = this.taskArray.filter(task => task.dropdownVal === category);
        this.renderFilteredTasks(filteredTasks);
        // call the method to update the header
        this.updateTaskContainerHeader(categoryName); 
    }

    updateTaskContainerHeader(categoryName) {
        const taskContainerHeader = document.querySelector('.taskContainerHeader span');
        // set to category name or default to 'Tasks'
        taskContainerHeader.textContent = categoryName ? categoryName : 'Tasks'; 
    }

    filterTasksByDate(filterType) {
        const today = new Date();
        let filteredTasks = [];
    
        if (filterType === 'today') {
            filteredTasks = this.taskArray.filter(task => {
                const taskDate = new Date(task.dateVal);
    
                // Ensure both dates are compared in 'YYYY-MM-DD' format
                const taskDateString = taskDate.toISOString().split('T')[0];
                const todayString = today.toISOString().split('T')[0];
    
                return taskDateString === todayString;  
            });
        } else if (filterType === 'week') {
            const startOfWeek = new Date(today);
            startOfWeek.setDate(today.getDate() - today.getDay()); 
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
    
            filteredTasks = this.taskArray.filter(task => {
                const taskDate = new Date(task.dateVal);
                return taskDate >= startOfWeek && taskDate <= endOfWeek;
            });
        } else {
            filteredTasks = this.taskArray; 
        }
    
        this.renderFilteredTasks(filteredTasks);
    }
    

    renderFilteredTasks(filteredTasks) {
        const taskContainer = document.querySelector('.taskContainer');
        const taskList = taskContainer.querySelectorAll('.taskItem'); 
        const taskCounter = taskContainer.querySelector('.taskCounter span'); 

        taskList.forEach(task => task.remove());
        
        filteredTasks.forEach((task, index) => {
            const taskItem = this.createTaskItem(task, index);
            taskContainer.appendChild(taskItem);
        });

        taskCounter.textContent = `Tasks: ${filteredTasks.length}`;
        
        // Re-attach delete listeners
        document.querySelectorAll('.taskDelete button').forEach(button => {
            button.addEventListener('click', (e) => {
                const taskIndex = e.target.getAttribute('data-index');
                this.removeTask(taskIndex);
            });
        });
    }

}
