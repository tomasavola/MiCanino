// import Pizza from "../src/models/pizza";
/*
function getAll(){
    let top = document.getElementById("top").value
    let orderField = document.getElementById("orderField").value
    let sortOrder = document.getElementById("sortOrder").value
    console.log(top)

    axios
    .get("http://localhost:3000/Pizzas?"+(top != "" ? "top="+top : undefined)+"&"+(orderField != "" ? "oderField="+orderField : undefined)+"&"+(sortOrder != "" ? "sortOrder"+sortOrder : undefined))
    // .get("http://localhost:3000/Pizzas/getAll")
    .then((result) => {   
        let listaPizzas = ''; 
        result.data.map((pizza) =>{            
            listaPizzas += `<li class="list-group-item active">${pizza.Nombre}</li>`;          
        })
        document.getElementById("lista-get-pizzas").innerHTML = `
            ${listaPizzas}
        `;
    })
    .catch((error) => {
        console.log(error);
    });
}

function getById(){
    let id = document.getElementById("idGet").value;
    axios    
    .get("http://localhost:3000/Pizzas/"+id)
    .then((result) => {      
        if(result.data.Nombre !== undefined){
            document.getElementById("pizza-elegida").innerHTML = `
                <li class="list-group-item active">${result.data.Nombre}</li>
            `;
        }else{
            document.getElementById("pizza-elegida").innerHTML = `
                <li class="list-group-item active">No se encontro la pizza</li>
            `;
        }
        
    })
    .catch((error) => {
        console.log(error);
    });
}

function deleteById(){
    let id = document.getElementById("idDelete").value
    console.log(id)

    axios    
    .delete("http://localhost:3000/Pizzas/"+id)
    .then((result) => {    
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}
*/

function insert(){

    let body = {
        "Nombre": (document.getElementById("nombreInsert").value == null ? undefined : document.getElementById("nombreInsert").value),
        "FechaNacimiento": (document.getElementById("fechaNacimientoInsert").value == null ? undefined : document.getElementById("fechaNacimientoInsert").value),
        "Descripcion": (document.getElementById("descripcionInsert").value == null ? undefined : document.getElementById("descripcionInsert").value),
        "Peso": (document.getElementById("pesoInsert").value == 0 ? undefined : document.getElementById("pesoInsert").value),
        "IdRaza": (document.getElementById("idRazaInsert").value == null? undefined : document.getElementById("idRazaInsert").value),
        "Foto": (document.getElementById("fotoInsert").value == null ? undefined : document.getElementById("fotoInsert").value),
        "PartidaNacimiento": (document.getElementById("partidaNacimientoInsert").value == null ? undefined : document.getElementById("partidaNacimientoInsert").value),
        "CarnetVacunacion": (document.getElementById("carnetVacunacionInsert").value == null ? undefined : document.getElementById("carnetVacunacionInsert").value),
    }
    console.log(document.getElementById("descripcionInsert").value)

    axios    
    .post("http://localhost:3000/Canino", body)
    .then((result) => {    
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}
/*
function update(){

    // console.log(document.getElementById("importeUpdate").value == "")

    let body = {
        "Id": (document.getElementById("idUpdate").value == null ? undefined : document.getElementById("idUpdate").value),
        "Nombre": (document.getElementById("nombreUpdate").value),
        "LibreGluten": document.getElementById("libreGlutenUpdate").value,
        "Importe": (document.getElementById("importeUpdate").value == "" ? undefined : document.getElementById("importeUpdate").value),
        "Descripcion": (document.getElementById("descripcionUpdate").value == "" ? undefined : document.getElementById("descripcionUpdate").value)
    }

    axios    
    .put("http://localhost:3000/Pizzas", body)
    .then((result) => {    
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}

function resetAll(){
    document.getElementById("lista-get-pizzas").innerHTML = ``;
}

function resetSelectedPizza(){
    document.getElementById("pizza-elegida").innerHTML = ``;
}
*/
