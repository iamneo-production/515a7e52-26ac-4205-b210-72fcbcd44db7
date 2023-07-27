package com.example.busTicket.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.busTicket.entity.BusDetails;

@Repository
public interface BusRepository extends JpaRepository<BusDetails, String>{
	public List<BusDetails> findBySourceAndDestination(String source, String destination);
	
}
