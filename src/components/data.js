const moviesData = [
  {
    id: 823464,
    title: "Godzilla x Kong: The New Empire",
    description:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/1hUTqPnfTvuupk7XW7WCkWYW4M1.jpg",
    rating: 6.7,
  },
  {
    id: 1011985,
    title: "Kung Fu Panda 4",
    description:
      "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    rating: 6.735,
  },
  {
    id: 359410,
    title: "Road House",
    description:
      "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
    rating: 7.12,
  },
  {
    id: 935271,
    title: "After the Pandemic",
    description:
      "Set in a post-apocalyptic world where a global airborne pandemic has wiped out 90% of the Earth's population and only the young and immune have endured as scavengers. For Ellie and Quinn, the daily challenges to stay alive are compounded when they become hunted by the merciless Stalkers.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/p1LbrdJ53dGfEhRopG71akfzOVu.jpg",
    rating: 5.375,
  },
  {
    id: 634492,
    title: "Madame Web",
    description:
      "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
    rating: 5.657,
  },
  {
    id: 693134,
    title: "Dune: Part Two",
    description:
      "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    rating: 8.4,
  },
  {
    id: 763215,
    title: "Damsel",
    description:
      "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/AgHbB9DCE9aE57zkHjSmseszh6e.jpg",
    rating: 7.137,
  },
  {
    id: 856289,
    title: "Creation of the Gods I: Kingdom of Storms",
    description:
      "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
    rating: 6.846,
  },
  {
    id: 940551,
    title: "Migration",
    description:
      "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
    rating: 7.531,
  },
  {
    id: 873972,
    title: "Hunters",
    description:
      "As John T. Wrecker continues his task of protecting a group of refugees from a virus, the threat of something new and even more dangerous grows ever closer in the form of monstrous mutants.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/3UKlVa1CBeQkRksHV5OfFTO52qd.jpg",
    rating: 5.3,
  },
  {
    id: 601796,
    title: "Alienoid",
    description:
      "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
    rating: 7.063,
  },
  {
    id: 437342,
    title: "The First Omen",
    description:
      "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/jT6awzVlAf0ZOoXbWhIXu1y5sDu.jpg",
    rating: 7,
  },
  {
    id: 1181548,
    title: "Heart of the Hunter",
    description:
      "A retired assassin is pulled back into action when his friend uncovers a dangerous conspiracy at the heart of the South African government.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/n726fdyL1dGwt15bY7Nj3XOXc4Q.jpg",
    rating: 5.833,
  },
  {
    id: 1096197,
    title: "No Way Up",
    description:
      "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
    rating: 6.301,
  },
  {
    id: 940721,
    title: "Godzilla Minus One",
    description:
      "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
    rating: 7.857,
  },
  {
    id: 984324,
    title: "The Wages of Fear",
    description:
      "When an explosion at an oil well threatens hundreds of lives, a crack team is called upon to make a deadly desert crossing with nitroglycerine in tow.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/jFK2ZLQUzo9pea0jfMCHDfvWsx7.jpg",
    rating: 5.917,
  },
  {
    id: 438631,
    title: "Dune",
    description:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 7.79,
  },
  {
    id: 399566,
    title: "Godzilla vs. Kong",
    description:
      "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
    rating: 7.625,
  },
  {
    id: 624091,
    title: "Sri Asih",
    description:
      "Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg",
    rating: 6.243,
  },
  {
    id: 969492,
    title: "Land of Bad",
    description:
      "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
    posterURL:
      "https://image.tmdb.org/t/p/w1280/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg",
    rating: 7.101,
  },
];

export default moviesData;
/*
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

"https://image.tmdb.org/t/p/w1280"

"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

*/
