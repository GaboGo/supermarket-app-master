class Card {
  constructor(item, index, total) {
    this.name = `${item.product_name} ${item.brands}`;
    this.features = [
      { name: "Quantity", value: item.quantity },
      { name: "Serving Size", value: item.serving_size }
    ];
    this.index = index;
    this.total = total;
    this.calories = item.energy_100g;
    this.id = item.code;
    this.photo = { src: item.image_url, alt: item.product_name };
  }

  render() {
    return `
    <article class="Card">
      <div class="Card__image-wrapper">
        <span class="Card__counter"> ${this.index}/${this.total} </span>
        <img class="Card__image" src="${this.photo.src || ''}" alt="${this.photo.alt}" />
      </div>
      <div class="Card__textbox">
        <h1 class="Card__title">${this.name}</h1>
        <div class="Card__feature">
          ${this.features.map(feature => feature.value && `
            <div class="Card__feature-term h3">${feature.name}</div>
            <div class="Card__feature-value">${feature.value}</div>
          `).join('')}
        </div>
        <span class="Card__calories">${this.calories} Calories</span>
      </div>
      <button class="Card__add-btn h3" id="${this.id}" onclick="document.getElementById(${this.id}).innerHTML='Added'" >Add</button>
    </article>`;
  }
}

export default Card
