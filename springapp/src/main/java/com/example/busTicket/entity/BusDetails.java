package com.example.busTicket.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BusDetails {
	@Id
	private String busId;
	private String busName;
	private String source;
	private String destination;
	private String arrival;
	private String reach;
	private double fare;
	private String busType;
	private String seatType;
	private String availSeat;
	
}
