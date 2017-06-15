const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const update = function() {
    render(root);
  }
  wrapper.append(Header());
  wrapper.append(Search());
  wrapper.append(Modal());
  root.append(wrapper);
}


const state = {
  pokemons: null,
  selectedPokemon: null
};


$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemons = json;
    const root = $('.root');
    render(root);
  });

});
