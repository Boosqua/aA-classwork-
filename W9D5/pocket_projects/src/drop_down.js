
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

// console.log(dropDown)
export const dogLinkCreator = function(){
  const dogLinks = []
  
  // console.log(dropDown)
  for (const dog in dogs) {
    const a = document.createElement('a');
    a.innerHTML = dog;
    a.href = dogs[dog];
    const li = document.createElement("li");
    li.className = 'dog-link'
    li.appendChild(a)
    dogLinks.push(li)
    // console.log(`${dog}: ${dogs[dog]}`);
  }
  attachDogLinks(dogLinks)
}

const attachDogLinks = function(array) {
  const dropDown = document.getElementsByClassName("drop-down-dog-list");
  // debugger
  array.forEach((dog) => {
    // dog.hidden = true;
    dropDown[0].appendChild(dog);
  });
}