$(document).ready( function() {
  const cardInfo = (title, description, details, snippet) => {
    return({title, description, details: details, snippet, });
  }

  let variablesCard = cardInfo("Variables", "'Let', 'Const', or 'Var'?", 'Let, Const ,var', "var = x" )
  let objectsCard = cardInfo("Object Initializer", "Easy to add information to an object", 'Name variables the same as keys to avoid repetition ,Create objects on the fly')
  let someOtherCard = cardInfo("blah bah", "blah Blah", 'asdf asdf', 'asldfkj')

  let allCards = [variablesCard, objectsCard, someOtherCard]

  $('#submit').on('click', () => {
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let details = document.getElementById('details');
    let code_snippet = document.getElementById('code_snippet');
    let x  = cardInfo(title.value, description.value, details.value, code_snippet.value);
    allCards.push(x);
    debugger
    $('#container').empty();
    displayCards();
  })

  $(document).on('click', '#flip', function() {
    var _this = this.parentElement;
    $(`#${_this.id} > .${_this.childNodes[0].classList.value}`).children().toggleClass('hidden');
    $(`#${_this.id} > .${_this.childNodes[1].classList.value}`).children().toggleClass('hidden');
  });

  $(document).on('click', '#edit', function() {

  })

  $(document).on('click', '#delete', function() {
    // function remove(array, element) {
    //   const index = array.indexOf(element);
    //   array.splice(index, 1);
    // }
    // for (const item of allCards) {
    //   if ((Object.values(item.title).join('')) === this.parentElement.childNodes[0].childNodes[0].innerText){
    //     console.log(index)
    //   }
    // }
    let index = allCards.findIndex(x => x.title === this.parentElement.childNodes[0].childNodes[0].innerText)

    console.log(index);

    allCards.splice(index, 1)
    console.log(allCards)
    

    // remove(allCards, this.parentElement.childNodes[0].childNodes[0].innerText);
    $(this.parentElement).remove();
  })

  const displayCards = () => {
    
  
    for(i in allCards) {
    $('#container').append(`<div class="card_container ui card"  id="card${i}"  ><div class="front_side"></div><div class="back_side"></div></div`)  ;
    $(`#card${i}`).append(
      `<button id="flip">Flip Card</button>`);
    $(`#card${i}`).append(
      `<button id="edit">Edit</button>`);
    $(`#card${i}`).append(
      `<button id="delete">Delete</button>`);
    }

    for(i in allCards){
      $(`#card${i} > .front_side`).append(
      `<h2 class="front_side">${allCards[i].title}</h2>`,
      `<h3 class="front_side">${allCards[i].description}</h3>`,);
    }

    for(i in allCards){
        $(`#card${i} > .back_side`).append(
          `<h3 class="back_side hidden">${allCards[i].details}</h3>`,
          );
    }
  }
displayCards()

});
