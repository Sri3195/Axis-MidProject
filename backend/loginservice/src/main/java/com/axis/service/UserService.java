package com.axis.service;

import java.util.List;

import com.axis.dto.StudentDto;
import com.axis.dto.UserDto;

public interface UserService {
	
	public String addUser(UserDto userDto);
	public List<UserDto> getAll();
	public UserDto updateUserById(int id,UserDto userDto);
	public String deleteUserById(int id);
	public UserDto findUserById(int id);
	public String findUserByUsername(String username,String password);
	public UserDto updateByUsername(String username,UserDto userDto);

}
