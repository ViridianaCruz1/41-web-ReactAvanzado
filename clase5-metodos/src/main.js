import express from "express"

const app = express()

//Extraer parametros del usuario
app.get("/profile/:id/nombre/:nombre", (req, res)=>{
    const {id, nombre} = req.params

        const idNumerico = parseInt(id)
        if(!isNaN(idNumerico)){
            res.send(`<h1>Soy el usuario ${nombre} con el id ${id}</h1>`)
        } else {
            res.send(`<h1>id invalido</h1>`)
        }
    
    console.log(id, nombre);


    res.send(`<h1>Faltan parametros</h1>`)
})

//Parametros de la peticion
app.get("/profile", (req, res)=>{
    res.send(`<h1>Hola, soy el perfil</h1>`)
})


//Queries de la peticiion
app.get('/search', (req, res)=>{
    const {libro} = req.query
    console.log(libro);
    if(!libro) return res.send(`<h1>Debes de ingresar un libro</h1>`)
        res.send(`
    <h2>Lista de libros</h2>
        <ul>
        <li>La biblia</li>
        <li>El libro de la vida</li>
        <li>Moby Dick</li>
        <li>Cinderella</li>
        </ul>
        `)
})

// ? estructura oara iniciar un query
// & Estructura para continuar enviando mas queries
// %20 para enviar un espacio en el query

//localhost:3000/profile
//localhost:3000/search?libro=la%20vida%20es%20es%20una%20cancion&autor=VERONICA

app.get("/register", (req, res)=>{
    res.send(`<form action="/profile" method="post">
        <input type="text" name="userName" placeholder="Nombre de Usuario">
        <input type="email" name="email" placeholder="E-mail">
        <input type="password" name="password" placeholder="Contrasena">
        <input type="submit" value="Registrarse">
        
        </form>`)
    })

app.post("/profile", (req,res)=>{
    const {userName, email, password} = req.body
    if(!userName || !email || !password) return res.send(`<h1>Debes de completar todos los campos</h1>`)
    res.send(`<h1>Pagina del perfil</h1>`)
})

app.listen(3000, ()=>{
    console.log("servidor en el puerto " + 3000);
})

//DISTINTOS METODOS
app.get("/products", (req,res) => {})
app.post("/products", (req,res) => {})
app.all("/products", (req,res) => {})

