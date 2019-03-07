/**
 * 
 */

$(document).ready(function() {
	/*
	 * var x = "<div id='create'>"
	 * 
	 * x = x + '<form id="myForm">'; x = x + '<div class="form-group">'; x = x + '<label
	 * for="email">MSN:</label>'; x = x + '<input type="text"
	 * class="form-control" id="msn" placeholder="Enter MSN" name="msn">'; x = x + '</div>';
	 * x = x + '<div class="form-group">'; x = x + '<label for="pwd">Harness
	 * Length:</label>'; x = x + '<input type="text" class="form-control"
	 * id="hlen" placeholder="Enter Harness Length" name="harnesslength">'; x =
	 * x + '</div>'; x = x + '<div class="form-group">'; x = x + '<label
	 * for="pwd">Gross Weight:</label>'; x = x + '<input type="text"
	 * class="form-control" id="gwei" placeholder="Enter Gross Weight"
	 * name="grossweight">'; x = x + '</div>'; x = x + '<div
	 * class="form-group">'; x = x + '<label for="pwd">Atmospheric Pressure:</label>';
	 * x = x + '<input type="text" class="form-control" id="pres"
	 * placeholder="Enter Atmospheric Pressure" name="atmopressure">'; x = x + '</div>';
	 * x = x + '<div class="form-group">'; x = x + '<label for="pwd">Room
	 * Temparature:</label>'; x = x + '<input type="text" class="form-control"
	 * id="rtemp" placeholder="Enter Room Temparature" name="roomtemperature">';
	 * x = x + '</div>'; x = x + '<div class="form-group">'; x = x + '<label
	 * for="pwd">Airport:</label>'; x = x + '<input type="text"
	 * class="form-control" id="aport" placeholder="Enter Airport"
	 * name="airport">'; x = x + '</div>'; x = x + '<div class="form-group">';
	 * x = x + '<label for="pwd">Fuel Capacity on Left Wing:</label>'; x = x + '<input
	 * type="text" class="form-control" id="fclw" placeholder="Fuel Capacity on
	 * Left Wing" name="fuelcapacityleftwing">'; x = x + '</div>'; x = x + '<div
	 * class="form-group">'; x = x + '<label for="pwd">Fuel Capacity on Right
	 * Wing:</label>'; x = x + '<input type="text" class="form-control"
	 * id="fcrw" placeholder="Fuel Capacity on Right Wing"
	 * name="fuelcapacityrightwing">'; x = x + '</div>'; x = x + '<div
	 * class="form-group">'; x = x + '<label for="pwd">Fuel Quantity on Left
	 * Wing:</label>'; x = x + '<input type="text" class="form-control"
	 * id="fqlw" placeholder="Fuel Quantity on Left Wing"
	 * name="fuelquantityleftwing">'; x = x + '</div>'; x = x + '<div
	 * class="form-group">'; x = x + '<label for="pwd">Fuel Quantity on Right
	 * Wing:</label>'; x = x + '<input type="text" class="form-control"
	 * id="fqrw" placeholder="Fuel Quantity on Right Wing"
	 * name="fuelquantityrightwing">'; x = x + '</div>'; x = x + '<div
	 * class="form-group">'; x = x + '<label for="pwd">Minimum Altitude to be
	 * Reached:</label>'; x = x + '<input type="text" class="form-control"
	 * id="mcr" placeholder="Minimum Altitude to be Reached" name="mar">'; x = x + '</div>';
	 * x = x + '<div class="form-group">'; x = x + '<label for="pwd">Flight
	 * No:</label>'; x = x + '<input type="text" class="form-control" id="fno"
	 * placeholder="Flight No" name="flightno">'; x = x + '</div>'; x = x + '<button
	 * class="btn btn-primary" id="submit1">Submit</button>'; x = x + '</form>';
	 * 
	 * x = x + "</div>"
	 */
	$("#a320").click(function() {
		$("#content").css({
			"display" : "block"
		});
		$('#myForm').trigger("reset");
		$("#model").val("a320");
	});
	$("#a330").click(function() {
		$("#content").css({
			"display" : "block"
		});
		$('#myForm').trigger("reset");
		$("#model").val("a330");
	});
	$("#a350").click(function() {
		$("#content").css({
			"display" : "block"
		});
		$('#myForm').trigger("reset");
		$("#model").val("a350");
	});
	/*
	 * $("#home").click(function() { $('#myForm').trigger("reset");
	 * $("#model").val(""); $("#content").css({"display":"none"}); });
	 */
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
		if(!flag){alert("Enter all values");}
		else{
		//alert(myData);
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