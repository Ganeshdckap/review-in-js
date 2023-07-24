// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let author = document.querySelector(".author")
let job = document.querySelector(".job")
let info = document.querySelector(".info")
let photo = document.querySelector(".person-img")

// console.log(photo);

let left = document.querySelector(".prev-btn")
let right = document.querySelector(".next-btn")
let random = document.querySelector(".random-btn")
// console.log(left);

random.addEventListener("click",()=>{
  randomButton = Math.floor(Math.random ()*reviews.length)
  // console.log(randomButton);
  author.innerText = reviews[randomButton].name
  job.innerText = reviews[randomButton].job
  photo.src = reviews[randomButton].img
  info.innerText = reviews[randomButton].text
})

let count = -1
right.addEventListener("click",()=>{
count ++
// console.log(count);
author.innerText = reviews[count].name
job.innerText = reviews[count].job
photo.src = reviews[count].img
info.innerText = reviews[count].text
if(count ===3){
  count = -1
}
})

let count1 = 4
left.addEventListener("click",()=>{
  count1 --
  // console.log(count1);
  author.innerText = reviews[count1].name
  job.innerText = reviews[count1].job
  photo.src = reviews[count1].img
  info.innerText = reviews[count1].text
  if(count1 ===0){
    count1 = 4
  }
  })