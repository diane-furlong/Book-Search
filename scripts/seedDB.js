const mongoose = require('mongoose')
const db = require('../models')

//insert the books below
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/booksearch'
)

const bookSeed = [
    {
        title: "Untamed",
        author: "Glennon Doyle",
        synopsis:
          "And it is the story of how each of us can begin to trust ourselves enough to set boundaries, make peace with our bodies, honor our anger and heartbreak, and unleash our truest, wildest instincts so that we become women who can finally look ...",
        date: new Date(Date.now())
      },
      {
        title: "Ready Player One",
        author: "Ernest Cline",
        synopsis:
          "It's the year 2044, and the real world is an ugly place. Like most of humanity, Wade Watts escapes his grim surroundings by spending his waking hours jacked into the OASIS, a sprawling virtual utopia that lets you be anything you want to be, a place where you can live and play and fall in love on any of ten thousand planets.",
        date: new Date(Date.now())
      },
      {
        title: "Lord of the Flies",
        author: "William Golding",
        synopsis:
          "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
        date: new Date(Date.now())
      },
      {
        title: "Lord of the Flies",
        author: "William Golding",
        synopsis:
          "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
        date: new Date(Date.now())
      },
      {
        title: "Lord of the Flies",
        author: "William Golding",
        synopsis:
          "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
        date: new Date(Date.now())
      },
      {
        title: "Lord of the Flies",
        author: "William Golding",
        synopsis:
          "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
        date: new Date(Date.now())
      },
      {
        title: "Lord of the Flies",
        author: "William Golding",
        synopsis:
          "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
        date: new Date(Date.now())
      },
      {
        title: "Lord of the Flies",
        author: "William Golding",
        synopsis:
          "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
        date: new Date(Date.now())
      }
]