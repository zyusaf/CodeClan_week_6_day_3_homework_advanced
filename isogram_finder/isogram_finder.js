const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {

    const string = this.word.toLowerCase();
    const letters = string.split('');

    return letters.every((value, index) => letters.indexOf(value) === index)

};

module.exports = IsogramFinder;


// An isogram is a word, phrase or sentence that does not contain any repeated letters. "Orange" is an isogram but "Banana" is not.

// Given a word, phrase or sentence you should be able to determine whether or not it is an isogram. That is, you should be able to determine whether every letter is unique.