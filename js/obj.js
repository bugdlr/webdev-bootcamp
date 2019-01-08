movieDB = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
  }
];


movieDB.forEach(function(movie) {
  let result = "You have "
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not watched ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result);
})
