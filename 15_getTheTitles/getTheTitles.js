const getTheTitles = function(books) {
    let array = Array.from(books);
    let arrayTitles = [];
    
    array.map((book) => {arrayTitles.push(book.title);});
    return arrayTitles;
};

    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
