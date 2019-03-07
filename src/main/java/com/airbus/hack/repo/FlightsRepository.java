package com.airbus.hack.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.airbus.hack.entity.Flights;

public interface FlightsRepository extends JpaRepository<Flights, Long> {
	
	List<Flights> findByModel(String model);
	Flights findByModelAndFlightno(String model,String flightno);

}
