(function(){
	$("#confirmBindCard").click(function(){
		var bindCardUrl = __ctxPath + "/card/addQuickCard";
		var data = $("#cardForm").serialize();
		
		function e(data){
			alert("绑定成功");
		}
		$.post(bindCardUrl, data, e, "json");
	})
})();