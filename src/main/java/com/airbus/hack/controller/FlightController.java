package com.airbus.hack.controller;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.airbus.hack.pojo.Flight;
import com.airbus.hack.service.FlightService;

@RestController
public class FlightController {

	@Autowired
	FlightService myFlightService;

	@PostMapping("/create/flight")
	public Response createFlight(@RequestBody Flight flight) {
		return myFlightService.saveFlight(flight);
		
	}
	
	@GetMapping("/get/flight/{pagenumber}/{pagesize}/{model}")
	public Response getFlights(@PathVariable int pagenumber, @PathVariable int pagesize,@PathVariable String model ) {
		return myFlightService.getFlights(PageRequest.of(pagenumber, pagesize),model);
		
	}

}
