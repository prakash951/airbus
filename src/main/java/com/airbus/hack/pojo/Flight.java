package com.airbus.hack.pojo;

public class Flight {

	private Long msn;
	private Long harnesslength;
	private Long grossweight;
	private Long atmopressure;
	private Long roomtemperature;
	private String airport;
	private Long fuelcapacityleftwing;
	private Long fuelcapacityrightwing;
	private Long fuelquantityleftwing;
	private Long fuelquantityrightwing;
	private Long mar;
	private String flightno;
	private String airCraftModel;

	public String getAirCraftModel() {
		return airCraftModel;
	}

	public void setAirCraftModel(String airCraftModel) {
		this.airCraftModel = airCraftModel;
	}

	public Long getMsn() {
		return msn;
	}

	public void setMsn(Long msn) {
		this.msn = msn;
	}

	public Long getHarnesslength() {
		return harnesslength;
	}

	public void setHarnesslength(Long harnesslength) {
		this.harnesslength = harnesslength;
	}

	public Long getGrossweight() {
		return grossweight;
	}

	public void setGrossweight(Long grossweight) {
		this.grossweight = grossweight;
	}

	public Long getAtmopressure() {
		return atmopressure;
	}

	public void setAtmopressure(Long atmopressure) {
		this.atmopressure = atmopressure;
	}

	public Long getRoomtemperature() {
		return roomtemperature;
	}

	public void setRoomtemperature(Long roomtemperature) {
		this.roomtemperature = roomtemperature;
	}

	public String getAirport() {
		return airport;
	}

	public void setAirport(String airport) {
		this.airport = airport;
	}

	public Long getFuelcapacityleftwing() {
		return fuelcapacityleftwing;
	}

	public void setFuelcapacityleftwing(Long fuelcapacityleftwing) {
		this.fuelcapacityleftwing = fuelcapacityleftwing;
	}

	public Long getFuelcapacityrightwing() {
		return fuelcapacityrightwing;
	}

	public void setFuelcapacityrightwing(Long fuelcapacityrightwing) {
		this.fuelcapacityrightwing = fuelcapacityrightwing;
	}

	public Long getFuelquantityleftwing() {
		return fuelquantityleftwing;
	}

	public void setFuelquantityleftwing(Long fuelquantityleftwing) {
		this.fuelquantityleftwing = fuelquantityleftwing;
	}

	public Long getFuelquantityrightwing() {
		return fuelquantityrightwing;
	}

	public void setFuelquantityrightwing(Long fuelquantityrightwing) {
		this.fuelquantityrightwing = fuelquantityrightwing;
	}

	public Long getMar() {
		return mar;
	}

	public void setMar(Long mar) {
		this.mar = mar;
	}

	public String getFlightno() {
		return flightno;
	}

	public void setFlightno(String flightno) {
		this.flightno = flightno;
	}
	
	public String toString()
	{
		return "MSN:"+msn+",airport:"+airport;
	}

}
