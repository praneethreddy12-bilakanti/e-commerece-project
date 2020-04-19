package com.dataload.model.meanswear;

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
@Table(name = "means_DB")
public class MeansDB implements Serializable {

	private static final long serialVersionUID = 1L;
	/**
	 * author:praneeth kumar reddy
	 */

	@Id
	private int meansDressProductId;

	@Column(name = "means_dress_price")
	private int meansDressPorductPrice;

	@Column(name = "means_product_des")
	private String meansDressProductDescription;

	@Column(name = "means_dress_quntity")
	private int meansDresssQuantity;

	@Column(name = "dressType")
	private String dressType;

	@Lob
	@Column(name = "image", length = 100)
	private byte[] pic;

	public MeansDB() {

	}

	public MeansDB(int meansDressProductId, int meansDressPorductPrice, String meansDressProductDescription,
			int meansDresssQuantity, String dressType, byte[] pic) {
		super();
		this.meansDressProductId = meansDressProductId;
		this.meansDressPorductPrice = meansDressPorductPrice;
		this.meansDressProductDescription = meansDressProductDescription;
		this.meansDresssQuantity = meansDresssQuantity;
		this.dressType = dressType;
		this.pic = pic;
	}

	public int getmeansDressProductId() {
		return meansDressProductId;
	}

	public void setmeansDressProductId(int meansDressProductId) {
		this.meansDressProductId = meansDressProductId;
	}

	public byte[] getPic() {
		return pic;
	}

	public void setPic(byte[] pic) {
		this.pic = pic;
	}

	public int getmeansDressPorductPrice() {
		return meansDressPorductPrice;
	}

	public void setmeansDressPorductPrice(int meansDressPorductPrice) {
		this.meansDressPorductPrice = meansDressPorductPrice;
	}

	public String getmeansDressProductDescription() {
		return meansDressProductDescription;
	}

	public void setmeansDressProductDescription(String meansDressProductDescription) {
		this.meansDressProductDescription = meansDressProductDescription;
	}

	public int getmeansDresssQuantity() {
		return meansDresssQuantity;
	}

	public void setmeansDresssQuantity(int meansDresssQuantity) {
		this.meansDresssQuantity = meansDresssQuantity;
	}

	public String getDressType() {
		return dressType;
	}

	public void setDressType(String dressType) {
		this.dressType = dressType;
	}

	@Override
	public String toString() {
		return "MeansDB [meansDressProductId=" + meansDressProductId + ", meansDressPorductPrice="
				+ meansDressPorductPrice + ", meansDressProductDescription=" + meansDressProductDescription
				+ ", meansDresssQuantity=" + meansDresssQuantity + ", dressType=" + dressType + ", pic="
				+ Arrays.toString(pic) + "]";
	}

}