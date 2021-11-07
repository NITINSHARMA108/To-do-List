
let Projects=[];
if(JSON.parse(localStorage.getItem('Projects'))==null || JSON.parse(localStorage.getItem('Projects'))==undefined)
{
    Todos=[];
}
else{
    Todos=JSON.parse(localStorage.getItem('Projects'));
}

export default Projects;