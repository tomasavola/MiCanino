import axios from "axios";

function CargarCaninos() {
    axios

        .get("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then((result) => {
            const pokemones = result.data.results;

            pokemones.map((pokemon, index) => {
                const { name, url } = pokemon;

                document.querySelector("#listado").innerHTML += `
  
  
     
    <div class="col-3 pt-4; col">
    <div class="services">
    <div class="card graphic-design">
      <div class="service-bg">
      <img class="imagenCard" src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index + 1}.svg " class="card-img-top" alt="Card image" />
      <br> <br>
        <h5 class="card-title;name">${name}</h5>
        <br> 
        <button class="button-74" onclick="detallePokemon('${url}')">Detalle</button>   
      </div>
    </div>
    </div>
  
          `

            });
        })
        .catch((error) => {
            console.log(error);
        });
}
