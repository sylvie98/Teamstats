//this is team status
const team = {
    _players: [
        {
            firstame:'delphine',
            lastname:'Alain',
            age:19,
        },
       { 
          firstName: "Alice",
          lastName: "Smith",
          age: 30
       }, 
       {
         firstName: "Bob",
         lastName: "Johnson",
         age: 28
       },
    ],
    _games: [
        {
            opponent: "Team A",
            teamPoints: 90,
            opponentPoints: 60
          },
          {
            opponent: "Team B",
            teamPoints: 80,
            opponentPoints: 70
          },
          {
            opponent: "Team C",
            teamPoints: 70,
            opponentPoints: 75
          }
    ],
    get player() {
      return this._players;
  },
    get games(){
        return this._games;
    }

};
team.addPlayer = function(newFirstName, newLastName, newAge) {
  const players = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
  };
  this._players.push(players);
};
team.addgame=function(newOpponent,newTeamPoints,newOpponentPoints){
  const games= {
    opponent:newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  };
  this._games.push(games);
}

team.addPlayer('bugs', 'bunny', 76);
team.addgame('Titans',100,98);
console.log(team.player)
console.log(team.games);
//console.log(team);