function sendMobileCode() {
	$.ajax({
		url : '<%=path%>/uc/mobileCode',
		type : "POST",
		data : $("#phoneForm").serialize(),
		success : function(data) {
			if (data.rs == "1") {
				$("#sendMobileCode").hide();
			}
		}

	})
}