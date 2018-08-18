// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(characters);
  });

  // Create New friends
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var friendMatch = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    friendMatch.routeName = friendMatch.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(friendMatch);
  
    res.json(newcharacter);
  });
  