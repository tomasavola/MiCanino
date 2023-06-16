
function getAll() {
    document.getElementById('back').style = "display: block;"
    hide();
    axios
        .get("http://localhost:5000/Canino")
        .then((result) => {

            pizzas = result.data[0];
            pizzas.map((pizza) => {
                const { Id, Nombre, LibreGluten, Importe, Descripcion } = pizza;
            });

        })
        .catch((error) => {
            console.log('error');
        });

}


function getById() {
    document.getElementById('back').style = "display: block;";
    hide();

    const id = document.getElementById('idSelectorGet').value;
    axios
        .get("http://localhost:5000/Canino")
        .then((result) => {

            pizza = result.data[0][0];
            const { Id, Nombre, LibreGluten, Importe, Descripcion } = pizza;
        })
        .catch((error) => {
            console.log('error');
        });
}


function insert() {

    let body = {
        "Nombre": (document.getElementById("nombreInsert").value == null ? undefined : document.getElementById("nombreInsert").value),
        "FechaNacimiento": (document.getElementById("fechaNacimientoInsert").value == null ? undefined : document.getElementById("fechaNacimientoInsert").value),
        "Descripcion": (document.getElementById("descripcionInsert").value == null ? undefined : document.getElementById("descripcionInsert").value),
        "Peso": (document.getElementById("pesoInsert").value == 0 ? undefined : document.getElementById("pesoInsert").value),
        "IdRaza": (document.getElementById("idRazaInsert").value == null ? undefined : document.getElementById("idRazaInsert").value),
        "Foto": (document.getElementById("fotoInsert").value == null ? undefined : document.getElementById("fotoInsert").value),
        "PartidaNacimiento": (document.getElementById("partidaNacimientoInsert").value == null ? undefined : document.getElementById("partidaNacimientoInsert").value),
        "CarnetVacunacion": (document.getElementById("carnetVacunacionInsert").value == null ? undefined : document.getElementById("carnetVacunacionInsert").value),
    }
    console.log(document.getElementById("descripcionInsert").value)

    axios
        .post("http://localhost:5000/Canino", body)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}
