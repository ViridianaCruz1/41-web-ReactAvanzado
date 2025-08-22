//Esta es la manera de hacer un servidor HTTP en Node.js vanilla
/*
import http from "http";
import fs from "fs";

const servidor = http.createServer((req, res) => {
    if(req.url === '/'){
    
    }
  const archivo = fs.createReadStream("./static/index.html");
  archivo.pipe(res);
  console.log("Hola mundo");
});

servidor.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
*/

//Esta es la manera de levantar un servidor web con Express
/*
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename, "../static");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../static") });
});

app.listen(3000);
console.log("El servidor está escuchando en el puerto 3000");
*/

//Usando ahora si express

import express from "express";
const app = express();

// app.use(express.static("static"));

// // app.get("/", (req, res) => {
// //   res.sendFile("index.html");
// // });

// app.get("/usuario/eliminar", (req, res) => {
//   res.send("Eliminando usuario");
// });

// app.get("/usuario/eliminar", (req, res) => {
//   res.json({
//     nombre: "Juan",
//     email: "juan@example.com",
//     id: 1,
//     edad: 30,
//     pais: "México",
//   });
// });

// app.get("/usuario/actualizado", (req, res) => {
//   res.status(200).sendStatus(200);
// });

app.listen(3000, () => {
  console.log("El servidor está escuchando en el puerto 3000");
});

// fetch("http://mipagina.com/v1/api/usuario", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

//RECIBIMOS PARAMETROS DESDE LA URL DEL LADO DEL CLIENTE
app.get("/suma/:a/:b", (req, res) => {
  console.log(req.params);
  const { a, b } = req.params;
  const suma = parseInt(a) + parseInt(b);
  res.send(`La suma de ${a} y ${b} es ${suma}`);
});

//RECIBIMOS QUERY PARAMETERS DESDE LA URL DEL LADO DEL CLIENTE
app.get("/query", (req, res) => {
  const { nombre } = req.query;
  if (nombre == "") {
    return res.status(400).send("No se ha encontrado el usuario");
  }
  if (nombre == "admin") {
    return res.send("Hola admin");
  }
  res.send(`El nombre de usuario es: ${nombre}`);
});

app.post("/usuario", (req, res) => {
  res.send("Usuario creado");
});
