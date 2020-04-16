package com.praneeth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.praneeth.model.LadiesDress;
import com.praneeth.service.LadiesDressService;

@RestController
@RequestMapping("/ladies")
@CrossOrigin("http://localhost:4200")
public class LadiesDressesController {

	@Autowired
	LadiesDressService service;

	@GetMapping("/")
	public List<LadiesDress> getAllLadiesPorducts() {
System.out.println(".......praneeth.........................");
		return service.getAllLadiesDessDetails();
	}

}
