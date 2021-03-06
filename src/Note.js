
const { v4: uuidv4 } = require('uuid');
export default class Note{
 
    constructor(title,description)
    {
        this.id=uuidv4();
        this.title=title;
        this.description=description;
        this.addNote();
    }
    addNote(){
        let notes=[];

        if(JSON.parse(localStorage.getItem('notes'))==null || JSON.parse(localStorage.getItem('notes'))==undefined)
        {
            notes=[];
        }
        else{
            notes=JSON.parse(localStorage.getItem('notes'));
        }
        notes=[...notes,this];
        localStorage.setItem('notes',JSON.stringify(notes));

    }
}