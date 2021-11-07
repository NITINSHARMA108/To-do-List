const { v4: uuidv4 } = require('uuid');

/*
if(JSON.parse(localStorage.getItem('Todos'))==null || JSON.parse(localStorage.getItem('Todos'))==undefined)
{
    Todos=[];
}
else{
    Todos=JSON.parse(localStorage.getItem('Todos'));
}*/
export default class Todo{
    constructor(title,description,dueDate,priority,category,pid=null){
        this.id=uuidv4();
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        //this.project=project;
        this.category=category;
        if(pid==null)
        {
            this.addTodo();
        }
        else{
            this.addtoproject(pid);
        }
    }

    addTodo(){
        let Todos=[];
        if(JSON.parse(localStorage.getItem('Todos'))==null || JSON.parse(localStorage.getItem('Todos'))==undefined)
        {
            Todos=[];
        }
        else{
            Todos=JSON.parse(localStorage.getItem('Todos'));
        }
        Todos=[...Todos,this];

    }

    addtoproject(pid){
        let projects=[];
        if(JSON.parse(localStorage.getItem('projects'))==null || JSON.parse(localStorage.getItem('projects'))==undefined)
        {
            
            projects=[];
        }
        else{
            projects=JSON.parse(localStorage.getItem('projects'));
        }
        projects.map((p)=>{
            if(p.id===pid){
                p.todo=[...p.todo,this];
            }
        })
        console.log(projects);
        localStorage.removeItem('projects');
        localStorage.setItem('projects',JSON.stringify(projects));

    }
};