/**
 * 
 */

$(document).ready(function() {
	$("#a320").click(function() {
		$("#content").css({
			"display" : "block"
		});
		$("#search").css({
			"display" : "none"
		});
		$("#hcspan").val("A320 Program");
		$('#myForm').trigger("reset");
		$("#model").val("A320");
	});
	$("#a330").click(function() {
		$("#content").css({
			"display" : "block"
		});
		$("#search").css({
			"display" : "none"
		});
		$("#hcspan").val("A330 Program");
		$('#myForm').trigger("reset");
		$("#model").val("A330");
	});
	$("#a350").click(function() {
		$("#content").css({
			"display" : "block"
		});
		$("#search").css({
			"display" : "none"
		});
		$("#hcspan").val("A350 Program");
		$('#myForm').trigger("reset");
		$("#model").val("A350");
	});
	$("#searchandfilter").click(function() {
		$("#content").css({
			"display" : "none"
		});
		$("#search").css({
			"display" : "block"
		});
		$("#hcspan").val("Search Program");
		$('#myForm').trigger("reset");
		$("#model").val("");
	});

	$("#sb1").click(function() {
		$('#myForm').trigger("reset");
		$("#model").val("");
		$("#content").css({
			"display" : "none"
		});
		var t = '<table class="table">';
	    t = t+'<thead>';
	    t = t+'<tr>';
	    t = t+'<th>MSN</th>';
	    t = t+'<th>Airport</th>';
	    t = t+'<th>Flightno</th>';
	    t = t+'<th>Model</th>';
	    t = t+'</tr></thead><tbody>';
	    
		$.ajax({
			type : "GET",
			url : "get/flight/1/10/"+$("#sel1").val(),
			data : "",
			success : function(data) {
				
				for (i in data.entity) {
					  t += '<tr>'
					  t += '<td>'+data.entity[i].msn+'</td>';
					  t += '<td>'+data.entity[i].airport+'</td>';
					  t += '<td>'+data.entity[i].flightno+'</td>';
					  t += '<td>'+data.entity[i].model+'</td>';
					  t += '</tr>'
					}
				t=t+'</tbody></table>';
				$("#scontent").html(t);
			},
			dataType : "json",
			contentType : "application/json"
		});
	});

	$("#submit1").click(function() {
		var myData1 = $("#myForm").serializeArray();
		var flag = true;
		var indexed_array = {};
		var myData = "{";
		$.map(myData1, function(n, i) {
			if (n['value'] == "")
				flag = false;
			myData = myData + '"' + n['name'] + '":"' + n['value'] + '",';
			indexed_array[n['name']] = n['value'];
		});
		myData = myData + '"airCraftModel":"' + $("#model").val() + '"}';
		if (!flag) {
			alert("Enter all values");
		} else {
			// alert(myData);
			$.ajax({
				type : "POST",
				url : "create/flight",
				data : myData,
				success : function() {
					alert("Success");
				},
				dataType : "json",
				contentType : "application/json"
			});
		}

	});

});