'use strict';

const PokemonItem = (poke) => {
  const item = $('<div class="item grey lighten-2"></div>');
  const name = $('<h6 class="capital">'+poke.pokemon.pokemon_species.name+'</h6>');
  const image=$('<img src="http://serebii.net/art/th/'+ poke.pokemon.entry_number +'.png" alt="'+poke.pokemon.pokemon_species.name+'" width="100px"/>');
  const pbola=$('<img class="iconoPoke" src="icon/pokeball_gray.png" id="'+poke.pokemon.entry_number+'">');
  const cor=$('<img class="iconoPoke" src="icon/valentines-heart.png">');
  const arrow=$('<img class="iconoPoke" src="icon/data.png">');
  // let modal = $('.modal');

    item.append(image);
    item.append(name);
    item.append(pbola);
    item.append(cor);
    item.append(arrow);

  pbola.on('click',(e)=>{
    const event= e.target;
    console.log(e.target);
    console.log(e.target.className);
    state.selectedPokemon=poke.pokemon;
    if(e.target.className == "iconoPoke"){
      console.log("coincide clase");
      console.log(poke.pokemon.pokemon_species.url)
    // console.log(images);
    // var modalImg = document.getElementById("img01");
    // body.style.overflow="hidden";
    $('.modal').show();
    $('.may').text(poke.pokemon.pokemon_species.name);
    $('#img01').attr("src","http://serebii.net/art/th/"+ poke.pokemon.entry_number +".png");
    // modalImg.src = e.target.nextElementSibling.src;
    }

    $('#close').on('click',(e)=>{
      e.preventDefault();
        console.log("entre para cerrar");
        console.log(event.target);
        $('.modal').hide();
        // modal.style.display="none";
        // body.style.overflow="visible";
    });
  });

  // function cerrar (event){
  // event.preventDefault();
  // // console.log(event.target);
  //   modal.style.display="none";
  //   body.style.overflow="visible";
  // }



  return item;
}

const Modal=()=>{
  const myModal=$('<div class="modal"></div>');
  const spanClose=$('<span id="close">&times;</span>');
  const divTitle=$('<div class="title"></div>');
  const h2=$('<h2 class="may title"></h2>');
  const imgp=$('<img class="modal-content" id="img01">');

myModal.append(spanClose);
divTitle.append(h2);
divTitle.append(imgp);
myModal.append(divTitle);

return myModal;

}
// <div id="myModal" class="modal">
//       <span id="close">&times;</span>
//       <div class="title">
//         <h2 class="may gray titleh1">proyect title</h2>
//         <div class="cajaStar"><div class="black">-</div><span class="fa fa-star small gray"></span><div class="black">-</div></div>
//       </div>
//       <img class="modal-content" id="img01">
//       <!-- <div id="caption"></div> -->
//       <div class="parrafomod">
//         <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="#" class="verdec">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
//         <span>Client: <a href="#" class="verdec">Start Bootstrap</a>  Date: <a href="#" class="verdec">April 2014</a>  Service: <a href="#" class="verdec">Web Development</a></span>
//         <button class="js-btclose cerrar" value="close"><i class="fa fa-times"></i>Close</button>
//       </div>
//   </div>

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
  const card=$('<div class="card col s1 offset-s3">A-Z</div>');
  const row2=$('<div class="row"></div>');
  const result = $('<div class="result"></div>');

  row1.append(inputfield);
  inputfield.append(ico);
  inputfield.append(input);
  inputfield.append(label);
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
