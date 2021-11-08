const displayNotes=function(){
    let notes=[];
    if(JSON.parse(localStorage.getItem('notes'))==null || JSON.parse(localStorage.getItem('notes'))==undefined)
    {
        notes=[];
    }
    else{
        notes=JSON.parse(localStorage.getItem('notes'));
    }
    const content=document.querySelector('.main-content');
    content.innerHTML='';
    const heading=document.createElement('h1');
    heading.appendChild(document.createTextNode('Notes'));
    content.appendChild(heading);
    const ul=document.createElement('ul');
    console.log(notes);
    notes.map((note)=>{
        const li=document.createElement('li');
        li.setAttribute('class','individual-note');
        const h3=document.createElement('h2');
        h3.appendChild(document.createTextNode(note.title));
        const p=document.createElement('p');
        p.appendChild(document.createTextNode(note.description));
        const i=document.createElement('i');
        i.setAttribute('class','fas fa-trash');
        i.setAttribute('style','float:right');
        i.addEventListener('click',function(){
            let allnotes=[];
            if(JSON.parse(localStorage.getItem('notes'))==null || JSON.parse(localStorage.getItem('notes'))==undefined)
            {
                allnotes=[];
            }
            else{
                allnotes=JSON.parse(localStorage.getItem('notes'));
            }
            allnotes=allnotes.filter(n=>n.id!=note.id);
            localStorage.setItem('notes',JSON.stringify(allnotes));
            window.location.reload();
        })
        h3.appendChild(i);
        li.appendChild(h3);
        
        li.appendChild(p);
        ul.appendChild(li);
        
    })
    content.appendChild(ul);
    
}

export default displayNotes;