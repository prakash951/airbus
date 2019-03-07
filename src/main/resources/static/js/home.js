/**
 * 
 */

$(document)
		.ready(
				function() {

					var x = "<div id='create'>"

					x = x + '<form action="/action_page.php">';
					x = x + '<div class="form-group">';
					x = x + '<label for="email">MSN:</label>';
					x = x
							+ '<input type="text" class="form-control" id="msn" placeholder="Enter MSN" name="msn">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x + '<label for="pwd">Harness Length:</label>';
					x = x
							+ '<input type="text" class="form-control" id="hlen" placeholder="Enter Harness Length" name="harnesslength">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x + '<label for="pwd">Gross Weight:</label>';
					x = x
							+ '<input type="text" class="form-control" id="gwei" placeholder="Enter Gross Weight" name="grossweight">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x + '<label for="pwd">Atmospheric Pressure:</label>';
					x = x
							+ '<input type="text" class="form-control" id="pres" placeholder="Enter Atmospheric Pressure" name="atmopressure">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x + '<label for="pwd">Room Temparature:</label>';
					x = x
							+ '<input type="text" class="form-control" id="rtemp" placeholder="Enter Room Temparature" name="roomtemperature">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x + '<label for="pwd">Airport:</label>';
					x = x
							+ '<input type="text" class="form-control" id="aport" placeholder="Enter Airport" name="airport">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x
							+ '<label for="pwd">Fuel Capacity on Left Wing:</label>';
					x = x
							+ '<input type="text" class="form-control" id="fclw" placeholder="Fuel Capacity on Left Wing" name="fuelcapacityleftwing">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x
							+ '<label for="pwd">Fuel Capacity on Right Wing:</label>';
					x = x
							+ '<input type="text" class="form-control" id="fcrw" placeholder="Fuel Capacity on Right Wing" name="fuelcapacityrightwing">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x
							+ '<label for="pwd">Fuel Quantity on Left Wing:</label>';
					x = x
							+ '<input type="text" class="form-control" id="fqlw" placeholder="Fuel Quantity on Left Wing" name="fuelquantityleftwing">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x
							+ '<label for="pwd">Fuel Quantity on Right Wing:</label>';
					x = x
							+ '<input type="text" class="form-control" id="fqrw" placeholder="Fuel Quantity on Right Wing" name="fuelquantityrightwing">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x
							+ '<label for="pwd">Minimum Altitude to be Reached:</label>';
					x = x
							+ '<input type="text" class="form-control" id="mcr" placeholder="Minimum Altitude to be Reached" name="mar">';
					x = x + '</div>';
					x = x + '<div class="form-group">';
					x = x + '<label for="pwd">Flight No:</label>';
					x = x
							+ '<input type="text" class="form-control" id="fno" placeholder="Flight No" name="flightno">';
					x = x + '</div>';
					x = x
							+ '<button type="submit" class="btn btn-primary" id="submit1">Submit</button>';
					x = x + '</form>';

					x = x + "</div>"
					$("#a320").click(function() {
						$("#content").html(x);

					});

					$("#submit1").click(
							function() {
								var myData = JSON.stringify($("#myForm")
										.serializeArray());

								$.ajax({
									type : "POST",
									url : "create/flight",
									data : formData,
									success : function() {
										alert("Success");
									},
									dataType : "json",
									contentType : "application/json"
								});
							});

				});