package com.praneeth.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ladies_DB")
public class LadiesDress implements Serializable {
	/**
	 * author:praneeth kumar reddy
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ladiesDressProductId;
	@Column(name = "ladies_dress_price")
	private int ladiesDressPorductPrice;
	@Column(name = "ladies_product_des")
	private String ladiesDressProductDescription;
	@Column(name="ladies_dress_quntity")
	private int ladiesDresssQuantity;
	LadiesDress()
	{
		
	}
	public LadiesDress(int ladiesDressProductId, int ladiesDressPorductPrice, String ladiesDressProductDescription,
			int ladiesDresssQuantity) {
		super();
		this.ladiesDressProductId = ladiesDressProductId;
		this.ladiesDressPorductPrice = ladiesDressPorductPrice;
		this.ladiesDressProductDescription = ladiesDressProductDescription;
		this.ladiesDresssQuantity = ladiesDresssQuantity;
	}
	public int getLadiesDressProductId() {
		return ladiesDressProductId;
	}
	public void setLadiesDressProductId(int ladiesDressProductId) {
		this.ladiesDressProductId = ladiesDressProductId;
	}
	public int getLadiesDressPorductPrice() {
		return ladiesDressPorductPrice;
	}
	public void setLadiesDressPorductPrice(int ladiesDressPorductPrice) {
		this.ladiesDressPorductPrice = ladiesDressPorductPrice;
	}
	public String getLadiesDressProductDescription() {
		return ladiesDressProductDescription;
	}
	public void setLadiesDressProductDescription(String ladiesDressProductDescription) {
		this.ladiesDressProductDescription = ladiesDressProductDescription;
	}
	public int getLadiesDresssQuantity() {
		return ladiesDresssQuantity;
	}
	public void setLadiesDresssQuantity(int ladiesDresssQuantity) {
		this.ladiesDresssQuantity = ladiesDresssQuantity;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
