import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const users = [
    {id: 1, name: 'Giovanne', patins:'RollerBlade'},
    {id: 2, name:'Ricardo', patins:'Flying Eagle'},
    {id: 3, name:'Felippe', patins:'Powerslide' }
]


app.get('/users/:id', (req, res)=>{
    const UserId = parseInt(req.params.id)
    const NameById = users.find( user => user.id === UserId)

    res.send(NameById)
})

app.listen (port, ()=>{
    console.log(`servidor escutando na porta ${port}`);
})