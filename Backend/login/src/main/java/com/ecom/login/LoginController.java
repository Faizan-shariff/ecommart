package com.ecom.login;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class LoginController {

    @Autowired
	private ProfileService profileService;


    @PostMapping("/insert")
	public ResponseEntity<Map<String,Object>> saveProfile(@RequestBody Profiledto profiledto)throws Exception {
		Map<String,Object> savedprofileEntity = profileService.insertProfile(profiledto);
		return new ResponseEntity<>(savedprofileEntity, HttpStatus.CREATED);
	}


    @PostMapping("/login")
	public ResponseEntity<Map<String,Object>> login(@RequestBody Profiledto profiledto) throws Exception {
		Map<String,Object> foundProfileEntity = profileService.login(profiledto);
		return new ResponseEntity<>(foundProfileEntity, HttpStatus.OK);
	}
	
	@PutMapping("/changePassword")
	public ResponseEntity<String> changePassword(@RequestBody ChangePasswordDto userCredentials) throws Exception {
		profileService.changePassword(userCredentials);
		return new ResponseEntity<>("Password changed successfully!",HttpStatus.OK);
	}
    
}
