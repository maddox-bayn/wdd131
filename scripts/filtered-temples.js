
// Get the current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Get the last modified date
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;

// Hamburger menu functionality
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");

    menuButton.textContent = isOpen ? "✖" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
const templeContainer = document.querySelector("#temple-container");
console.log(templeContainer);

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Manhattan New York Temple",
    location: "Manhattan, New York, United State",
    dedicated: "2004, June, 13",
    area: 20630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
  },
  {
    templeName: "San Antonio Texas Temple",
    location: "San Antonio, Texas, United State",
    dedicated: "2005, May, 22",
    area: 16800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-antonio-texas-temple/san-antonio-texas-temple-55647-main.jpg"
  }
];

function displayTemples(temples) {

    // Clear existing cards
    templeContainer.innerHTML = "";

    temples.forEach((temple) => {

        console.log(temple.templeName);

        const figure = document.createElement("figure");

        const img = document.createElement("img");

        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        const figcaption = document.createElement("figcaption");

        figcaption.textContent = temple.templeName;

        const locationName = document.createElement("p");
        locationName.textContent = temple.location;

        const dedicationDate = document.createElement("p");
        dedicationDate.textContent = temple.dedicated;

        const sqft = document.createElement("p");
        sqft.textContent = temple.area

        figure.append(img, figcaption, locationName, dedicationDate, sqft);
        templeContainer.appendChild(figure);
    });
}

// Calls the function immediately
displayTemples(temples);