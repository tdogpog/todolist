import './styles.css';

import {headerUpdate} from './headerUpdater.js'

import {addDisplay,processInputs,displayTasks,CategoryManager} from './addTask.js'


headerUpdate();

//init task item array
let taskArray=[];

// select all elements needed for input into classes

//addDisplayClass
const formElement = document.querySelector('#form');
const formContainer = document.querySelector('#newEntry');
const taskAdder = document.querySelector('#taskAdder');
const darkenElement = document.querySelector('#darken');

//processInputs Class
const taskInput = document.querySelector('#task');
const descriptionInput = document.querySelector('#description');
const dateInput = document.querySelector('input[type="date"]');
const dropdownInput = document.querySelector('#projectDropdown');

//category class
const addCategoryButton = document.getElementById('addCategoryButton');
const categoryPopup = document.getElementById('categoryPopup');
const newCategoryInput = document.getElementById('newCategoryInput');
const submitCategoryButton = document.getElementById('submitCategoryButton');
const projectDropdown = document.getElementById('projectDropdown');

// set up objects from our class
const display = new addDisplay(formElement, formContainer,taskAdder, darkenElement);
const inputProcessor = new processInputs(taskInput, descriptionInput, dateInput, dropdownInput);
const taskDisplay = new displayTasks(taskArray);
const categoryManager = new CategoryManager(darkenElement, addCategoryButton, categoryPopup, newCategoryInput, submitCategoryButton, projectDropdown, taskDisplay); 
// event listener for form submit
formElement.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing page

    // Get the task data from the input processor
    const taskData = inputProcessor.getInputData();
    
    // If valid task data, add it to the task display
    if (taskData) {
        taskDisplay.addTask(taskData);
    }
});

document.getElementById('filterToday').addEventListener('click', () => {
    taskDisplay.setFilter('today');
});

document.getElementById('filterWeek').addEventListener('click', () => {
    taskDisplay.setFilter('week');
});

document.getElementById('filterAll').addEventListener('click', () => {
    taskDisplay.setFilter('all');
});


const defaultCategories = document.querySelectorAll('.categoryItem');
defaultCategories.forEach(categoryItem => {
    categoryItem.addEventListener('click', () => {
        const categoryName = categoryItem.querySelector('span').textContent.trim(); 
        categoryManager.filterTasksByCategory(categoryName);
    });
});
