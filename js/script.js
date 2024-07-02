const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
            apiURL: './api/get_all_list.php',
            newTaskName: '',
            newTaskDescription: ''
        }
    },
    methods: {
        getToDoList(){
            axios.get(this.apiURL)
            .then((response) => {
                console.log(response);
                this.toDoList = response.data.tasks;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  
        },
        addTask(taskNameToAdd, taskDescriptionToAdd){
            newToDo = {
                name: taskNameToAdd,
                description: taskDescriptionToAdd,
                completed: false
            };

            this.toDoList.push(newToDo);

            this.newTaskName = '';
            this.newTaskDescription = '';

        }
    },
    
    created(){
        this.getToDoList();
    }

}).mount('#app')