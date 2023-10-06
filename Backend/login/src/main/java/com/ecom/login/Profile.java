package com.ecom.login;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "profile")
public class Profile {

    @Id
	@Column(name="profile_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long profileId;
	
	@Column(name="user_name", nullable=false)
	private String userName;
	
	@Column(name="user_gender", nullable=false)
	private String userGender;
	
	@Column(name="user_email", nullable=false)
	private String userEmail;
	
	@Column(name="user_mob_no", nullable=false)
	private String userMobNo;
	
	@Column(name="user_password", nullable=false)
	private String userPassword;

}
