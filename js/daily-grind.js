//alert("can you see this?");

/*Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page. 

pic - the scr of the coffee
alt - the alt tag for the coffee pic
desc - a description of the coffee
color - the color associated with the coffee
day - the day of the week for the coffee
name - the name of the coffee
*/
function coffeeTemplate(coffee) {
  return `
<p>
    <img
        src="${coffee.pic}"
        alt="${coffee.pic}"
        id="coffee"
        />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily
    coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}!
    </p>

    `;
}
let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = {
  name: "Bubble Tea",
  pic: "image/bubble-tea.jpg",
  alt: "a picture of bubble tea",
  color: "pink",
  day: "Tuesday",
  desc: "I like bubble tea",
};

switch (myDay) {
  case 0:
    today = "Sunday";
    coffee = {
      name: "Cold Brew",
      pic: "image/cold-brew.jpg",
      alt: "a picture of cold brew",
      color: "brown",
      day: "Sunday",
      desc: "I like cold brew",
    };
    break;

  case 1:
    today = "Monday";
    coffee = {
      name: "Caramel Latte",
      pic: "image/caramel-latte.jpg",
      alt: "a picture of caramel latte",
      color: "beige",
      day: "Monday",
      desc: "I like caramel latte",
    };
    break;

  case 2:
    today = "Tuesday";
    coffee = {
      name: "Bubble Tea",
      pic: "image/bubble-tea.jpg",
      alt: "a picture of bubble tea",
      color: "pink",
      day: "Tuesday",
      desc: "I like bubble tea",
    };
    break;

  case 3:
    today = "Wednesday";
    coffee = {
      name: "Frappacino",
      pic: "image/frappacino.jpg",
      alt: "a picture of frappacino",
      color: "pink",
      day: "Wednesday",
      desc: "I like frappacino",
    };
    break;

  case 4:
    today = "Thursday";
    coffee = {
      name: "Drip Coffee",
      pic: "image/drip.jpg",
      alt: "a picture of drip coffee",
      color: "black",
      day: "Thursday",
      desc: "I like drip coffee",
    };
    break;

  case 5:
    today = "Friday";
    coffee = {
      name: "Pumpkin Spice Latte",
      pic: "image/pumpkin-spice-latte.jpg",
      alt: "a picture of pumpkin spice latte",
      color: "orange",
      day: "Friday",
      desc: "I like pumpkin spice latte",
    };
    break;

  case 6:
    today = "Saturday";
    coffee = {
      name: "Mocha",
      pic: "image/mocha.jpg",
      alt: "a picture of mocha",
      color: "brown",
      day: "Saturday",
      desc: "I like mochas",
    };
    break;

  default:
    today = "something went wrong";
}

//places our coffee object on the page
document.gitElementByID("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;
