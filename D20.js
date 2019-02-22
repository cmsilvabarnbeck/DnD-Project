var stats = [];

function rollDice() {  

  for (numRolls = 0; numRolls < 6; numRolls++){
      stats.push(Math.floor(Math.random() * 20)+1);
    }
    document.write("Strength: "+stats[0]+"<br>Dexterity: "+stats[1]+"<br>Intelligence: "+stats[2]+"<br>Wisdom: "+stats[3]+"<br>Constitution: "+stats[4]+"<br>Charisma: "+stats[5]);
    return false;
  }
