 $(document).ready(function(){
	 var href=$('.text_href').val();
	 var id=$('.text_order').val();
	 var interval=5000;
	 var times=1;
	 var o=self.setInterval(show,interval);//
	 function show(){
		 $
			.ajax({
				type : "get", // 提交方式
				url : href+"/order/requestResult.html",// 路径
				data : {
					id : id
				},// 数据，这里使用的是Json格式进行传输
				success : function(
						result) {
					var obj = eval('(' + result + ')');
					if(obj.success){
						window.clearInterval(o);
						window.location.href=href+"/order/paysuccess.html"; 
					}else{
						if(times<=10){
							window.clearInterval(o);						
							/*interval=interval+5000*times;*/
							times++;
							o=self.setInterval(show,interval);
						}else{
							window.clearInterval(o);
						}
						
					}
					
					
				}
			});
		}
	  
 });