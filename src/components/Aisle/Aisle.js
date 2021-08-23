class Aisle {
  constructor(items, title) {
    this.items = items
    this.title = title
  }

  render() {
    return `
    <section class="Aisle">
      <h1 class="Aisle__title h2">${this.title}</h1>
      <ol class="Aisle__list">
        ${this.items.map((item, index) => `
          <li class="Aisle__item">
            ${item.render()}
          </li>
        `).join('')}
      </ol>
    </section>`;
  }
}

export default Aisle
