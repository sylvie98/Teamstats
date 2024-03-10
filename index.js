const team = {};

team._players = [];
team._games = [];


team._players.push({
    firstName: 'John',
    lastName: 'Doe',
    age: 25
}, {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 30
}, {
    firstName: 'Mike',
    lastName: 'Johnson',
    age: 28
});

team._games.push({
    opponent: 'Lakers',
    teamPoints: 90,
    opponentPoints: 85
}, {
    opponent: 'Knicks',
    teamPoints: 95,
    opponentPoints: 100
}, {
    opponent: 'Bulls',
    teamPoints: 110,
    opponentPoints: 105
});


team.players = function() {
    return this._players;
};

team.games = function() {
    return this._games;
};

team.addPlayer = function(newFirstName, newLastName, newAge) {
    const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
    };
    this._players.push(newPlayer);
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players());

team.addGame = function(newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
    };
    this._games.push(newGame);
};

team.addGame('Titans', 100, 98);
console.log(team.games());