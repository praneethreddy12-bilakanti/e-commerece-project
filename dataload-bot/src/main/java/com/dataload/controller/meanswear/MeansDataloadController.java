package com.dataload.controller.meanswear;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.dataload.dao.meanswear.MeansDataloadDao;
import com.dataload.model.meanswear.MeansDB;

@RestController
@RequestMapping("/means")
@CrossOrigin("http://localhost:4200")
public class MeansDataloadController {

	@Autowired
	private MeansDataloadDao dao;

	@PostMapping("/men")
	public MeansDB uplaodImage(@RequestBody MeansDB data) throws IOException {
		System.out.println("mobiles data" + data);
		return dao.save(data);
	}

	@PostMapping("/uploadImage/")
	public BodyBuilder handleFileUpload(@RequestParam("file") MultipartFile file, HttpSession session)
			throws IOException {

		System.out.println("Original Image Byte Size - " + file.getBytes().length);
		List<MeansDB> data = dao.findAll();
		System.out.println(data);
		int id = 1;
		for (MeansDB d : data) {
			id = Math.max(d.getmeansDressProductId(), d.getmeansDressProductId());
		}
		byte[] b = file.getBytes();
		dao.setPicByMeansProductId(compressZLib(b), id);
		System.out.println("image upload successfully");
		return ResponseEntity.status(HttpStatus.OK);
	}

	@GetMapping("/details")
	public List<MeansDB> getAllValues() {
		List<MeansDB> listMeans = new ArrayList<>();
		System.out.println("get maping" + dao.findAll());
		List<MeansDB> mobiles = dao.findAll();
		for (MeansDB d : mobiles) {
			MeansDB db = new MeansDB();
			db.setmeansDressPorductPrice(d.getmeansDressPorductPrice());
			db.setmeansDressProductDescription(d.getmeansDressProductDescription());
			db.setmeansDressProductId(d.getmeansDressProductId());
			db.setmeansDresssQuantity(d.getmeansDresssQuantity());
			db.setPic(decompressZLib(d.getPic()));
			listMeans.add(db);
		}
		return listMeans;
	}

	// compress the image bytes before storing it in the database
	public static byte[] compressZLib(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();

		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while (!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		try {
			outputStream.close();
		} catch (IOException e) {
		}
		System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);

		return outputStream.toByteArray();
	}

	// uncompress the image bytes before returning it to the angular application
	public static byte[] decompressZLib(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();
	}

}
