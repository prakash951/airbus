package com.airbus.hack.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Flights {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getMsn() {
		return msn;
	}

	public void setMsn(Long msn) {
		this.msn = msn;
	}

	public Long getHarness_length() {
		return harness_length;
	}

	public void setHarness_length(Long harness_length) {
		this.harness_length = harness_length;
	}

	public Long getGross_weight() {
		return gross_weight;
	}

	public void setGross_weight(Long gross_weight) {
		this.gross_weight = gross_weight;
	}

	public Long getAtmo_pressure() {
		return atmo_pressure;
	}

	public void setAtmo_pressure(Long atmo_pressure) {
		this.atmo_pressure = atmo_pressure;
	}

	public Long getRoom_temperature() {
		return room_temperature;
	}

	public void setRoom_temperature(Long room_temperature) {
		this.room_temperature = room_temperature;
	}

	public String getAirport() {
		return airport;
	}

	public void setAirport(String airport) {
		this.airport = airport;
	}

	public Long getFc_left_wing() {
		return fc_left_wing;
	}

	public void setFc_left_wing(Long fc_left_wing) {
		this.fc_left_wing = fc_left_wing;
	}

	public Long getFc_right_wing() {
		return fc_right_wing;
	}

	public void setFc_right_wing(Long fc_right_wing) {
		this.fc_right_wing = fc_right_wing;
	}

	public Long getFq_left_wing() {
		return fq_left_wing;
	}

	public void setFq_left_wing(Long fq_left_wing) {
		this.fq_left_wing = fq_left_wing;
	}

	public Long getFq_right_wing() {
		return fq_right_wing;
	}

	public void setFq_right_wing(Long fq_right_wing) {
		this.fq_right_wing = fq_right_wing;
	}

	public Long getMar() {
		return mar;
	}

	public void setMar(Long mar) {
		this.mar = mar;
	}

	public String getFlight_no() {
		return flight_no;
	}

	public void setFlight_no(String flight_no) {
		this.flight_no = flight_no;
	}

	private Long msn;
	private Long harness_length;
	private Long gross_weight;
	private Long atmo_pressure;
	private Long room_temperature;
	private String airport;
	private Long fc_left_wing;
	private Long fc_right_wing;
	private Long fq_left_wing;
	private Long fq_right_wing;
	private Long mar;
	private String flight_no;
	private String model;

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

}
