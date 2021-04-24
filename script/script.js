class Character {
  constructor(char) {
    this.name = char.name;
    this.power = char.power;
    this.align = char.align;
  }

  get alignment() {
    return this.align;
  }
}

class Characters {
  constructor() {
    this.all = [];
  }

  add(char) {
    this.all.push(char);
  }

  search(name) {
    return this.all.filter(char => char.name.includes(name.trim().toLowerCase()));
  }

  fight() {
    let winner = this.all[0];
    this.all.forEach(char => {
      if (char.power > winner.power)
        winner = char;
    });
    return winner;
  }
}

function getData() {
    return fetch('../marvel.json')
      .then(response => response.json())
      .then(json => jsonToClass(json, new Characters()))
      .then(chars => console.log(chars.search('man')));
}
getData();

function jsonToClass(json, chars) {
  Object.keys(json).forEach(char => chars.add(json[char]));
  // Object.keys(json).forEach(char => console.log(json[char]));
  return chars;
}
