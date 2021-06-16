const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {

  const string = this.phrase.toLowerCase();
  const result = this.alphabet.every((letter) => {
    return string.includes(letter);
  });

  return result;
}

module.exports = PangramFinder;
