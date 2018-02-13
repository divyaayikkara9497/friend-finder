var path = require("path");

var friends = require("../data/friends")
//console.log(friends);

module.exports = function(app){
	//console.log("Hellooo");

	app.get("api/friends", function(req, res){
		res.json(friends);
	});

	app.post("api/friends" , function(req, res){
		var userInput = req.body;
		
		var userResponses = userInput.scores

		var match = "";
		var img = "";
		var total = 1000;

		for(var i = 0; i < friends.length; i++){
			var difference = 0;
			for (var j = 0; j < userResponses.length; j++){
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			console.log("diff = " + diff);

			if (diff < total) {
				total = diff;
				match = friends[i].name;
				img = freinds[i].photo;
			}
		}
		friends.push(userInput);
		res.json({status: "OK", match: match, img: img})
	})
}

