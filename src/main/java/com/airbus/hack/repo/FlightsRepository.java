package com.airbus.hack.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.airbus.hack.entity.Flights;

public interface FlightsRepository extends JpaRepository<Flights, Long> {
	
	Flights findByModel(String model);

}
