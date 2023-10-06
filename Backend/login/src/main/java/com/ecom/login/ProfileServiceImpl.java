package com.ecom.login;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileRepository profileRepository;

	@Autowired
	private AuthController authController;

	@Autowired
	private PasswordEncoder passwordEncoder;
		

	@Override
	public Map<String, Object> insertProfile(Profiledto profiledto) throws Exception {
		// profileRepository.findByUserMobNo(profiledto.getUserMobNo()).ifPresent((u)->{
		// 	throw new Exception("Profile with this mobile number already exists. Please use a different mobile number.");
		// });
		
		// profileRepository.findByUserEmail(profiledto.getUserEmail()).ifPresent((u)->{
		// 	throw new Exception("Profile with this Email ID already exists. Please use a different Email Id.");
		// });
		Profile profileObj = new Profile();
		profileObj.setUserName(profiledto.getUserName());
		profileObj.setUserGender(profiledto.getUserGender());
		profileObj.setUserEmail(profiledto.getUserEmail());
		profileObj.setUserMobNo(profiledto.getUserMobNo());
		profileObj.setUserPassword(passwordEncoder.encode(profiledto.getUserPassword()));
		
		Profile savedProfile = profileRepository.save(profileObj);
		
		String token = String.valueOf(authController.getToken(new AuthRequest(profiledto.getUserEmail(), profiledto.getUserPassword())));
		Map<String,Object> tokenAndProfile= new HashMap<>();
		
		tokenAndProfile.put("profile", savedProfile);
		tokenAndProfile.put("token", token);
		
		return tokenAndProfile;
	}

	@Override
	public Map<String, Object> login(Profiledto profiledto) throws Exception {
		String name = profiledto.getUserName();
		Profile foundProfile = profileRepository.findByUserName(name).orElseThrow(()-> new Exception("Unable to find profile with the given name"));
		Map<String,Object> tokenAndProfile = new HashMap<>();
		try {
			String token = String.valueOf(authController.getToken(new AuthRequest(name, profiledto.getUserPassword())));
			tokenAndProfile.put("token", token);
			tokenAndProfile.put("profile", foundProfile);
		}catch(Exception exc) {
			throw new Exception("No Profile found with provided credentials. Please check email and password and try again.");
		}
		return tokenAndProfile;
	}

	@Override
	public void changePassword(ChangePasswordDto userCredentials)
			throws Exception {
		String email = userCredentials.getEmail();
		String oldPassword = userCredentials.getOldPassword();
		Profile existingProfile = profileRepository.findByUserEmail(email).orElseThrow(()->new Exception("No User found for provided Email."));
		if(passwordEncoder.matches(oldPassword, existingProfile.getUserPassword())) {
			String newPassword = userCredentials.getNewPassword();
			if(!newPassword.isBlank()) {
				existingProfile.setUserPassword(passwordEncoder.encode(newPassword));
				profileRepository.save(existingProfile);
			}
		}else {
			throw new Exception("Unable to change password. Entered old password is Invalid!!");
			}
	}

	@Override
	public Profiledto getProfileById(Long profileId) throws Exception {
		Optional<Profile> profileObj = profileRepository.findByProfileId(profileId);
		
		if(profileObj.isPresent()) {
			Profiledto profiledto = new Profiledto();
			profiledto.setProfileId(profileObj.get().getProfileId());
			profiledto.setUserName(profileObj.get().getUserName());
			profiledto.setUserEmail(profileObj.get().getUserEmail());
			profiledto.setUserGender(profileObj.get().getUserGender());
			profiledto.setUserMobNo(profileObj.get().getUserMobNo());
			
			return profiledto;
		}else {
			throw new Exception("Profile with profileId: "+profileId+" Not Found");
		}
	}
	@Override
	public Profiledto getProfileByUserEmailId(String userEmail) throws Exception {
		Optional<Profile> profileObj = profileRepository.findByUserEmail(userEmail);

        if (profileObj.isPresent()) {
            Profiledto profiledto = new Profiledto();
            profiledto.setProfileId(profileObj.get().getProfileId());
            profiledto.setUserEmail(profileObj.get().getUserEmail());
            profiledto.setUserGender(profileObj.get().getUserGender());
            profiledto.setUserMobNo(profileObj.get().getUserMobNo());
            profiledto.setUserName(profileObj.get().getUserName());
            return profiledto;
        } else {
            throw new Exception("Profile with Email Id: " + userEmail + " Not Found");
        }
	}

		

}
