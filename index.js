import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id: 1, name: 'Giovanne', patins:'RollerBlade'},
    {id: 2, name:'Ricardo', patins:'Flying Eagle'},
    {id: 3, name:'Felippe', patins:'Powerslide' }
]

app.get('/users', (req,res)=>{

    res.send(users)
})

app.get('/users/:id', (req, res)=>{
    const UserId = parseInt(req.params.id)
    const NameById = users.find( user => user.id === UserId)

    res.send(NameById)
})



app.post ('/users', (req,res)=>{
    const {name, patins} = req.body;

    if(!name || !patins){
        return res.status(400).json({mensage:'nome e patins são obrigatórios'});
    }

    const newUser ={
        id: users.length +1,
        name,
        patins
    }

    users.push(newUser);
    res.status(201).json(newUser)
})

app.listen (port, ()=>{
    console.log(`servidor escutando na porta ${port}`);
})