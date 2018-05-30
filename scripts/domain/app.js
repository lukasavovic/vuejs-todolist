var app = new Vue({
    el:"#app",
    data: {
        todoList: [
            {task: "Learn Vue js", finished: false},
            {task: "Wash the dishes", finished: false }
        ],
        newTask: '',
    },
    computed:{
        finishedTask: function(){
          
        }
    },
    methods:{
        addTask: ()=>{
            if(app.newTask !== ""){
                app.todoList.push({task: app.newTask, finished: false});
            }else {
                alert('type something first')
            }
            app.newTask = '';
        },
        removeTask: (index)=>{
            app.todoList.splice(index,1);
        },
        clearList: ()=> {
            app.todoList = [];
        },
        finishTask: (index)=> {
            if(app.todoList[index].finished == false) {
                app.todoList[index].finished = true;
            } else {
                app.todoList[index].finished = false;
            } 
        }
    }
});