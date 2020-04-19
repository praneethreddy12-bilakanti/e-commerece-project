package com.dataload.dao.mobiles;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dataload.model.mobiles.MobilesDB;

@Repository
public interface MoibleDataloadDao extends JpaRepository<MobilesDB, Integer> {
	
	@Transactional
	@Modifying
	@Query("update MobilesDB set pic = ?1 where mobilesProductId = ?2")
	public void setPicByMobileProductId(byte[] b, int id);

}