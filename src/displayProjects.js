import Todo from './Todo.js';
import getDate from './getDate.js'; 
//import Todos from './Todos.js';
/*let Todos=[];
if(JSON.parse(localStorage.getItem('Todos'))==null || JSON.parse(localStorage.getItem('Todos'))==undefined)
{
    Todos=[];
}
else{
    Todos=JSON.parse(localStorage.getItem('Todos'));
}
*/

//getting projects from localStorage


function displayProjects(projects){
    
    let ul=document.querySelector('.projects');
   // console.log(projects);
    projects.map((project)=>{
        let li=document.createElement('li');
       
        li.setAttribute('class','project-name');
        const ptitle=document.createElement('p');
        
        ptitle.appendChild(document.createTextNode(project.name));
        li.appendChild(ptitle);
        const i1=document.createElement('i');
        i1.setAttribute('class','fas fa-times');
        i1.addEventListener('click',function(){
            projects=projects.filter((p)=>p.id!=project.id);
            localStorage.setItem('projects',JSON.stringify(projects));
            window.location.reload();
        })
        li.appendChild(i1);
        /*const ul1=document.createElement('ul');
        const today=document.createElement('li');
        today.appendChild(document.createTextNode('Today'));
        const upcoming=document.createElement('li');
        upcoming.appendChild(document.createTextNode('Upcoming'));
        ul1.appendChild(today);
        ul1.appendChild(upcoming);
        li.appendChild(ul1);*/
        ptitle.addEventListener('click',function(){


            //content of the main body
            let content=document.querySelector('.main-content');
            content.innerHTML="";

            //ass task button
            /*
            let button=document.createElement('button');
            button.innerHTML='Add Task+';
            button.addEventListener('click',function(){
                document.querySelector('.project-to-do-card').style.display='block';
            });
            button.setAttribute('class','create-button');
            content.appendChild(button);
            console.log(project.name,project.id);
            document.querySelector('.project-createTodo').addEventListener('click',function(){
                function add(){
                    console.log(project.name);
                let obj1=new Todo(document.getElementById('project-title').value,document.getElementById('project-desc').value,document.getElementById('project-dueDate').value,document.getElementById('project-priority').value,document.getElementById('project-category').value,false,project.id);
               // console.log(obj1);
                
                console.log('listing project');
                projects.map((p)=>{
                    if(p.id===project.id)
                    {
                        p.todo.push(obj1);
                    }
                })
                console.log(projects);
                localStorage.removeItem('projects');
                localStorage.setItem('projects',JSON.stringify(projects));
                //localStorage.setItem('Todos',JSON.stringify(Todos));
                document.querySelector('.project-to-do-card').style.display='none';
                }
                add();
            
            });


            */




            //console.log(project.todo);
            const todayHeading=document.createElement('h2');
            todayHeading.appendChild(document.createTextNode('Today'));
            todayHeading.setAttribute('style','text-align:center;');
            content.appendChild(todayHeading);
            const ul=document.createElement('ul');
            ul.setAttribute('class','project-todos');
            let date=getDate();
           // console.log(date);
            console.log(project.todo);
            let flag1=false;
            project.todo.map((td)=>{
               // if(todo.id in project)
                //console.log('due date:',td.dueDate);
               if(td.dueDate==date){
                    flag1=true;
                    const li=document.createElement('li');
                    li.setAttribute('class','todoitem');
                    if(td.priority=='high')
                    {
                        li.setAttribute('class','todoitem high-priority');
                    }
                    //deleting functionality for checkbox todo and from project also
                    const checkbox=document.createElement('input');
                    checkbox.setAttribute('type','checkbox');
                    checkbox.setAttribute('class','delete-todo');
                    checkbox.addEventListener('click',function(){
                            
                            project.todo=project.todo.filter(tod=>td.id!=tod.id);
                           
                            localStorage.setItem('projects',JSON.stringify(projects));
                            window.location.reload();
                    })


                    const div=document.createElement('div');
                    div.appendChild(document.createTextNode(td.title));
                    const div1=document.createElement('div');
                    div1.appendChild(document.createTextNode(td.category));
                    const p=document.createElement('p');
                    p.appendChild(document.createTextNode(td.dueDate));
                    
               //deleting todo from project and Todos
                const i=document.createElement('i');
                i.setAttribute('class','fas fa-trash');
                i.addEventListener('click',function(){
                    //console.log('deleting todo');
                    
                    project.todo=project.todo.filter((element)=>element.id!=td.id);
                    
                    
                    localStorage.setItem('projects',JSON.stringify(projects));
                    window.location.reload();
                    });
                li.appendChild(checkbox);
                li.appendChild(div);
                li.appendChild(div1);
                li.appendChild(p);
                li.appendChild(i);
                ul.appendChild(li);
            }
            })
            content.appendChild(ul);
            if(flag1==false)
            {
                let paragraph=document.createElement('p');
                paragraph.appendChild(document.createTextNode('no Tasks for Today'));
                paragraph.setAttribute('style','text-align:center')
                content.appendChild(paragraph);

            }

            const upcomingHeading=document.createElement('h2');
            upcomingHeading.appendChild(document.createTextNode('Upcoming'));
            upcomingHeading.setAttribute('style','text-align:center');
            content.appendChild(upcomingHeading);
            const ul1=document.createElement('ul');
            ul1.setAttribute('class','upcoming-project-todos');
            console.log(project);
            //console.log(date);
            let flag2=false;
            project.todo.map((td)=>{
               // if(todo.id in project)
                
                if(td.dueDate>date){
                    flag2=true;
                    console.log(td);
                    const li=document.createElement('li');
                    li.setAttribute('class','todoitem');
                    if(td.priority=='high')
                    {
                        li.setAttribute('class','high-priority');
                    }
                    //deleting functionality for checkbox todo and from project also
                    const checkbox=document.createElement('input');
                    checkbox.setAttribute('type','checkbox');
                    checkbox.setAttribute('class','delete-todo');
                    checkbox.addEventListener('click',function(){
                         
                            project.todo=project.todo.filter(tod=>td.id!=tod.id);
                            
                            localStorage.setItem('projects',JSON.stringify(projects));
                            window.location.reload();
                    })


                    const div=document.createElement('div');
                    div.appendChild(document.createTextNode(td.title));
                    const div1=document.createElement('div');
                    div1.appendChild(document.createTextNode(td.category));
                    const p=document.createElement('p');
                    p.appendChild(document.createTextNode(td.dueDate));
                    
               //deleting todo from project and Todos
                const i=document.createElement('i');
                i.setAttribute('class','fas fa-trash');
                i.addEventListener('click',function(){
                        console.log('deleting todo');
                        
                        project.todo=project.todo.filter((element)=>element.id!=td.id);
                        
                        localStorage.setItem('projects',JSON.stringify(projects));
                        window.location.reload();

                        });
                li.appendChild(checkbox);
                li.appendChild(div);
                li.appendChild(div1);
                li.appendChild(p);
                li.appendChild(i);
                ul1.appendChild(li);
                }
            });
            content.appendChild(ul1);
            if(flag2==false)
            {
                let paragraph=document.createElement('p');
                paragraph.appendChild(document.createTextNode('no Upcoming Tasks'));
                paragraph.setAttribute('style','text-align:center')
                content.appendChild(paragraph);

            }







           
            

        });
            


        
        ul.appendChild(li);
    });


    let button1=document.createElement('button');
    button1.innerHTML="Add Project +";
    button1.setAttribute('id','add-project-form');
    ul.appendChild(button1);    

}


export default displayProjects;