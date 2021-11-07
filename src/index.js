const { v4: uuidv4 } = require('uuid');
import displayProjects from './displayProjects.js';
import Note from './Note.js';
import displayNotes from './Notes.js';
import getDate from './getDate.js';

let Todos=[];

if(JSON.parse(localStorage.getItem('Todos'))==null || JSON.parse(localStorage.getItem('Todos'))==undefined)
{
    Todos=[];
}
else
{
    Todos=JSON.parse(localStorage.getItem('Todos'));
}


let projects=[];
    if(JSON.parse(localStorage.getItem('projects'))==null || JSON.parse(localStorage.getItem('projects'))==undefined)
    {
        
        projects=[];
    }
    else{
        projects=JSON.parse(localStorage.getItem('projects'));
    }

displayProjects(projects);


class Project{
    
    constructor(name){
        this.id=uuidv4();
        this.name=name;
        this.todo=[];
        projects.push(this);
    }
    
    addTodo(ob){
        this.todo.push(ob);
    }
    deleteTodo(ob){
        this.todo.filter((todo)=>todo.id!=ob.id);
    }
}

//Todo class
 class Todo{
    constructor(title,description,dueDate,priority,category,pid){
        this.id=uuidv4();
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        //this.project=project;
        this.category=category;
        if(pid==='none')
        {
            console.log(pid);
            this.addTodo();
        }
        else{
            this.addtoproject(pid);
        }
    }

    addTodo(){
        let Todos=[];
        console.log('in addtodo');
        if(JSON.parse(localStorage.getItem('Todos'))==null || JSON.parse(localStorage.getItem('Todos'))==undefined)
        {
            Todos=[];
        }
        else{
            Todos=JSON.parse(localStorage.getItem('Todos'));
        }
        Todos=[...Todos,this];
        localStorage.setItem('Todos',JSON.stringify(Todos));

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
//console.log(Todos);

//creating new Project



// creating Todo
document.getElementById('createTodo').addEventListener('click',function(){
    console.log(document.getElementById('title').value);
    console.log(document.getElementById('desc').value);
    console.log(document.getElementById('select-project').value);
    const obj1=new Todo(document.getElementById('title').value,document.getElementById('desc').value,document.getElementById('dueDate').value,document.getElementById('priority').value,document.getElementById('category').value,document.getElementById('select-project').value);
    document.querySelector('.to-do-card').style.display='none';
});
//cancel project
document.getElementById('cancel-project').addEventListener('click',function(){
    document.getElementById('project-form').style.display='none';
})

//add project
document.getElementById('add-project-form').addEventListener('click',function(){
    document.getElementById('project-form').style.display='flex';

})
//creating a new Project
document.getElementById('add-project').addEventListener('click',function(){
    const obj_project=new Project(document.getElementById('project-name').value);
    localStorage.setItem('projects',JSON.stringify(projects));
})

// closing todo card
document.getElementById('closeDisplay').addEventListener('click',function(){
    document.querySelector('.to-do-card').style.display='none';
})
// opening todo card
document.getElementById('openDisplay').addEventListener('click',function(){
    console.log('hello');
    document.querySelector('.to-do-card').style.display='block';
    console.log('hello');
    let selectProject=document.getElementById('select-project');
    console.log(selectProject);
    
    projects.map((p)=>{
        
        const option=document.createElement('option');
        option.appendChild(document.createTextNode(p.name));
        //option.innerHTML=p.name;
        option.setAttribute('value',p.id);
        selectProject.appendChild(option);   

    })
});

//project close display
document.getElementById('project-closeDisplay').addEventListener('click',function(){
    document.querySelector('.project-to-do-card').style.display='none';
})

document.getElementById('opennote').addEventListener('click',function(){
    console.log('hello!!!');
    document.querySelector('.main-content').innerHTML="";
    //document.querySelector('main-content').appendChild(document.getElementById('noteFromContainer'));
    
    document.getElementById('noteFormContainer').style.display='flex';
    console.log('hello!!!');
    //document.querySelector('.info').style.display="none";
})

document.getElementById('closeNote').addEventListener('click',function(){
    document.getElementById('noteFormContainer').style.display="none";
})


document.getElementById('create-note').addEventListener('click',function(){
    console.log(document.getElementById('note-title').value,document.getElementById('note-description').value);
    const note=new Note(document.getElementById('note-title').value,document.getElementById('note-description').value);
    document.getElementById('noteFormContainer').style.display="none";
})


document.getElementById('show-notes').addEventListener('click',function(){
   displayNotes();
})


//clicking on today todo button
document.getElementById('today').addEventListener('click',function(){
    document.querySelector('.main-content').innerHTML="";
    const mainContent=document.querySelector('.main-content');
    const h1=document.createElement('h1');
    h1.appendChild(document.createTextNode('TODAY TASKS'));
    h1.setAttribute('style','text-align:center');
    mainContent.appendChild(h1);
    const ul=document.createElement('ul');
    let flag1=false;
    Todos.map((todo)=>{
        let data=new Date();
        let date=data.getDate();
        let month=data.getMonth();
        let year=data.getFullYear();
        console.log(todo.dueDate);
        const comparisionDate=`${year}-${month+1}-0${date}`;
        console.log(comparisionDate);
        if(todo.dueDate==comparisionDate){
            flag1=true;
            const li=document.createElement('li');
            li.setAttribute('class','todoitem');
            const checkbox=document.createElement('input');
            checkbox.setAttribute('type','checkbox');
            checkbox.setAttribute('class','delete-todo');
            checkbox.addEventListener('click',function(){
                Todos=Todos.filter(td=>td.id!=todo.id);
                console.log(Todos);
                localStorage.setItem('Todos',JSON.stringify(Todos));
                window.location.reload();
            })
            const div=document.createElement('div');
            div.appendChild(document.createTextNode(todo.title));
            const p=document.createElement('p');
            p.appendChild(document.createTextNode(todo.dueDate));
            const i=document.createElement('i');
            i.setAttribute('class','fas fa-trash');
            i.addEventListener('click',function(){
                console.log('deleting todo');
                Todos=Todos.filter(td=>td.id!=todo.id);
                console.log(Todos);
                localStorage.setItem('Todos',JSON.stringify(Todos));
                window.location.reload();
            });
            li.appendChild(checkbox);
            li.appendChild(div);
            li.appendChild(p);
            li.appendChild(i);
            ul.appendChild(li);
            }
          
        })
    mainContent.appendChild(ul);
    if(flag1==false)
    {
        let paragraph=document.createElement('p');
        paragraph.appendChild(document.createTextNode('no Tasks for Today'));
        paragraph.setAttribute('style','text-align:center')
        mainContent.appendChild(paragraph);

    }

})

//clicking on upcoming todo button

document.getElementById('upcoming').addEventListener('click',function(){
    
    document.querySelector('.main-content').innerHTML="";
    const mainContent=document.querySelector('.main-content');
    const h1=document.createElement('h1');
    h1.appendChild(document.createTextNode('UPCOMING TASKS'));
    h1.setAttribute('style','text-align:center');
    mainContent.appendChild(h1);
    const ul=document.createElement('ul');
    let flag2=false;
    Todos.map((todo)=>{
        let data=new Date();
        let date=data.getDate();
        let month=data.getMonth();
        let year=data.getFullYear();
        console.log(todo.dueDate);
        const comparisionDate=`${year}-${month+1}-0${date}`;
        console.log(comparisionDate);
        if(todo.dueDate>getDate()){
            flag2=true;
            const li=document.createElement('li');
            li.setAttribute('class','todoitem');
            const checkbox=document.createElement('input');
            checkbox.setAttribute('type','checkbox');
            checkbox.setAttribute('class','delete-todo');
            checkbox.addEventListener('click',function(){
                Todos=Todos.filter(td=>td.id!=todo.id);
                console.log(Todos);
                localStorage.setItem('Todos',JSON.stringify(Todos));
                window.location.reload();
            })
            const div=document.createElement('div');
            div.appendChild(document.createTextNode(todo.title));
            const p=document.createElement('p');
            p.appendChild(document.createTextNode(todo.dueDate));
            const i=document.createElement('i');
            i.setAttribute('class','fas fa-trash');
            i.addEventListener('click',function(){
                console.log('deleting UPCOMING todo');
                Todos=Todos.filter(td=>td.id!=todo.id);
                console.log(Todos);
                localStorage.setItem('Todos',JSON.stringify(Todos));
                window.location.reload();
            });
            li.appendChild(checkbox);
            li.appendChild(div);
            li.appendChild(p);
            li.appendChild(i);
            ul.appendChild(li);



        }


    })
    mainContent.appendChild(ul);
    if(flag2==false)
    {
        let paragraph=document.createElement('p');
        paragraph.appendChild(document.createTextNode('no Upcoming tasks'));
        paragraph.setAttribute('style','text-align:center')
        mainContent.appendChild(paragraph);

    }

})
/*
localStorage.removeItem('Todos');
localStorage.removeItem('projects');
localStorage.removeItem('Projects');
localStorage.removeItem('notes');*/