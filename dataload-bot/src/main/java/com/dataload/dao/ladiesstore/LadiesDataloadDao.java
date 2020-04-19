package com.dataload.dao.ladiesstore;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dataload.model.ladiesstore.LadiesDB;

@Repository
public interface LadiesDataloadDao extends JpaRepository<LadiesDB,Integer>{
	@Transactional
	@Modifying
	@Query("update LadiesDB set pic = ?1 where ladiesDressProductId = ?2")
	public void setPicByLadiesProductId(byte[] b, int id);

}

