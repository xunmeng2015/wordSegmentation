$(function(){
	$(".ana").click(function(){
	$(".result").html("");
	var text = $(".text").val();
	if(text == ""){
		alert("请输入需要分析的句子");
		return false;
	}
	var arr_text = text.split("。");
	$.ajax({
		type:"get",
		url:"http://api.ltp-cloud.com/analysis/?api_key=YourApiKey&text=" + text + "&pattern=dp&format=json&api_key=n1a1P3P1I3rVZT3VNQLpVU7MLsTWWq6kFHkCvFsM",
		async:false,
		dataType:"jsonp",
		success:function(data){
			console.log(JSON.stringify(data[0]));
			$.each(data[0], function(index){
				$table = "<p>句子：" + arr_text[index] + "</p><p>结果：</p><table border='1'><tr class='"+index+"_id'><th>id</th></tr><tr class='"+index+"_cont'><th>词语</th></tr><tr class='"+index+"_pos'><th>词性</th></tr><tr class='"+index+"_parent'><th>父亲节点id</th></tr><tr class='"+index+"_relate'><th>对应关系</th></tr></table>";
				$(".result").append($table);
				var dd = [];
				var par = [];
				$.each($(this), function(){
					dd.push($(this)[0]);
					if(par.indexOf($(this)[0].parent) == -1){
						par.push($(this)[0].parent);
					}
//					console.log($(this)[0]);
					$("."+index+"_id").append("<td>" + $(this)[0].id + "</td>");
					$("."+index+"_cont").append("<td>" + $(this)[0].cont + "</td>");
					$("."+index+"_pos").append("<td>" + $(this)[0].pos + "</td>");
					$("."+index+"_parent").append("<td>" + $(this)[0].parent + "</td>");
					$("."+index+"_relate").append("<td>" + $(this)[0].relate + "</td>");
				});
				console.log(par);
				parse_data(dd, par);
			});
		},
		error:function(err){
			console.log(err);
		}
	});
	
	function parse_data(dd, par){

		
//		var a = [];
//		dd.sort(function(a, b){
//			return a.parent - b.parent;
//		});
//		var a = [];
//		$.each(dd, function() {
//			if($(this)[0].parent == -1){
//				a.push({
//					id:$(this)[0].id,
//					name:$(this)[0].cont,
//					value:6,
//					children:[]
//				});
//				dd.splice($(this));
//				$.each(dd, function() {
//					
//				});
//			}else{
//				
//			}
//		});
	}
//	var a = [];
//	a.push({
//		name:"a",
//		value:6,
//		children:[{
//			name:"a",
//			value:4,
//			children:[]
//		},{
//			name:"b",
//			value:6,
//			children:[]
//		}]
//	});
//	a[0].children.push({
//		name:"c",
//		value:6,
//		children:[]
//	});
//	console.log(a[0].children.length);
//	console.log(a[0].children);
//	console.log(dd);
});

});
