$(document).ready( function() {
  const cardInfo = (title, description, [...details], snippet) => {
    return({title, description, details: [...details], snippet, });
  }

  let variablesCard = cardInfo("Variables", "'Let', 'Const', or 'Var'?", ['Let', 'Const', 'var'], "var = x" )
  let objectsCard = cardInfo("Object Initializer", "Easy to add information to an object", ['Name variables the same as keys to avoid repetition', 'Create objects on the fly'])
  let someOtherCard = cardInfo("blah bah", "blah Blah", ['asdf', 'asdf'], 'asldfkj')

  let allCards = [variablesCard, objectsCard, someOtherCard]


  $(document).on('click', '.card_container', function(){
    var _this = this;
    console.log(_this.id)

    $(`#${_this.id} > .${_this.childNodes[0].classList.value}`).children().toggleClass('hidden');
    $(`#${_this.id} > .${_this.childNodes[1].classList.value}`).children().toggleClass('hidden');
  });

  for(i in allCards) {
  $('#container').append(`<div class="card_container"  id="card${i}"  style="width: 300px; height: 300px; border: 1px solid black"><div class="front_side"></div><div class="back_side"></div></div`)  
  }

  for(i in allCards){
    $(`#card${i} > .front_side`).append(
    `<h2 class="front_side">${allCards[i].title}</h2>`,
    `<h3 class="front_side">${allCards[i].description}</h3>`,)
  }

  for(i in allCards){
    for(index in allCards){
      $(`#card${i} > .back_side`).append(
        `<h3 class="back_side hidden">${allCards[i].details[index]}</h3>`)
      }
  }
});