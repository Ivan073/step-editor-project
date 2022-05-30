const db = require("../models/index.js");
const uuid = require("uuid");
const path = require("path");

const Note = db.notes;

exports.getNote = async (req, res) =>{
    const fs = require('fs');
    const user = await Note.findOne({raw:true, where: {id:req.params.id}});
    const data = fs.readFileSync(__dirname+"/../static/"+user.content.split(' ')[0], 'utf8');
    console.log(data);
    res.send(data);
}

exports.getNotes = (req, res) => {
    Note.findAll({raw:true}).then(notes=>{
        notes.map(note =>{
            let filenames=note.content.split(" ");
            filenames.map(name =>{
                return {"path": name, "name": name}
            });
            note.content=filenames;
            return note;
        });
        /*res.zip([
            {path: notes[0].content, name: }
        ]);*/
        res.send(notes);
        console.log(notes);
    }).catch(err=>console.log(err));
}

exports.addNote = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    let content = "";
    let first = true;
    if(req.files){
        for(let data of req.files.content){
            const file = data;
            let fileName;
            if(first){
                fileName = uuid.v4() + ".txt";
                first = false;
            }else{
                fileName = uuid.v4() + ".jpg";
            }
            
            file.mv(path.resolve(__dirname, '..', 'static', fileName));
            content+=fileName+ " ";
        }
    }
    console.log(content);
    const note = new Note( {"content":content, "account_id":req.body.account_id, "hidden":req.body.hidden});
            

    note.save();
    res.send({message:'added'});
}

exports.changeNote = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    let content = "";
    let first = true;
        const file = req.files.file;
        let fileName;
        if(first){
            fileName = uuid.v4() + ".txt";
            first = false;
        }/*else{
            fileName = uuid.v4() + ".jpg";
        }*/
        
        file.mv(path.resolve(__dirname, '..', 'static', fileName));
        content+=fileName+ " ";
    console.log(content);
    Note.update({content: content},{where: {id:req.params.id}}); 
    res.send({message:'changed'});
}