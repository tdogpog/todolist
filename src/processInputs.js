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