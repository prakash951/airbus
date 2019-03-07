package com.airbus.hack.service;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airbus.hack.entity.Flights;
import com.airbus.hack.pojo.Flight;
import com.airbus.hack.repo.FlightsRepository;

@Service
public class FlightService {

	@Autowired
	FlightsRepository myFlightsRepository;

	public Response saveFlight(Flight f) {
		try {
			Flights myFlights = new Flights();
			myFlights.setAirport(f.getAirport());
			myFlights.setAtmo_pressure(f.getAtmopressure());
			myFlights.setFc_left_wing(f.getFuelcapacityleftwing());
			myFlights.setFc_right_wing(f.getFuelquantityrightwing());
			myFlights.setFlight_no(f.getFlightno());
			myFlights.setFq_left_wing(f.getFuelquantityleftwing());
			myFlights.setFq_right_wing(f.getFuelquantityrightwing());
			myFlights.setGross_weight(f.getGrossweight());
			myFlights.setHarness_length(f.getHarnesslength());
			myFlights.setMar(f.getMar());
			myFlights.setMsn(f.getMsn());
			myFlights.setRoom_temperature(f.getRoomtemperature());
			myFlightsRepository.save(myFlights);
			return Response.status(200).entity(f).build();
		} catch (Exception e) {
			return Response.status(400).entity("{error: Invalid Request}").build();
		}
	}

}
