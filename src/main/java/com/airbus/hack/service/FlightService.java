package com.airbus.hack.service;

import java.util.List;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
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
			//Flights x = myFlightsRepository.findByModel(f.getAirCraftModel());
			Flights x = myFlightsRepository.findByModelAndFlightno(f.getAirCraftModel(),f.getFlightno());
			if(x!=null)
			{
				myFlights=x;
			}
			myFlights.setAirport(f.getAirport());
			myFlights.setAtmo_pressure(f.getAtmopressure());
			myFlights.setFc_left_wing(f.getFuelcapacityleftwing());
			myFlights.setFc_right_wing(f.getFuelquantityrightwing());
			myFlights.setFlightno(f.getFlightno());
			myFlights.setFq_left_wing(f.getFuelquantityleftwing());
			myFlights.setFq_right_wing(f.getFuelquantityrightwing());
			myFlights.setGross_weight(f.getGrossweight());
			myFlights.setHarness_length(f.getHarnesslength());
			myFlights.setMar(f.getMar());
			myFlights.setMsn(f.getMsn());
			myFlights.setRoom_temperature(f.getRoomtemperature());
			myFlights.setModel(f.getAirCraftModel());
			myFlightsRepository.save(myFlights);
			
			return Response.status(200).entity(f).build();
		} catch (Exception e) {
			return Response.status(400).entity("{error: Invalid Request}").build();
		}
	}
	
	public Response getFlights(Pageable p,String model) {
		try {
			List<Flights> x = myFlightsRepository.findByModel(model);
			if(x!=null)
			return Response.status(200).entity(x).build();
			else
				return Response.status(200).entity("{error: Request Model Not Found}").build();
		} catch (Exception e) {
			return Response.status(400).entity("{error: Invalid Request}").build();
		}
	}

}
