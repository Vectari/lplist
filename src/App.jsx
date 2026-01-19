import "./App.css";

const vinyls = [
  {
    id: 1,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/LornaShorePainRemains.jpg/250px-LornaShorePainRemains.jpg",
    artist: "Lorna Shore",
    title: "Pain Remains",
  },
  {
    id: 2,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/I_Feel_the_Everblack_Festering_Within_Me.jpg/250px-I_Feel_the_Everblack_Festering_Within_Me.jpg",
    artist: "Lorna Shore",
    title: "I Feel the Everblack Festering Within Me",
  },
  {
    id: 3,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/LornaShoreAIRTN.jpg/250px-LornaShoreAIRTN.jpg",
    artist: "Lorna Shore",
    title: "...And I Return to Nothingness",
  },
  {
    id: 4,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Ordinary_Corrupt_Human_Love.jpg/250px-Ordinary_Corrupt_Human_Love.jpg",
    artist: "Deafheaven",
    title: "Ordinary Corrupt Human Love",
  },
  {
    id: 5,
    priority: "medium",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Lonely_People_with_Power_Deafheaven_album_cover.jpg/250px-Lonely_People_with_Power_Deafheaven_album_cover.jpg",
    artist: "Deafheaven",
    title: "Lonely People with Power",
  },
  {
    id: 6,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Slipknot_-_Vol._3-_%28The_Subliminal_Verses%29.jpg/250px-Slipknot_-_Vol._3-_%28The_Subliminal_Verses%29.jpg",
    artist: "Slipknot",
    title: "Vol. 3: (The Subliminal Verses)",
  },
  {
    id: 7,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Slipknot_-_Slipknot2.jpg/250px-Slipknot_-_Slipknot2.jpg",
    artist: "Slipknot",
    title: "Slipknot",
  },
  {
    id: 8,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Slipknot_Iowa.jpg/250px-Slipknot_Iowa.jpg",
    artist: "Slipknot",
    title: "Iowa",
  },
  {
    id: 9,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/All_Hope_is_Gone_%28original%29.jpg/250px-All_Hope_is_Gone_%28original%29.jpg",
    artist: "Slipknot",
    title: "All Hope Is Gone",
  },
  {
    id: 10,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/5_The_Gray_Chapter_Artwork.jpg/250px-5_The_Gray_Chapter_Artwork.jpg",
    artist: "Slipknot",
    title: ".5: The Gray Chapter",
  },
  {
    id: 11,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Slipknot_-_We_Are_Not_Your_Kind.png/250px-Slipknot_-_We_Are_Not_Your_Kind.png",
    artist: "Slipknot",
    title: "We Are Not Your Kind",
  },
  {
    id: 12,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Slipknottheend.jpg/250px-Slipknottheend.jpg",
    artist: "Slipknot",
    title: "The End, So Far",
  },
  {
    id: 13,
    priority: "high",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/SleepTokenTMBTE.jpg/250px-SleepTokenTMBTE.jpg",
    artist: "Sleep Token",
    title: "Take Me Back to Eden",
  },
  {
    id: 14,
    priority: "medium",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Even_in_Arcadia.jpg/250px-Even_in_Arcadia.jpg",
    artist: "Sleep Token",
    title: "Even in Arcadia",
  },
  {
    id: 15,
    priority: "medium",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/SleepTokenTPWBYT.jpg/250px-SleepTokenTPWBYT.jpg",
    artist: "Sleep Token",
    title: "This Place Will Become Your Tomb",
  },
];

function App() {
  return (
    <div className="container">
      <h3 className="left">Priorytet:</h3>
      <div className="legend_container">
        <div className="legend high">
          <p>Wysoki</p>
        </div>
        <div className="legend medium">
          <p>Średni</p>
        </div>
        <div className="legend low">
          <p>Niski</p>
        </div>
      </div>

      <h4 className="left">
        Kolory okładek i płyt, wydania specjalne/jubileuszowe to tylko kwestia
        ceny. Także jak kto woli :)
      </h4>

      <div className="vinyl-table">
        {vinyls.map((vinyl) => (
          <div className="vinyl-row" key={vinyl.id}>
            <div className={`priority ${vinyl.priority}`} />
            <img src={vinyl.cover} alt={vinyl.title} />
            <div className="text">
              <span className="artist">{vinyl.artist}</span>
              <span className="title">{vinyl.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
