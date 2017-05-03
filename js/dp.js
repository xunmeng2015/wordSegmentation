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
			console.log(JSON.stringify(data[0][1]));
			$.each(data[0], function(index){
				$table = "<p>句子：" + arr_text[index] + "</p><p>结果：</p><table border='1'><tr class='id'><th>id</th></tr><tr class='cont'><th>词语</th></tr><tr class='pos'><th>词性</th></tr><tr class='parent'><th>父亲节点id</th></tr><tr class='relate'><th>对应关系</th></tr></table>";
				$(".result").append($table);
				$.each($(this), function(index){
//					console.log($(this)[0]);
					$(".id").append("<td>" + $(this)[0].id + "</td>");
					$(".cont").append("<td>" + $(this)[0].cont + "</td>");
					$(".pos").append("<td>" + $(this)[0].pos + "</td>");
					$(".parent").append("<td>" + $(this)[0].parent + "</td>");
					$(".relate").append("<td>" + $(this)[0].relate + "</td>");
				});
			});
		},
		error:function(err){
			console.log(err);
		}
	});
})
