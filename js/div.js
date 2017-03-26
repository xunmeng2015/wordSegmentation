$(function(){
	var len = 5;
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", "chineseDic1.txt", false);
	xmlhttp.send();
	var word = [];
	xmlhttp.responseText.replace(/.+/g, function(dic){
		word.push(dic.replace(new RegExp(",.*"), ""));
	});
	$(".up_divide").click(function(){				//正向匹配函数
		$(".analy").empty();
		var result = "";
		var text = $(".input").val();				//获取输入值
		var length = text.length;					//获取长度
		for(var i = 0; i <= length; i++){
			var data;
			for(var j = len; j >= 1; j--){			//切割文本
				if(i + j >= length){				//判断是否到边界
					data = text.substr(i, length);	
					j = length - i;
				}
				else{
					data = text.substr(i, j);
				}
//				console.log(text.substr(i, j) + " " + text.substr(i, j).length + " " + i + " " + j + "/" + length);
				$(".analy").append("<p>" + text.substr(i, j) + " " + (i + j) + "/" + length + "</p>");
				if(data.length == 0){
					continue;
				}
				else if(data.length == 1){				//只剩一个字符
					result = result + "/ " + data;
					$(".analy").append(data + " " + "----->输出");
					continue;
				}
				else{
					if($.inArray(data, word) != -1){	//判断是否子字典里面，如果是则跳转，否则继续循环
						result = result + "/ " + data;
						$(".analy").append(data + " " + "----->输出");
						i = i + data.length;
						j = len;
						continue;
					}
				}
			}
		}
		$(".output").val(new Date() + "\r\n" + "正向最大匹配算法分词结果如下：\r\n");
		$(".output").val($(".output").val() + result.substr(2) + "/");
	});
	
		
	$(".down_divide").click(function(){				//逆向匹配算法
		$(".analy").empty();
		var result = [];
		var text = $(".input").val();
		var length = text.length;
		for(var i = length; i >= 0; i--){
			var data;
			for(var j = len; j >= 1; j--){
				if(i - j < 0){
					data = text.substr(0, i);
					j = i;
				}
				else{
					data = text.substr(i - j, j);
				}
//				console.log(text.substr(i - j, j) + " " + text.substr(i - j, j).length + " " + (i - j) + "/" + length);
				$(".analy").append("<p>" + text.substr(i - j, j) + " " + i + "/" + length + "</p>");
				if(data.length == 0){
					continue;
				}
				else if(data.length == 1){
					result.push(data);
					console.log(data + " " + "----->输出");
					continue;
				}
				else{
					if($.inArray(data, word) != -1){
						result.push(data);
						console.log(data + " " + "----->输出");
						i = i - data.length;
						j = len;
						continue;
					}
				}
			}
		}
		var out = "";
		for(var i = result.length - 1; i >= 0; i--){
			out = out + " " + result[i] + "/";
		}
		$(".output").val(new Date() + "\r\n" + "逆向最大匹配算法分词结果如下：\r\n");
		$(".output").val($(".output").val() + out.substr(1));
	});

});

