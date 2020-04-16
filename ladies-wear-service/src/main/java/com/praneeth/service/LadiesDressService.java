package com.praneeth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.praneeth.dao.LadiesDressRepo;
import com.praneeth.model.LadiesDress;

@Service
public class LadiesDressService {

	@Autowired
	LadiesDressRepo repo;

	public List<LadiesDress> getAllLadiesDessDetails() {
		System.out.println(repo.findAll());
		return repo.findAll();
	}

}
