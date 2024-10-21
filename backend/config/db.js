const mongoose = require("mongoose");
const Player = require("../models/player");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/fantasy_game");
    console.log("Connected to MongoDB");

    // Add dummy players if the collection is empty
    const count = await Player.countDocuments();
    if (count === 0) {
      const dummyPlayers = [
        { name: "Player One", points: 50 },
        { name: "Player Two", points: 60 },
        { name: "Player Three", points: 70 },
        { name: "Player Four", points: 55 },
        { name: "Player Five", points: 65 },
        { name: "Player Six", points: 80 },
        { name: "Player Seven", points: 75 },
        { name: "Player Eight", points: 90 },
        { name: "Player Nine", points: 85 },
        { name: "Player Ten", points: 95 },
        { name: "Player Eleven", points: 40 },
        { name: "Player Twelve", points: 45 },
        { name: "Lionel Messi", points: 95 },
        { name: "Cristiano Ronaldo", points: 90 },
        { name: "Neymar Jr.", points: 85 },
        { name: "Kylian Mbappé", points: 92 },
        { name: "Kevin De Bruyne", points: 88 },
        { name: "Virgil van Dijk", points: 87 },
        { name: "Sadio Mané", points: 84 },
        { name: "Mohamed Salah", points: 89 },
        { name: "Harry Kane", points: 86 },
        { name: "Luka Modrić", points: 82 },
        { name: "Kante N’Golo", points: 80 },
        { name: "Karim Benzema", points: 91 },
        { name: "Son Heung-min", points: 83 },
        { name: "Raheem Sterling", points: 79 },
        { name: "Gareth Bale", points: 78 },
        { name: "Antoine Griezmann", points: 81 },
        { name: "Bruno Fernandes", points: 84 },
        { name: "Ederson", points: 75 },
        { name: "Alisson Becker", points: 76 },
        { name: "Marcus Rashford", points: 77 },
      ];

      await Player.insertMany(dummyPlayers);
      console.log("Dummy players added");
    }
  } catch (error) {
    console.error("MongoDB connection error: ", error);
  }
}

connectToDatabase();

module.exports = mongoose;
