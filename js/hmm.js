var change = {				//转移矩阵
	"bear":[0,0,0,10,43,0],
	"is":[0,10065,0,0,0,0],
	"move":[0,0,0,36,133,0],
	"on":[0,0,5484,0,0,0],
	"president":[0,0,0,382,0,0],
	"progress":[0,0,0,108,4,0],
	"the":[69016,0,0,0,0,0],
	".":[0,0,0,0,0,48809]
};

var shot = {				//发射矩阵
	"AT":[0,0,0,48636,0,19],
	"BEZ":[1973,0,426,187,0,38],
	"IN":[43322,0,1325,17314,0,185],
	"NN":[1067,3720,42470,11773,614,21392],
	"VB":[6072,42,4758,1476,129,1522],
	"PERIOD":[8016,75,4656,1329,954,0]
};

var shot_name = ["AT", "BEZ", "IN", "NN", "VB", "PERIOD"];		//对应的词性
var first = [0.2, 0.1, 0.1, 0.2, 0.3, 0.1];

var text = "the bear is on the move .";		//需要分析的文本
//text.replace("./g", " .");
console.log(text);
var text_array = text.split(" ");

var result = [];			//最终的结果
var p = [];

for(var i = 0; i < text_array.length; i++){		//开始对文本进行分析
	var temp = 0;
	var max_index = 0;
	var count = 0;
	var count_s = 0;
	if(i == 0){		//分析第一个单词
		for(var j = 0; j < change[text_array[i]].length; j++){
			if (change[text_array[i]][j] + 1 > temp){
				max_index = j;
				temp = change[text_array[i]][j] + 1;
			}
			count = count + change[text_array[i]][j] + 1;
		}
		result.push(shot_name[max_index]);
		p.push((temp/count*first[0]).toFixed(8));
		for(var k = 0; k < 6; k++){
			if(max_index == k){
				$("#" + shot_name[k]).append("<td class='result'>" + ((change[text_array[i]][k] + 1)/count*first[0]).toFixed(8) + "</td>");
			}
			else{
				$("#" + shot_name[k]).append("<td>" + ((change[text_array[i]][k] + 1)/count*first[0]).toFixed(8) + "</td>");
			}
		}
	}
	
	else{			//分析后面的单词
		for(var j = 0; j < change[text_array[i]].length; j++){		//转移矩阵
			if ((change[text_array[i]][j] + 1) * (shot[result[i - 1]][j] + 1) > temp){
				max_index = j;
				temp = (change[text_array[i]][j] + 1) * (shot[result[i - 1]][j] + 1);
			}
			count = count + change[text_array[i]][j] + 1;
			count_s = count_s + shot[result[i - 1]][j] + 1;
		}
		for(var k = 0; k < 6; k++){
			if(max_index == k){
				$("#" + shot_name[k]).append("<td class='result'>" + ((change[text_array[i]][k] + 1) * (shot[result[i - 1]][k] + 1)/(count * count_s)*p[i-1]).toFixed(8) + "</td>")
			}
			else{
				$("#" + shot_name[k]).append("<td>" + ((change[text_array[i]][k] + 1) * (shot[result[i - 1]][k] + 1)/(count * count_s)*p[i-1]).toFixed(8) + "</td>")
			}
			}
		result.push(shot_name[max_index]);
		p.push((temp/(count * count_s) * p[i - 1]).toFixed(8));
	}
}

$("#sign").val(result);
//console.log(text_array);
console.log(result);
//console.log(p);
//document.getElementById("AT");