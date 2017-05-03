var s = {
	"S":[{
		"NEXT":["NP", "VP"],
		"PER":1.0
	}],
	"VP":[{
		"NEXT":["V", "NP"],
		"PER":0.6
	}, {
		"NEXT":["V", "NP", "PP"],
		"PER":0.4
	}],
	"NP":[{
		"NEXT":["NP, NP"],
		"PER":0.1
	},{
		"NEXT":["NP", "PP"],
		"PER":0.2
	},{
		"NEXT":["N"],
		"PER":0.7
	}],
	"PP":[{
		"NEXT":"P",
		"PER":1.0
	}]
};

var word = {
	"people":{
		"N":0.5,
		"V":0.1
	},
	"fish":{
		"N":0.2,
		"V":0.6
	},
	"tanks":{
		"N":0.2,
		"V":0.3
	},
	"with":{
		"P":1.0
	},
	"rods":{
		"N":0.1,
	}
};
//var VP = 
console.log(word.people);

var text = "people fish tanks with rods";
var arr_text = text.split(" ");
console.log(arr_text.length);

var result = [];
var backup = [];
backup.push(1);
backup.push(2);

var arr_start = s.S[0].NEXT;
console.log(arr_start[0]);

console.log(backup.pop());
console.log(backup.pop());

var a = "S";

a.replace("S", s.S[0].NEXT.toString());
console.log(s.S[0].NEXT.toString());

for(var i = 0;  i < arr_text.length; i++){
	if(i == 0){
		
	}
}

