package com.ecom.login;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProfileRepository extends JpaRepository<Profile, String>{
	
	public Optional<Profile> findByProfileId(Long profileId);
	
	public Optional<Profile> findByUserEmail(String userEmail);
	
	public Optional<Profile> findByUserMobNo(String userMobNo);

    public Optional<Profile> findByUserName(String name);

}
