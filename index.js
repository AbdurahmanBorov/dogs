
const url = 'https://dog.ceo/api/breeds/image/random/20'
const dogsList = document.querySelector(".dogs-list")

fetch(url)
  .then(response => response.json())
  .then(dogs => {
    console.log(dogs.message);
    let dogsListInner = ''

    dogs.message.forEach(dog => {
      dogsListInner += `
      <li class="dogs-list__item">
        <div class="dogs-list__img">
            <img src="${dog}" alt="">
            <p>11.03.2022 15:22</p>
        </div>
        <div class="dogs-list__buttons">
            <div class="dogs-list__arrow">&#10006;</div>
            <div class="dogs-list__arrow">&#9825;</div>
        </div>
      </li>
      `
    });

    dogsList.innerHTML = dogsListInner
  })

