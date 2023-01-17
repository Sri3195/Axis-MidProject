package com.axis.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.ObjectUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.dto.UserDto;
import com.axis.entity.User;
import com.axis.exception.IDNotFoundException;
import com.axis.exception.PasswordValidateException;
import com.axis.repository.UserRepository;
import com.axis.utils.AppConstants;

@Service
public class UserServiceImpl implements UserService{

	
	@Autowired
	UserRepository userRepository;
	
	
	
	@Override
	public String addUser(UserDto userDto) {
		
		String pwd1=userDto.getPassword();
		String pwd2=userDto.getConfirmPassword();
		String name=userDto.getUsername();
		User result=userRepository.findByUsername(name);
		if(pwd1.equals(pwd2) &&  ObjectUtils.isEmpty(result)) {
		
				User user=userRepository.save(covertToEntity(userDto));
				return AppConstants.ADDED_SUCCESSFULLY;
		}
		else {
			return "Failed";
		}
			
	}

	@Override
	public List<UserDto> getAll() {
		List<UserDto> userDtos=new ArrayList<>();
		List<User> users=userRepository.findAll();
		
		for(User user:users) {
			userDtos.add(convertToDto(user));
		}
		
		return userDtos;
	}

	@Override
	public UserDto updateUserById(int id,UserDto userDto) {
		User user=userRepository.findById(id)
				.orElseThrow(()->new IDNotFoundException(AppConstants.USER_ID_NOT_FOUND));
		user.setUsername(userDto.getUsername());
		user.setPassword(userDto.getPassword());
		user.setConfirmPassword(userDto.getConfirmPassword());
		
		userRepository.save(user);
		return convertToDto(user);
	}

	@Override
	public String deleteUserById(int id) {
		User user=userRepository.findById(id)
				.orElseThrow(()->new IDNotFoundException(AppConstants.USER_DELETE_MESSAGE));
		userRepository.delete(user);
		return AppConstants.USER_ID_NOT_FOUND;
		
	}

	@Override
	public UserDto findUserById(int id) {
		User user=userRepository.findById(id)
				.orElseThrow(()->new IDNotFoundException(AppConstants.USER_ID_NOT_FOUND));
		
		return convertToDto(user);
	}
	
	@Override
	public String findUserByUsername(String username,String password) {
		User user=userRepository.findByUsername(username);	
	    if(ObjectUtils.isNotEmpty(user)) {
	    	String pwd=user.getPassword();
	    	if(pwd.equals(password)) {
	    		return AppConstants.VALID_USER;
	    	}
	    }
	    else {
	    	return AppConstants.INVALID_USER;
	    }
		return AppConstants.INVALID_USER;
	}
	
	@Override
	public UserDto updateByUsername(String username,UserDto userDto) {
		User user=userRepository.findByUsername(username);
		user.setPassword(userDto.getPassword());
		user.setConfirmPassword(userDto.getConfirmPassword());
		userRepository.save(user);
		
		return convertToDto(user);
		
	}

	private User covertToEntity(UserDto userDto) {
		User user=new ModelMapper().map(userDto,User.class);
		return user;
	}
	
	private UserDto convertToDto(User user) {
		UserDto userDto=new ModelMapper().map(user, UserDto.class);
		return userDto;
	}

}
