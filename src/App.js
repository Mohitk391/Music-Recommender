import React, { useState } from "react";
import "./styles.css";

var musicGenreList = {
  Rock: [
    {
      name: "Thunderstruck",
      rating: "4/5",
      description: "By AC/DC"
    },
    {
      name: "Bohemian Rhapsody",
      rating: "4.5/5",
      description: "By Queens"
    }
  ],
  Romantic: [
    {
      name: "Nazm Nazm",
      rating: "3.5/5",
      description: "By Ayushmann Khurrana"
    },
    {
      name: "Qaafirana",
      rating: "3.5/5",
      description: "By Arijit Singh"
    }
  ],

  Pop: [
    {
      name: "Don't wanna know",
      rating: "4/5",
      description: "By Maroon 5"
    },
    {
      name: "Stay",
      rating: "3.5/5",
      description: "By  The Kid LAROI and Justin Bieber"
    },
    {
      name: "Uptown Funk",
      rating: "4/5",
      description: "By Bruno Mars"
    },
    {
      name: "Despacito",
      rating: "3/5",
      description: "By Luis Fonsi"
    }
  ],

  Sad: [
    {
      name: "Happier",
      rating: "4/5",
      description: "By Marshmello"
    },
    {
      name: "DeathBed(Coffee For Your Head)",
      rating: "3/5",
      description: "By Powfu"
    }
  ]
};

var genres = Object.keys(musicGenreList);

export default function App() {
  const [musicReader, setMusicReader] = useState("Rock");

  function musicListHandler(genre) {
    setMusicReader(genre);
    console.log(genre);
    //console.log(musicGenreList[genre]);
  }

  return (
    <div className="App">
      <h2>🎵 Music Recommender</h2>
      <p>
        <small>
          Check out some of the music I like. Select the genre to know about
          songs based on that genre.
        </small>
      </p>
      <ul>
        {genres.map((genre) => {
          return (
            <li key={genre} onClick={() => musicListHandler(genre)}>
              {genre}
            </li>
          );
        })}
      </ul>
      <hr />
      <ul>
        {musicGenreList[musicReader].map((song) => {
          return (
            <li key={song.name} style={{}}>
              <div
                style={{
                  fontFamily: "Josefin Sans",
                  fontSize: "larger",
                  fontWeight: "bold"
                }}
              >
                {song.name}
              </div>
              <div style={{ fontSize: "small" }}>{song.rating}</div>
              <div style={{ fontStyle: "italic" }}>{song.description}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
