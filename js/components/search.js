'use strict';

const PokemonItem = (poke) => {
  const item = $('<div class="col s2 grey lighten-2 item"></div>');
  const item2=$('<div class="trapecio"></div>');
  const name = $('<h6 class="capital">'+poke.pokemon.pokemon_species.name+'</h6>');
  const image=$('<img src="http://serebii.net/art/th/'+ poke.pokemon.entry_number +'.png" alt="'+poke.pokemon.pokemon_species.name+'" width="100px" height="150px" class="valign-wrapper"/>');
  const pbola=$('<img class="iconoPoke" src="icon/pokeball_gray.png" id="'+poke.pokemon.entry_number+'">');
  const cor=$('<img class="iconoPoke" src="icon/valentines-heart.png">');
  const arrow=$('<img class="iconoPoke" src="icon/data.png">');

    item.append(image);
    item2.append(name);
    item2.append(pbola);
    item2.append(cor);
    item2.append(arrow);
    item.append(item2);

  pbola.on('click',(e)=>{
    const event= e.target;
    console.log(e.target);
    console.log(e.target.className);
    state.selectedPokemon=poke.pokemon;
    if(e.target.className == "iconoPoke"){
      console.log("coincide clase");
      console.log(poke.pokemon.pokemon_species.url)
      console.log("http://pokeapi.co/api/v2/pokemon/"+poke.pokemon.pokemon_species.name+"/")
      // var habilidades="http://pokeapi.co/api/v2/pokemon/"+poke.pokemon.pokemon_species.name+"/";
      var habilidades,tipos;
      getJSON('http://pokeapi.co/api/v2/pokemon/'+poke.pokemon.pokemon_species.name+'/', (err, json) => {
        if (err) { return alert(err.message);}
        var pokemonHab = json;
        console.log(pokemonHab);
        habilidades=pokemonHab.abilities;
        $('.hab').empty();
        var abilities= habilidades.forEach((habilidad)=>{
          habilidad.ability.name;
          $('.power').append('<p class=hab>'+habilidad.ability.name+'</p>')
          console.log(habilidad.ability.name);
        })
        console.log(habilidades);
        var weight=pokemonHab.weight/10;
        console.log(weight);
        $('#w').text(weight);
        var height=pokemonHab.height/10;
        console.log(height);
        $('#h').text(height);

        tipos=pokemonHab.types;
        $('.tp').empty();
        var types=tipos.forEach((tipo)=>{
          tipo.type.name;
          $('.types').append('<span class="tp '+tipo.type.name+'">'+ tipo.type.name +'</span>')
          console.log(tipo.type.name);
        })
      });

      getJSON('http://pokeapi.co/api/v2/pokemon-species/'+poke.pokemon.entry_number+'/', (err, json) => {
        if (err) { return alert(err.message);}
        var pokemonInfo = json;
        console.log(pokemonInfo);
        var description=pokemonInfo.flavor_text_entries[3].flavor_text;
        console.log(description);
        $('#describe').text(description);
      });

    $('.modal1').show();
    $('.may').text(poke.pokemon.pokemon_species.name);
    $('#img01').attr("src","http://serebii.net/art/th/"+ poke.pokemon.entry_number +".png");

    }

    $('#close').on('click',(e)=>{
      e.preventDefault();
        console.log("entre para cerrar");

        $('.modal1').hide();

    });
  });

  return item;
}

const Modal=()=>{
  const myModal=$('<div class="modal1"></div>');
  const divWhite=$('<div class="modalWhite"></div>');
  const spanClose=$('<span id="close">&times;</span>');
  const divTitle=$('<div class=""></div>');
  const h2=$('<h2 class="may center-align capital"></h2>');
  const imgp=$('<img class="modal-content" id="img01">');
  const divDesc=$('<div class="desc1"></div>')
  const descrip=$('<p id="describe"></p>');
  const panel=$('<div class="card-panel light-blue darken-1 brochure"></div>');
  const span1=$('<p>Altura: <span id="h"></span> m</p>');
  const span2=$('<p>Peso: <span id="w"></span> kg</p>');
  const parra3=$('<p class="power">Habilidades: </p>');
  const parra4=$('<div class="types">Tipos:</div>');

myModal.append(spanClose);
divWhite.append(divTitle);
divTitle.append(h2);
divTitle.append(imgp);
divDesc.append(descrip)
panel.append(span1);
panel.append(span2);
panel.append(parra3);
divWhite.append(divDesc);
divWhite.append(panel);
divWhite.append(parra4);
myModal.append(divWhite);

return myModal;

}


const reRender = (container,filter,update) => {
  container.empty();
  const filteredPokemons = filterByName(state.pokemons,filter);
  console.log(filteredPokemons);
  filteredPokemons.forEach((pokemon) => {
    const pokemonItem = PokemonItem({
      pokemon: pokemon,
      update:  update
    });
    container.append(pokemonItem);
  });
  // filteredPokemons.forEach((pokemon)=>{
  //   pokemon.pokemon_species.name;
  //   console.log(pokemon.pokemon_species.name);
  // })
}

const Search = (update) => {
  const search = $('<div class="container"></div>');
  const row1=$('<div class="row"></div>');
  const inputfield=$('<div class="input-field col s8"></div>');
  const ico=$('<i class="material-icons prefix">search</i>');
  const input  = $('<input id= "icon_prefix" type="text">');
  const label=$('<label for="icon_prefix">Ingrese el nombre del pokémon</label>');
  const card=$('<div class="col s1 offset-s3"></div>');
  const cardDiv=$('<div class="green darken-4 divAZ"><h5 class="white-text center-align">A-Z</h5></div>')
  const row2=$('<div class="row"></div>');
  const result = $('<div class="result"></div>');

  row1.append(inputfield);
  inputfield.append(ico);
  inputfield.append(input);
  inputfield.append(label);
  card.append(cardDiv);
  row1.append(card);
  row2.append(result);
  search.append(row1);
  search.append(row2);

  input.on('keyup',(e) => {
    const filter = input.val();
    console.log(input.val());
    const pokemons=state.pokemons;
    console.log(pokemons);
    console.log(pokemons.pokemon_entries[0].pokemon_species.name);
    reRender(result,filter,update);
  });
  reRender(result,"",update);

  return search;
}
