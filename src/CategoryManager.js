

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

