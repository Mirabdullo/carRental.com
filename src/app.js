"use strict";

const cards = document.querySelector(".cards"),
  community = document.querySelector(".community"),
  mode = document.querySelector(".mode"),
  theme = document.querySelector(".theme"),
  modalWindow = document.querySelector(".modal-window"),
  signUpBtn = document.querySelector(".login-btn"),
  modalContent = document.querySelector(".modal-content"),
  closeBtn = document.querySelector(".close-btn");

theme.addEventListener("click", () => {
  changeTheme();
});

function changeTheme() {
  if (document.body.classList.contains("text-white")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  document.body.classList.toggle("bg-[#1C1C1C]");
  document.body.classList.toggle("text-white");
  mode.classList.toggle("bg-[#272727]");
  mode.classList.toggle("bxs-sun");
  mode.classList.toggle("bxs-moon");
  mode.classList.toggle("bg-[#F5F5F5]");
  mode.classList.toggle("text-[#F5F5F5]");
  bottom.forEach((bot) => {
    if (bot.getAttribute("src") === "./images/Iconwhite.svg") {
      bot.setAttribute("src", "./images/Icon (1).svg");
    } else {
      bot.setAttribute("src", "./images/Iconwhite.svg");
    }
  })

  cards.forEach((card) => {
    card.classList.toggle("bg-[#272727]");
    card.classList.toggle("text-black");
    card.classList.toggle("bg-[#F5F5F5]");
  });
}



signUpBtn.addEventListener("click", (e) => {
  modalWindow.classList.remove("hidden");
});
closeBtn.addEventListener("click", (e) => {
  modalWindow.classList.add("hidden");
});

// modalWindow.addEventListener("click", (e) => {
//   if (e.target.classList.contains("modal-window")) {
//     modalContent.classList.toggle("shaker");
//   }
// });




const carList = [
  {
    id: 1,
    title: "Ford Fiesta",
    category: "Economy car",
    img: "./images/image 13.png",
    place: "5 Seats",
    box: "Automatic",
    years: "21+ Years",
    benzin: "1-lit / 2.5km",
  },
  {
    id: 1,
    title: "Nissan Versa",
    category: "Compact car",
    img: "./images/image 13 (1).png",
    place: "5 Seats",
    box: "Automatic",
    years: "21+ Years",
    benzin: "1-lit / 2.5km",
  },
  {
    id: 1,
    title: "Toyota Corolla",
    category: "Mid-size car",
    img: "./images/image 13 (2).png",
    place: "5 Seats",
    box: "Automatic",
    years: "21+ Years",
    benzin: "1-lit / 2.5km",
  },
  {
    id: 1,
    title: "Nissan Rogue",
    category: "Mid-size SUV",
    img: "./images/image 13 (3).png",
    place: "5 Seats",
    box: "Automatic",
    years: "21+ Years",
    benzin: "1-lit / 2.5km",
  },
  {
    id: 1,
    title: "Chevy Traverse",
    category: "Full-size SUV",
    img: "./images/image 13 (4).png",
    place: "5 Seats",
    box: "Automatic",
    years: "21+ Years",
    benzin: "1-lit / 2.5km",
  },
  {
    id: 1,
    title: "Nissan Altima",
    category: "Full-size car",
    img: "./images/image 13 (5).png",
    place: "5 Seats",
    box: "Automatic",
    years: "21+ Years",
    benzin: "1-lit / 2.5km",
  },
];

function renderCards(list) {
  list.forEach((cars) => {
    const carItem = createElement(
      "div",
      "w-[387px] h-[433px] bg-[#F5F5F5] rounded-2xl hover:bg-[#299764] hover:text-white",
      `
            <h2 class="text-2xl ml-6 pt-8 font-bold">${cars.title}</h2>
            <p class="pl-6 text-slate-600">${cars.category}</p>
            <img src="${cars.img}" alt="img">
            <div class="flex justify-evenly items-center  -ml-16">
            <span class="flex justify-between items-center gap-3">
                <i class='bx bxs-user' ></i>
                <p>${cars.place}</p>
                </span>
              <span class="flex justify-between items-center gap-3">
                <img src="./images/gear 1.svg" alt="img">
                <p>${cars.box}</p>
                </span>
                </div>
                <div class="flex justify-evenly items-center mt-5 -ml-16">
                <span class="flex justify-between items-center gap-3">
                <img src="./images/file.svg" alt="img">
                <p>${cars.years}</p>
                </span>
                <span class="flex justify-between items-center gap-3">
                <img src="./images/Vector.svg" alt="">
                <p>${cars.benzin}</p>
              </span>
              </div>
        `
    );

    cards.append(carItem);
  });
}
renderCards(carList);

const aboutList = [
  {
    id: 1,
    img: "./images/Ava.png",
    name: "Savannah Nguyen",
    email: "savannahnguyen@gmail.com",
    description:
      "Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien. Pulvinar nunc consectetur nibh consectetur mollis mauris est mauris amet. Sed hac vehicula id et dui morbi quam pulvinar condimentum. Senectus sed varius interdum nunc, arcu vulputate massa.",
  },
  {
    id: 2,
    img: "./images/Ava (1).png",
    name: "Ronald Richards",
    email: "ronaldrichards@gmail.com",
    description:
      "Placerat pulvinar in amet sem id gravida nisi leo. A dignissim est pellentesque mi quisque vel mi ut. Porttitor blandit auctor odio a ornare felis tortor bibendum molestie. ",
  },
  {
    id: 3,
    img: "./images/Ava (2).png",
    name: "Kristin Watson",
    email: "kristinwatson@gmail.com",
    description:
      "Id adipiscing vulputate arcu pretium dignissim. Felis vulputate tellus velit consectetur. Congue convallis aliquam eget ullamcorper quam pellentesque cursus. Dictumst mauris ac, quis orci morbi ultrices faucibus volutpat mauris. Bibendum sed ut lectus facilisi amet orci. Interdum massa orci urna id ac cras arcu.",
  },
];

function renderComunity(list) {
  list.forEach((item) => {
    const aboutItem = createElement(
      "div",
      "employer__card w-[420px] h-[333px] rounded-2xl bg-white p-6 relative",
      `
            <div class="flex justify-between iteRonald Richardsms-center mb-[14px] relative">
                <img src="${item.img}" alt="img" class="w-[42px] h-[42px]">
                <span class="-ml-[100px]">
                  <h2 class="font-bold">${item.name}</h2>
                  <p class="text-sm">${item.email}</p>
                </span>
                <img src="./images/google.svg" alt="google">
              </div>
              <p class="h-[160px] w-[372px] text-sm leading-6">${item.description}</p>
              <hr class="mt-[30px] relative ">
              <span class="flex items-center justify-between">
                <p>Star rating: </p>
                <img src="./images/Frame 5292.svg" alt="img">
              </span>
            
            `
    );
    community.append(aboutItem);
  });
}

renderComunity(aboutList);
