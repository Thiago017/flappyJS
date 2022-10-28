function newElement (tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

function barrier (reverse = false) {
  this.element = newElement('div', 'barrier');

  const border = newElement('div', 'border');
  const body = newElement('div', 'body');
  this.element.appendChild(reverse ? body : border);
  this.element.appendChild(reverse ? border : body);

  this.setHeight = height => body.style.height = `${height}px`;
}

function evenBarriers(height, opening, x) {
  this.element = newElement ('div', 'even-barriers');

  this.top = new barrier(true);
  this.botton = new barrier(false);

  this.element.appendChild(this.top.element);
  this.element.appendChild(this.botton.element);

  this.randomOpening = () => {
    const topHeight = Math.random() * (height - opening);
    const bottonHeight = height - opening - topHeight;
    this.top.setHeight(topHeight)
    this.botton.setHeight(bottonHeight)
  }

  this.getX = () => parseInt(this.element.style.left.split('px')[0]);
  this.setX = x => this.element.style.left = `${x}px`;
  this.getWidth = () => this.element.ClientWidht;

  this.randomOpening();
  this.setX(x);
}

const b = new evenBarriers(700, 200, 400);
document.querySelector('[wm-flappy]').appendChild(b.element);