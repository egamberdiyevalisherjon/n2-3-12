// let users = [
//   { id: 1, name: "Eshmat", age: 32, job: "Full stack dev" },
//   { id: 2, name: "Toshmat", age: 42, job: "Full stack dev" },
//   { id: 3, name: "a", age: 24, job: "Full stack dev" },
//   { id: 4, name: "b", age: 23, job: "Full stack dev" },
//   { id: 5, name: "c", age: 53, job: "Full stack dev" },
//   { id: 6, name: "d", age: 45, job: "Full stack dev" },
//   { id: 7, name: "e", age: 32, job: "Full stack dev" },
// ];

// console.log(users.sort((a, b) => b.age - a.age));

// let images = [
//   "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
//   "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=0.8889431489846579xw:1xh;center,top&resize=1200:*",
//   "https://c.files.bbci.co.uk/7077/production/_120419782_mercedes.jpg",
//   "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/66bee037-17b5-41a4-be45-f52580bb2d41/COVER_VENENO.jpeg?width=800&fm=jpg&auto=format",
//   "https://file.kelleybluebookimages.com/kbb/base/evox/CP/52815/2023-Toyota-Crown-front_52815_032_1837x748_1G3_cropped.png",
//   "https://carsales.pxcrush.net/carsales//cars/private/cbyadh1m02s0pdnydf5vbjqz.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480",
//   "/images/mers.jpeg",
//   "/images/red.webp",
// ];

// let imageElem = document.querySelector(".image");

// console.log(imageElem.getAttribute("alt"));
// let i = 0;
// imageElem.setAttribute("src", images[i]);

// setInterval(() => {
//   if (++i === images.length) {
//     i = 0;
//   }

//   imageElem.setAttribute("src", images[i]);
// }, 1000);

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   // alert("Salom");
// });

// // dblclick => double click
// btn.addEventListener("dblclick", () => {
//   // alert("Salom DBL");
// });

// // context menu
// btn.addEventListener("contextmenu", () => {
//   alert("Salom context menu");
// });

// let div = document.querySelector("div");

// div.addEventListener("mouseenter", () => {
//   console.log("Mishka kirdi");
//   div.style.backgroundColor = "blue";
// });

// div.addEventListener("mouseleave", () => {
//   console.log("Mishka chiqdi");
//   div.style.backgroundColor = "red";
// });

// div.addEventListener("mouseover", () => {
//   console.log("over");
// });

// div.addEventListener("mouseout", () => {
//   console.log("out");
// });

// let circle = document.querySelector(".circle");

// document.body.addEventListener("mousemove", (e) => {
//   console.log(e.target);
//   let x = e.clientX;
//   let y = e.clientY;
//   circle.style.top = y + "px";
//   circle.style.left = x + "px";
//   // let color = Math.random().toString(16).slice(2, 8);
//   // document.body.style.backgroundColor = "#" + color;
// });

// let form = document.querySelector("form");
// let ul = document.querySelector("ul");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let input = e.target[0];
//   let text = input.value;
//   if (!text) {
//     alert("Input bosh bolmasligi kerak");
//     return;
//   }
//   ul.innerHTML += "<li>" + text + "</li>";
//   // input.value = "";
//   e.target.reset();
// });

// document.body.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   console.log("context");
// });

// let input = document.querySelector("input");

// input.addEventListener("keydown", (e) => {
//   if (e.code === "KeyX" && e.altKey) {
//     alert("maxsus");
//   }
//   console.log("bosildi", e.key, e.code);
// });

// input.addEventListener("keyup", () => {
//   console.log("olindi");
// });

// document.querySelector("textarea").addEventListener("focus", (e) => {
//   console.log('focus berildi');
// });

// document.querySelector("textarea").addEventListener("blur", (e) => {
//   console.log('focus olindi');
// });
