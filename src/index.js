import Aisle from "./components/Aisle/Aisle.js";
import Card from "./components/Card/Card.js";
import { ApiUrl } from "./config/config.js";

async function fetchData(data) {
  try {
    const res = await fetch(ApiUrl);

    if(res.status >= 400) {
      console.log("server error ", res.status);
    }

    const json = await res.json();
    formatData(json, data, init);
  } catch (err) {
    console.log("error fetching data ", err);
  }
}

function formatData(data, array, callback) {
  const categories = [];
  data.map(elem => {
    if(elem.image_url == ""){return}
    let key =  elem.category !== "" && !elem.category.includes("-") ? elem.category : elem.subcategory;
    const object = {
       category: key,
       items: [elem]
    }
    if(categories.indexOf(key) === -1){
      categories.push(key);
      array.push(object);
    } else {
      array[categories.indexOf(key)].items.push(elem)
    }
  })
  callback(array.sort());
}

function init(data) {
  let itemsNumber = 0;
  let currentCategoryItems = 0;
  data.map(elem => {
    itemsNumber += elem.items.length;
    currentCategoryItems = elem.items.length;
    const cards = elem.items.map((item, index) => new Card(item, index + 1, currentCategoryItems));
    const aisle = new Aisle(cards, elem.category);
    renderApplication(document.querySelector("#shelves-app"), aisle.render());
  })
   renderApplication(document.querySelector("#items-number"), itemsNumber);
}

function addItem(e) {
  console.log(e)
}

function renderApplication(node, html) {
  node.innerHTML += html;
}

let foodData = [];
fetchData(foodData);

