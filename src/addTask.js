

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
