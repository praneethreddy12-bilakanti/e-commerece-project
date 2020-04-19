package com.dataload.model.ladiesstore;

import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "lADIES_DB")
public class LadiesDB implements Serializable {

	private static final long serialVersionUID = 1L;
	/**
	 * author:praneeth kumar reddy
	 */

	@Id
	private int ladiesDressProductId;

	@Column(name = "ladies_dress_price")
	private int ladiesDressPorductPrice;

	@Column(name = "ladies_product_des")
	private String ladiesDressProductDescription;

	@Column(name = "ladies_dress_quntity")
	private int ladiesDresssQuantity;

	@Lob
	@Column(name = "photo", length = 100)
	private byte[] pic;

	public LadiesDB() {

	}

	public LadiesDB(int ladiesDressProductId, int ladiesDressPorductPrice, String ladiesDressProductDescription,
			int ladiesDresssQuantity, byte[] pic) {
		super();
		this.ladiesDressProductId = ladiesDressProductId;
		this.ladiesDressPorductPrice = ladiesDressPorductPrice;
		this.ladiesDressProductDescription = ladiesDressProductDescription;
		this.ladiesDresssQuantity = ladiesDresssQuantity;
		this.pic = pic;
	}

	public int getladiesDressProductId() {
		return ladiesDressProductId;
	}

	public void setladiesDressProductId(int ladiesDressProductId) {
		this.ladiesDressProductId = ladiesDressProductId;
	}

	public byte[] getPic() {
		return pic;
	}

	public void setPic(byte[] pic) {
		this.pic = pic;
	}

	public int getladiesDressPorductPrice() {
		return ladiesDressPorductPrice;
	}

	public void setladiesDressPorductPrice(int ladiesDressPorductPrice) {
		this.ladiesDressPorductPrice = ladiesDressPorductPrice;
	}

	public String getladiesDressProductDescription() {
		return ladiesDressProductDescription;
	}

	public void setladiesDressProductDescription(String ladiesDressProductDescription) {
		this.ladiesDressProductDescription = ladiesDressProductDescription;
	}

	public int getladiesDresssQuantity() {
		return ladiesDresssQuantity;
	}

	public void setladiesDresssQuantity(int ladiesDresssQuantity) {
		this.ladiesDresssQuantity = ladiesDresssQuantity;
	}

	@Override
	public String toString() {
		return "ladiesDB [ladiesDressProductId=" + ladiesDressProductId + ", ladiesDressPorductPrice="
				+ ladiesDressPorductPrice + ", ladiesDressProductDescription=" + ladiesDressProductDescription
				+ ", ladiesDresssQuantity=" + ladiesDresssQuantity + ",  pic=" + Arrays.toString(pic) + "]";
	}

}