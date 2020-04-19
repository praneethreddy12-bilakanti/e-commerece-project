package com.dataload.model.mobiles;

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
@Table(name = "mobiles_DB")
public class MobilesDB implements Serializable {

	private static final long serialVersionUID = 1L;
	/**
	 * author:praneeth kumar reddy
	 */

	@Id
	private int mobilesProductId;

	@Column(name = "mobile_price")
	private int mobilesPorductPrice;

	@Column(name = "mobile_product_des")
	private String mobilesProductDescription;

	@Column(name = "mobile_quntity")
	private int mobilessQuantity;

	@Column(name = "mobileType")
	private String mobileType;

	@Lob
	@Column(name = "image", length = 100)
	private byte[] pic;

	public MobilesDB() {

	}

	public MobilesDB(int mobilesProductId, int mobilesPorductPrice, String mobilesProductDescription,
			int mobilessQuantity, String mobileType, byte[] pic) {
		super();
		this.mobilesProductId = mobilesProductId;
		this.mobilesPorductPrice = mobilesPorductPrice;
		this.mobilesProductDescription = mobilesProductDescription;
		this.mobilessQuantity = mobilessQuantity;
		this.mobileType = mobileType;
		this.pic = pic;
	}

	public int getmobilesProductId() {
		return mobilesProductId;
	}

	public void setmobilesProductId(int mobilesProductId) {
		this.mobilesProductId = mobilesProductId;
	}

	public byte[] getPic() {
		return pic;
	}

	public void setPic(byte[] pic) {
		this.pic = pic;
	}

	public int getmobilesPorductPrice() {
		return mobilesPorductPrice;
	}

	public void setmobilesPorductPrice(int mobilesPorductPrice) {
		this.mobilesPorductPrice = mobilesPorductPrice;
	}

	public String getmobilesProductDescription() {
		return mobilesProductDescription;
	}

	public void setmobilesProductDescription(String mobilesProductDescription) {
		this.mobilesProductDescription = mobilesProductDescription;
	}

	public int getmobilessQuantity() {
		return mobilessQuantity;
	}

	public void setmobilessQuantity(int mobilessQuantity) {
		this.mobilessQuantity = mobilessQuantity;
	}

	public String getDressType() {
		return mobileType;
	}

	public void setDressType(String mobileType) {
		this.mobileType = mobileType;
	}

	@Override
	public String toString() {
		return "MeansDB [mobilesProductId=" + mobilesProductId + ", mobilesPorductPrice="
				+ mobilesPorductPrice + ", mobilesProductDescription=" + mobilesProductDescription
				+ ", mobilessQuantity=" + mobilessQuantity + ", mobileType=" + mobileType + ", pic="
				+ Arrays.toString(pic) + "]";
	}

}