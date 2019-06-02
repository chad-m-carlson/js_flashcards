$(document).ready( function() {
  const cardInfo = (title, description, details, snippet) => {
    return({title, description, details, snippet, });
  }

  let variablesCard = cardInfo("Variables", "'Let', 'Const', or 'Var'?", 'Let, Const ,var', "var = x" )
  let objectsCard = cardInfo("Object Initializer", "Easy to add information to an object", 'Name variables the same as keys to avoid repetition ,Create objects on the fly')
  let someOtherCard = cardInfo("blah bah", "blah Blah", 'asdf asdf', 'asldfkj')

  var allCards = [cardInfo("Variables", "'Let', 'Const', or 'Var'?", 'Let, Const ,var', "var = x"), cardInfo("Object Initializer", "Easy to add information to an object", 'Name variables the same as keys to avoid repetition ,Create objects on the fly'), cardInfo("blah bah", "blah Blah", 'asdf asdf', 'asldfkj')]

  $('#submit_new').on('click', () => {
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let details = document.getElementById('details');
    let code_snippet = document.getElementById('code_snippet');
    let x  = cardInfo(title.value, description.value, details.value, code_snippet.value);
    allCards.push(x);
    $('#container').empty();
    displayCards();
  })
  
  $(document).on('click', '#flip',  function() {
    var _this = this.parentElement;
    $(`#${_this.id} > .${_this.childNodes[0].classList.value}`).children().toggleClass('hidden');
    $(`#${_this.id} > .${_this.childNodes[1].classList.value}`).children().toggleClass('hidden');
  });

  const createModal = (index) => {
    $('.modal').addClass('show-modal')
    let modal = document.querySelector(".modal");
    let trigger = document.querySelectorAll(".edit");
    let closeButton = document.querySelector(".close-button");
    const toggleModal = () => {modal.classList.remove('show-modal')};
    $(trigger).on('click', () => modal.classList.add('show-modal'));
    closeButton.addEventListener("click", () =>{
      toggleModal()
      $('#edit_form').remove()
    });
    $('.modal-content').append(`<form id="edit_form" class="ui form" style="width: 200px"><label for="edit_title" >Title</label><input placeholder="${allCards[index].title}" id="edit_title"><br /><labelfor="edit_description">Description</label><textarea rows="10" columns = "10" id="edit_description" placeholder="${allCards[index].description}"></textarea><br /><label for="edit_details">Details</label><input id="edit_details" placeholder="${allCards[index].details}"><br /><label for="edit_code_snippet">Code Snippet</label><input id="edit_code_snippet" placeholder="${allCards[index].snippet}"><br /></form><button id="edit_submit">Submit</button>`)
    $('#edit_title').attr(`placeholder`, `${allCards[index].title}`)
    $('#edit_description').attr(`placeholder`, `${allCards[index].description}`)
    $('#edit_details').attr(`placeholder`, `${allCards[index].details}`)
    $('#edit_code_snippet').attr(`placeholder`, `${allCards[index].snippet}`)
  }
  
  
  $(document).on('click', '#edit', function() {
    let modal = document.querySelector(".modal");
    const index = allCards.findIndex(x => x.title === this.parentElement.childNodes[0].childNodes[0].innerText)
    const toggleModal = () => {modal.classList.remove('show-modal')};
    createModal(index);
    
    
    
    $(document).on('click', '#edit_submit', () => {
      let edit_title = document.getElementById('edit_title');
      let edit_description = document.getElementById('edit_description');
      let edit_details = document.getElementById('edit_details');
      let edit_code_snippet = document.getElementById('edit_code_snippet');
      
      if (edit_title.value == ''){
        let changed_title = edit_title.attributes.placeholder.value
        allCards[index].title = changed_title;
      } else {
        let changed_title = edit_title.value;
        allCards[index].title = changed_title;
        debugger
      };
      
      if (edit_description.value == ''){
        // let changed_description
        changed_description = edit_description.attributes.placeholder.value
        allCards[index].description = changed_description;
      } else {
        changed_description = edit_description.value;
        allCards[index].description = changed_description;
      }
      
      if (edit_details.value == ''){
        // let changed_details
        changed_details = edit_details.attributes.placeholder.value
        allCards[index].details = changed_details;
      } else {
        changed_details = edit_details.value;
        allCards[index].details = changed_details;
      }
      
      if (edit_code_snippet.value == ''){
        // let changed_code_snippet
        changed_code_snippet = edit_code_snippet.attributes.placeholder.value
        allCards[index].snippet = changed_code_snippet;
      } else {
        changed_code_snippet = edit_code_snippet.value;
        allCards[index].snippet = changed_code_snippet;
      };
      
    })
  })
    

  $(document).on('click', '#delete', function() {
    let index = allCards.findIndex(x => x.title === this.parentElement.childNodes[0].childNodes[0].innerText);
    allCards.splice(index, 1);
    $(this.parentElement).remove();
  });

  const displayCards = () => {
    for(i in allCards) {
    $('#container').append(`<div class="card_container ui card"  id="card${i}"  ><div class="front_side"></div><div class="back_side"></div></div`)  ;
    $(`#card${i}`).append(
      `<button id="flip">Flip Card</button>`);
    $(`#card${i}`).append(
      `<button class='edit' id="edit">Edit</button>`);
    $(`#card${i}`).append(
      `<button id="delete">Delete</button>`);
    };

    for(i in allCards){
      $(`#card${i} > .front_side`).append(
      `<h2 class="front_side">${allCards[i].title}</h2>`,
      `<h3 class="front_side">${allCards[i].description}</h3>`,);
    };

    for(i in allCards){
        $(`#card${i} > .back_side`).append(
          `<h3 class="back_side hidden">${allCards[i].details}</h3>`,
          );
    };
  };
displayCards()

});
