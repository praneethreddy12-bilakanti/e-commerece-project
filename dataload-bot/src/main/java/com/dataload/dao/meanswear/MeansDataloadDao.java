package com.dataload.dao.meanswear;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dataload.model.meanswear.MeansDB;

@Repository
public interface MeansDataloadDao extends JpaRepository<MeansDB, Integer> {
	
	@Transactional
	@Modifying
	@Query("update MeansDB set pic = ?1 where meansDressProductId = ?2")
	public void setPicByMeansProductId(byte[] b, int id);

}