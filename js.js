var word = "bottles";
var word2 = "bottle";
var count = prompt("How many bottle of beer?");
if (count == 1) {
	console.log(count + " " + word2 + " of beer on the wall,");
	console.log(count + " " + word2 + " of beer,");
	console.log("take it down, pass it around,");
	console.log("Oh CRAP!")
	console.log("WE NEED MORE BEEEEEEERRRRRRRR!!!!!!!!")
}

if (count > 1)
for (drank = 1; drank < count; drank++) {
	console.log(count + " " + word + " of beer on the wall,");
	console.log(count + " " + word + " of beer,");

	if (drank == 1 || count == 1){
	console.log("Take " + drank + " down, pass it around,");
	count = count - drank;
	console.log(count + " " + word + " of beer on the wall.");
	}
	else if (drank > 1 ) {
		console.log("Take " + drank + " down, pass them around,");
		count = count - drank;
		console.log(count + " " + word + " of beer on the wall.");
	}
}

if (count == drank || count >=  2) {
		console.log(count + " " + word + " of beer on the wall,");
		console.log(count + " " + " bottle of beer,");
		console.log("Take " + (count -1) + " down, drinks all around,");
		count = 1;
		console.log(count + " " +  word2 + " of beer on the wall.");
}

var count = 1 
	console.log(count + " " + word2 + " of beer on the wall,");
	console.log(count + " " + word2 + " of beer,");
	console.log("take it down, pass it around,");
	console.log("Oh CRAP!")
	console.log("WE NEED MORE BEEEEEEERRRRRRRR!!!!!!!!")
