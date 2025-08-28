import express from "express"

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/login", (req, res)=>{
    res.send(`
        <h1>Login</h1>
        <form action="/dashboard" method="post">
            <input type="text" name="userName" placeholder="Nombre de Usuario">
            <input type="password" name="password" placeholder="Contrasena">
            <input type="submit" value="Ingresar">
        </form>`)
    })

app.use((req, res)=>{
    const {userName, password} = req.query;
    // if(!userName||!password) 
    //     return res.send(`<h1>Debes de ingresar los datos correctos</h1>`)
    console.log(userName, password);
    if(userName !== "john" && password!=="123") 
        return res.send(`<h1>Datos incorrectos</h1>`);

    next();
})

app.get("/dashboard", (req,res)=>{
    const {userName} = req.body;
    res.send(`<h1>Hola ${userName}, te damos la bienvenida</h1>`)
})
app.get("/perfil", (req,res)=>{
    const {userName} = req.body;
    res.send(`<h1>Perfil</h1>`)
})

app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
})