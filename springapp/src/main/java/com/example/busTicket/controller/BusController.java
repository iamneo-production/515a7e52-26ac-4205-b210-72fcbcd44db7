package com.example.busTicket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.busTicket.entity.BusDetails;
import com.example.busTicket.repository.BusRepository;

@CrossOrigin(origins="*", allowedHeaders="*")
@RestController
@RequestMapping("/api/v1/bus")
public class BusController {
	@Autowired
	BusRepository busrepo;
	
	@GetMapping("/show")
	public List<BusDetails> getBus(){
		return busrepo.findAll();
	}
	@GetMapping("/search/{source}/{destination}")
	public List<BusDetails> getSearch(@PathVariable String source,@PathVariable String destination){
		return busrepo.findBySourceAndDestination(source, destination);
	}
	
}
