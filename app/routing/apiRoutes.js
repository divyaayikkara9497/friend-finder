var path = require("path");

var friends = require("../data/friends")
//console.log(friends);

module.exports = function(app){
	//console.log("Hellooo");

	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post("/api/friends" , function(req, res){

		var data = req.body;
		var userName = data.name;
		var userPhoto = data.photo;
		var userScores = data.score;

		var match = {
			name: '',
			photo: '',
			total: 1000
		};

		var difference = 0;

		for (var i = 0; i < friends.length; i++){
			//console.log(friends[i].name);
			for (var j = 0; j < friends[i].score[j]; j++){
				difference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].score[j]));
				if (difference <= match.total) {
					match.name = friends[i].name;
					match.photo = friends[i].photo;
					match.total = difference;
				}
			}
		}

		console.log(data);
		console.log(match);

		friends.push(data);

		res.json(match);

	})
}

