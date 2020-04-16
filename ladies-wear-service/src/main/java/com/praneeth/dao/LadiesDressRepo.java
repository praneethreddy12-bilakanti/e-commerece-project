package com.praneeth.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.praneeth.model.LadiesDress;

@Repository
public interface LadiesDressRepo  extends  JpaRepository<LadiesDress, Integer>{

}
