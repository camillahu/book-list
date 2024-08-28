import Books from './Books'

function App() {
  const SarahJMaas = [
    {id: 1, title: "A Court of Thorns and Roses", releaseYear: 2015, genres: "Fantasy, Romance, New Adult"},
    {id: 2, title: "A Court of Mist and Fury", releaseYear: 2016, genres: "Fantasy, Romance, New Adult"},
    {id: 3, title: "A Court of Wings and Ruin", releaseYear: 2017, genres: "Fantasy, Romance, New Adult"},
    {id: 4, title: "A Court of Frost and Starlight", releaseYear: 2018, genres: "Fantasy, Romance, New Adult"},
    {id: 5, title: "A Court of Silver Flames", releaseYear: 2021, genres: "Fantasy, Romance, New Adult"},
    {id: 6, title: "Throne of Glass", releaseYear: 2012, genres: "Fantasy, Young Adult, Adventure"},
    {id: 7, title: "Crown of Midnight", releaseYear: 2013, genres: "Fantasy, Young Adult, Adventure"},
    {id: 8, title: "Heir of Fire", releaseYear: 2014, genres: "Fantasy, Young Adult, Adventure"},
    {id: 9, title: "Queen of Shadows", releaseYear: 2015, genres: "Fantasy, Young Adult, Adventure"},
    {id: 10, title: "Empire of Storms", releaseYear: 2016, genres: "Fantasy, Young Adult, Adventure"},
    {id: 11, title: "Tower of Dawn", releaseYear: 2017, genres: "Fantasy, Young Adult, Adventure"},
    {id: 12, title: "Kingdom of Ash", releaseYear: 2018, genres: "Fantasy, Young Adult, Adventure"},
    {id: 13, title: "The Assassin's Blade", releaseYear: 2014, genres: "Fantasy, Young Adult, Adventure"},
    {id: 14, title: "House of Earth and Blood", releaseYear: 2020, genres: "Fantasy, Urban Fantasy, New Adult"},
    {id: 15, title: "House of Sky and Breath", releaseYear: 2022, genres: "Fantasy, Urban Fantasy, New Adult"},
    {id: 16, title: "House of Flame and Shadow", releaseYear: 2024, genres: "Fantasy, Urban Fantasy, New Adult"}
  ];

  const LeighBardugo = [
    {id: 1, title: "Shadow and Bone", releaseYear: 2012, genres: "Fantasy, Young Adult"},
    {id: 2, title: "Siege and Storm", releaseYear: 2013, genres: "Fantasy, Young Adult"},
    {id: 3, title: "Ruin and Rising", releaseYear: 2014, genres: "Fantasy, Young Adult"},
    {id: 4, title: "Six of Crows", releaseYear: 2015, genres: "Fantasy, Young Adult, Heist"},
    {id: 5, title: "Crooked Kingdom", releaseYear: 2016, genres: "Fantasy, Young Adult, Heist"},
    {id: 6, title: "King of Scars", releaseYear: 2019, genres: "Fantasy, Young Adult"},
    {id: 7, title: "Rule of Wolves", releaseYear: 2021, genres: "Fantasy, Young Adult"},
];

  return (
    <>
    <h2 className="main-header">Books I've read and enjoyed</h2>
    <div className="lists-container">
      <Books author= "Sarah J. Maas" books= {SarahJMaas} />
      <Books author= "Leigh Bardugo" books= {LeighBardugo} />
    </div>
    </>
  )
}

export default App
