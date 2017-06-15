'use strict';

const filterByName = (pokemons,name) => {
  console.log(pokemons);
  console.log(pokemons.pokemon_entries);
  console.log(pokemons.pokemon_entries[0].pokemon_species.name);

  // pokemons.pokemon_entries.forEach((pokemon)=>{
  //   if(pokemon.pokemon_species.name==name){
  //     alert('coincide');
  //   }
  // })

  return pokemons.pokemon_entries.filter((pokemon)=>{
    return pokemon.pokemon_species.name.toLowerCase().indexOf(name.toLowerCase())!= -1;
  })
  // return pokemons.filter((pokemon) => {
  //   // console.log(pokemons.pokemon_entries.pokemon_species.name);
  //   return for(var i=0;i<300;i++){pokemon.pokemon_entries[i].pokemon_species.name.toLowerCase().indexOf(name.toLowerCase())} != -1;
  // });
  // console.log(filterByName);
}
