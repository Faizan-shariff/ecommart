package com.ecom.login;

import java.util.Map;

public interface ProfileService {
		
	public Map<String,Object> insertProfile(Profiledto profiledto) throws Exception;
	
	public Map<String,Object> login(Profiledto profiledto) throws Exception;
	
	public void changePassword(ChangePasswordDto userCredentials) throws Exception;
	
	public Profiledto getProfileById(Long profileId) throws Exception;
		
	public Profiledto getProfileByUserEmailId(String userEmail) throws Exception;
	
}
