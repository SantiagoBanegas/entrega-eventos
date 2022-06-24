let titulo = document.getElementById("titulo");

let boton = document.getElementById("botonprincipal");
boton.addEventListener("click", () =>{
    titulo.className="efecto"
    console.log("mouseover");
    }
)


let input = document.getElementById("nombre");
input.addEventListener("keydown", (e) =>{
console.log(e.key);
if(e.key === "a"){
    titulo.className = "efecto2";
}
if(e.key === "s"){
    titulo.className = "efecto3";
        }
    }
)


let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) =>{
    e.preventDefault(); 
    console.log("Hola a todos");
});