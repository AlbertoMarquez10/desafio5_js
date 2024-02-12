const campoTarea = document.querySelector("#campoTarea")
const agregar = document.querySelector("#btn")
const tareasCreadas = document.querySelector("#mostrarTarea")

let totalTareas = document.querySelector("#totalTareas")
const tareasRealizadas = document.querySelector("#tareasRealizadas");


let tareasListadas = []

let html = ''
let idPropio = 0


let resumenTareas = (id) => {
    if (id != undefined) {
        console.log(id)
        let estado = tareasListadas.find((item) => item.id == id)
        console.log(estado)
        estado["status"] == true ? (estado["status"] = false) : (estado["status"] = true)
        console.log(estado)
    }
    let tareasListas = tareasListadas.filter((item) => item.status == true )
    totalTareas.innerHTML = tareasListadas.length
    tareasRealizadas.innerHTML = tareasListas.length

}
resumenTareas()


mostrarTareas = () => {
    for (const tarealistada of tareasListadas) {
        html += `
        <li>
            <h4 class="h4IdeTareas">${tarealistada.id}</h4>
            <h4 class="h4IdeTareas">${tarealistada.tarea}</h4>
            <h4 class="h4IdeTareas"><input type="checkbox" id="checkstatus" ${tarealistada.status == true ? "checked" : " "} onchange="resumenTareas(${tarealistada.id})"/></h4>
            <h4 class="h4IdeTareas"><input type="button" value="Eliminar" id="eliminar" onclick = "eliminar(${tarealistada.id})"></h4>
        </li>
        <br/>
        `
    }

    tareasCreadas.innerHTML = html
    html = ''
    //idPropio = tareasListadas.length
}

//mostrarTareas()

const eliminar = (id) => {
    let tareasVigentes = tareasListadas.filter((item) => item.id != id)
    console.log(tareasVigentes)
    tareasListadas = tareasVigentes
    mostrarTareas()
    resumenTareas()

}
agregar.addEventListener("click", () =>{
    const nuevaTarea = campoTarea.value
    idPropio = idPropio+1
    console.log(idPropio)
    if (nuevaTarea.trim() !=="") {
        
        tareasListadas.push({id:idPropio, tarea: nuevaTarea,  status:'false'})
        campoTarea.value = ''
        mostrarTareas()
        resumenTareas()
    } else {
        alert("No puedes agregar tareas sin nombre")
    }
    
})

