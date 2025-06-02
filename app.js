const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const btnRandom = document.querySelector(".random-btn");
let currentItem = 0;
prevBtn.addEventListener("click", function () {
  console.log("Decrease: " + currentItem);
  if (currentItem > 0) {
    currentItem--;
    showPerson(currentItem);
  } else {
    currentItem = reviews.length - 1;
    showPerson(currentItem);
  }
});
nextBtn.addEventListener("click", function () {
  if (currentItem < reviews.length) {
    console.log("Increase: " + currentItem);
    currentItem++;
    showPerson(currentItem);
  } else {
    currentItem = 0;
    showPerson(currentItem);
  }
});

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
btnRandom.addEventListener("click", function () {
  console.log("Test");
  var randomNumber = randomUser();
  showPerson(randomNumber);
});
function randomUser() {
  const randomNumber = Math.random() * reviews.length;
  return Math.floor(randomNumber);
}

function showPerson(person) {
  const user = reviews[person];
  author.textContent = user.name;
  img.src = user.img;
  job.textContent = user.job;
  info.textContent = user.text;
}
