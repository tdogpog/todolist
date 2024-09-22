// class for displaying/clicking add task and showing form

//class for processing the inputs

//class for displaying tasks and handling storage

export class addDisplay{

    //take in all elements necessary for the display state
    constructor(formElement, formContainer,taskAdder,darkenElement){
        this.formElement=formElement;
        this.formContainer=formContainer;
        this.taskAdder=taskAdder;
        this.darkenElement=darkenElement;
        this.setupEventListeners();
    }

    showForm(){
        this.formElement.style.display='block';
        this.darkenElement.style.display='block';
        this.formContainer.style.display='block';
    }

    hideForm(){
        this.formElement.style.display='none';
        this.darkenElement.style.display='none';
        this.formContainer.style.display='none';
    }

    //initialize the event listeners with the functions we created
    setupEventListeners(){
        this.taskAdder.addEventListener('click',()=>{
            this.showForm();
        });

        this.darkenElement.addEventListener('click',()=>{
            this.hideForm();
        });
    }


}

export class processInputs{

    constructor(taskInput,descriptionInput,dateInput,dropdownInput){
        this.taskInput=taskInput;
        this.descriptionInput=descriptionInput;
        this.dateInput=dateInput;
        this.dropdownInput=dropdownInput;
    }

    getInputData(){
        const task=this.taskInput.value.trim();
        const description=this.descriptionInput.value.trim();
        const dateVal=this.dateInput.value;
        const dropdownVal=this.dropdownInput.value;

        if(!task){
            alert('Please name the task');
            return null;
        }

        this.resetInputs()

        return{task,description,dateVal,dropdownVal}
    }

    resetInputs(){
        this.taskInput.value='';
        this.descriptionInput.value='';
        this.dateInput.value='';
        this.dropdownInput.value='';
    }
}


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


export class CategoryManager {
    constructor(darkenElement, addCategoryButton, categoryPopup, newCategoryInput, submitCategoryButton, projectDropdown, taskDisplay) {
        this.darkenElement = darkenElement;
        this.addCategoryButton = addCategoryButton;
        this.categoryPopup = categoryPopup;
        this.newCategoryInput = newCategoryInput;
        this.submitCategoryButton = submitCategoryButton;
        this.projectDropdown = projectDropdown;
        //object will need access to refreshing the display
        this.taskDisplay = taskDisplay;
        this.setupEventListeners();
        //init default cases i inserted when page loads
        //since obj is instatiated as page loads6
        this.initializeDefaultCategories(); 
    }

    setupEventListeners() {
        this.addCategoryButton.addEventListener('click', () => {
            this.showPopup();
        });

        this.darkenElement.addEventListener('click', () => {
            this.hidePopup();
        });

        this.submitCategoryButton.addEventListener('click', () => {
            this.addCategory();
        });
    }

    initializeDefaultCategories() {
        const defaultCategories = document.querySelectorAll('.myProjects .categoryItem');
        
        defaultCategories.forEach(categoryItem => {
            const categoryName = categoryItem.querySelector('span').textContent.trim();
    
            categoryItem.addEventListener('click', (e) => {
                if (!e.target.classList.contains('deleteCategory')) {
                    this.filterTasksByCategory(categoryName);
                    this.taskDisplay.updateTaskContainerHeader(categoryName); // Call on taskDisplay
                }
            });
            
    
            // Delete event listener on the delete button
            categoryItem.querySelector('.deleteCategory').addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteCategory(categoryName, categoryItem);
            });
        });
    }

    
    showPopup() {
        this.darkenElement.style.display = 'block';
        this.categoryPopup.style.display = 'block';
    }

    hidePopup() {
        this.darkenElement.style.display = 'none';
        this.categoryPopup.style.display = 'none';
        this.newCategoryInput.value = '';
    }

    addCategory() {
        const categoryName = this.newCategoryInput.value.trim();
        if (categoryName) {
            this.addCategoryToDropdown(categoryName);
            this.addCategoryToProjects(categoryName);
            this.hidePopup(); 
        } else {
            alert('Please enter a category name.');
        }
    }

    deleteCategory(categoryName, categoryItem) {
        // Remove category from the sidebar
        categoryItem.remove();

        // Remove category from the dropdown
        const dropdownOption = Array.from(this.projectDropdown.options).find(option => option.value === categoryName);
        if (dropdownOption) {
            dropdownOption.remove();
        }

        // Remove all tasks with the deleted category
        const remainingTasks = this.taskDisplay.taskArray.filter(task => task.dropdownVal !== categoryName);
        this.taskDisplay.taskArray = remainingTasks;

        // Re-render the task list without the deleted category's tasks
        this.taskDisplay.renderFilteredTasks(remainingTasks);

        // Update task container header to "Tasks" after deletion
        const taskContainerHeader = document.querySelector('.taskContainerHeader span');
        taskContainerHeader.textContent = "Tasks";
    }

    addCategoryToDropdown(categoryName) {
        const option = document.createElement('option');
        option.value = categoryName;
        option.textContent = categoryName;
        this.projectDropdown.appendChild(option);
    }

    addCategoryToProjects(categoryName) {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('categoryItem');
    
        // Create the span for the category name
        const categoryText = document.createElement('span');
        categoryText.textContent = categoryName;
    
        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteCategory');
        deleteButton.textContent = 'X';
    
        // Append the span and button to the categoryItem
        categoryItem.appendChild(categoryText);
        categoryItem.appendChild(deleteButton);
    
        // Event listener for filtering tasks by category
        categoryItem.addEventListener('click', (e) => {
            //this is for delete button listener
            //if event object didnt contain the deleteCategory,
            //we weren't clicking the delete button
            //if it did, we clicked the delete button
            //consequences of having two elemetns in same div
            if (!e.target.classList.contains('deleteCategory')) {
                this.filterTasksByCategory(categoryName);
                this.taskDisplay.updateTaskContainerHeader(categoryName); 
            }
        });
    
        // Event listener for deleting category
        deleteButton.addEventListener('click', (e) => {
            // prevent triggering the category click event when deleting
            e.stopPropagation();
            this.deleteCategory(categoryName, categoryItem);
        });
    
        // Append the categoryItem to the sidebar
        document.querySelector('.myProjects').appendChild(categoryItem);
        
        // Update the header after adding the category
        this.taskDisplay.updateTaskContainerHeader(categoryName);
    }
    
    
    filterTasksByCategory(category) {
        this.taskDisplay.filterTasksByCategory(category, category); 
    }
    
}

