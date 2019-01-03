$(document).ready(function() {

	var hh = document.documentElement.clientHeight;
	var ls = document.documentElement.clientWidth;
	if (ls < 640) {



		$(".select dt").click(function() {
			if ($(this).next("div").css("display") == 'none') {
				$(".theme-popover-mask").height(hh);
				$(".theme-popover").css("position", "fixed");
				$(this).next("div").slideToggle("slow");
				$(".select div").not($(this).next()).hide();
			}
          else{
          	$(".theme-popover-mask").height(0);
			$(".theme-popover").css("position", "static");
			$(this).next("div").slideUp("slow");;
          }

		})


		$(".eliminateCriteria").live("click", function() {
			$(".dd-conent").hide();
		})

		$(".select dd").live("click", function() {
			$(".theme-popover-mask").height(0);
			$(".theme-popover").css("position", "static");
			$(".dd-conent").hide();
		});
		$(".theme-popover-mask").live("click", function() {
			$(".theme-popover-mask").height(0);
			$(".theme-popover").css("position", "static");
			$(".dd-conent").hide();
		});

	}


	$("span.love").click(function() {
		$(this).toggleClass("active");
	});


	$("#select1 dd").click(function() {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectA").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));

			}
		}
	});

	$("#select2 dd").click(function() {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectB").remove();
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisB.attr("id", "selectB"));
			}
		}
	});

	$("#select3 dd").click(function() {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectC").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectC"));
			}
		}
	});

	$("#selectA").live("click", function() {
		$(this).remove();
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
	});

	$("#selectB").live("click", function() {
		$(this).remove();
		$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
	});

	$("#selectC").live("click", function() {
		$(this).remove();
		$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
	});

	$(".select dd").live("click", function() {
		if ($(".select-result dd").length > 1) {
			$(".select-no").hide();
			$(".eliminateCriteria").show();
			$(".select-result").show();
		} else {
			$(".select-no").show();
			$(".select-result").hide();

		}
	});

	$(".eliminateCriteria").live("click", function() {
		$("#selectA").remove();
		$("#selectB").remove();
		$("#selectC").remove();
		$(".select-all").addClass("selected").siblings().removeClass("selected");
		$(".eliminateCriteria").hide();
		$(".select-no").show();
		$(".select-result").hide();

	});
	 $('div .item').click(function () {
    	 var href=$('.text_href').val();
    	 var temp_form = document.createElement("form");      
         temp_form .action = href+"/shopping/get.html";
         temp_form.target = "_blank";
		 temp_form.method = "get";
		 temp_form.style.display = "none";
		document.body.appendChild(temp_form);
		temp_form.submit();
		document.body.removeChild(tempForm);
    	  });
	 $("#J_MiniCartNum").text(getCookie("whshopingcart"));

    


});

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}
