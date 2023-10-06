package com.ecom.login;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChangePasswordDto {

	private String email;
	
	private String oldPassword;
	
	private String newPassword;
}
