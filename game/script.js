var click_trun = 1;
$("#re").hide();
$("#hu").html("TIC-CROSS GAME (&#10004 &#10008) ");
$("input").on("click", function () {
	if (
		click_trun == 1 ||
		click_trun == 3 ||
		click_trun == 5 ||
		click_trun == 7 ||
		click_trun == 9
	) {
		$("#hu").html("  ✘ TRUN ");

		$(this).attr("value", "✔");
		$(this).css({
			background: "yellow",
		});
		$(this).attr("disabled", "disabled");
		click_trun++;
		winerX();
	} else if (
		click_trun == 2 ||
		click_trun == 4 ||
		click_trun == 6 ||
		click_trun == 8
	) {
		$("#hu").html(" ✔  TRUN ");

		$(this).attr("value", "✘");
		$(this).css({
			background: "red",
		});
		$(this).attr("disabled", "disabled");
		click_trun++;
		winerO();
	}
});
function winerX() {
	// console.log($("#in1").attr("value"));
	if (
		($("#in1").attr("value") == "✔" &&
			$("#in4").attr("value") == "✔" &&
			$("#in7").attr("value") == "✔") ||
		($("#in2").attr("value") == "✔" &&
			$("#in5").attr("value") == "✔" &&
			$("#in8").attr("value") == "✔") ||
		($("#in3").attr("value") == "✔" &&
			$("#in6").attr("value") == "✔" &&
			$("#in9").attr("value") == "✔") ||
		($("#in1").attr("value") == "✔" &&
			$("#in5").attr("value") == "✔" &&
			$("#in9").attr("value") == "✔") ||
		($("#in1").attr("value") == "✔" &&
			$("#in2").attr("value") == "✔" &&
			$("#in3").attr("value") == "✔") ||
		($("#in4").attr("value") == "✔" &&
			$("#in5").attr("value") == "✔" &&
			$("#in6").attr("value") == "✔") ||
		($("#in7").attr("value") == "✔" &&
			$("#in8").attr("value") == "✔" &&
			$("#in9").attr("value") == "✔") ||
		($("#in3").attr("value") == "✔" &&
			$("#in5").attr("value") == "✔" &&
			$("#in7").attr("value") == "✔")
	) {
		$("#re").show();
		$("#hu").html("PLAYER `✔ ` WON  ");
	} else if (click_trun == 10) {
		$("#re").show();
		$("#hu").html("NOBODY WONS MATCH DRAW PLAY AGAIN");
	}
}

function winerO() {
	// console.log($("#in1").attr("value"));
	if (
		($("#in1").attr("value") == "✘" &&
			$("#in4").attr("value") == "✘" &&
			$("#in7").attr("value") == "✘") ||
		($("#in2").attr("value") == "✘" &&
			$("#in5").attr("value") == "✘" &&
			$("#in8").attr("value") == "✘") ||
		($("#in3").attr("value") == "✘" &&
			$("#in6").attr("value") == "✘" &&
			$("#in9").attr("value") == "✘") ||
		($("#in1").attr("value") == "✘" &&
			$("#in5").attr("value") == "✘" &&
			$("#in9").attr("value") == "✘") ||
		($("#in1").attr("value") == "✘" &&
			$("#in2").attr("value") == "✘" &&
			$("#in3").attr("value") == "✘") ||
		($("#in4").attr("value") == "✘" &&
			$("#in5").attr("value") == "✘" &&
			$("#in6").attr("value") == "✘") ||
		($("#in7").attr("value") == "✘" &&
			$("#in8").attr("value") == "✘" &&
			$("#in9").attr("value") == "✘") ||
		($("#in3").attr("value") == "✘" &&
			$("#in5").attr("value") == "✘" &&
			$("#in7").attr("value") == "✘")
	) {
		$("#re").show();
		$("#hu").html("PLAYER ` ✘ ` WON  ");
	} else if (click_trun == 10) {
		$("#re").show();
	}
}
function RELO() {
	location.reload();
	alert("BEST OFF LUCK");
}
