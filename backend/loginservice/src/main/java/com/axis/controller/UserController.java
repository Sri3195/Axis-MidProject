package com.axis.controller;

import java.util.List;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axis.dto.StudentDto;
import com.axis.dto.TeacherDto;
import com.axis.dto.UserDto;
import com.axis.feignclient.StudentClient;
import com.axis.feignclient.TeacherClient;
import com.axis.service.UserService;
import com.axis.utils.AppConstants;

@RestController
@RequestMapping("api/v1/LOGIN")
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	StudentClient studentClient;
	
	@Autowired
	TeacherClient teacherClient;
	
	@PostMapping("/signup")
	public ResponseEntity<String> addUser(@RequestBody UserDto userDto){
		int teacherId=Integer.parseInt(userDto.getUsername());
		TeacherDto teacher=teacherClient.getTeacherById(teacherId);
		String result;
		if(ObjectUtils.isNotEmpty(teacher)) {
			result=userService.addUser(userDto);
			
		}
		else {
			result=AppConstants.USER_ID_NOT_FOUND;
		}
		return new  ResponseEntity<String>(result,HttpStatus.OK);
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<UserDto>> getAll(){
		List<UserDto> userDtos=userService.getAll();
		return new ResponseEntity<List<UserDto>>(userDtos,HttpStatus.OK);
	}
	
	@PutMapping("/update-id")
	public ResponseEntity<UserDto> updateUserById(@RequestParam int id,@RequestBody UserDto userDto)
	{
		UserDto userDto1=userService.updateUserById(id, userDto);
		return new ResponseEntity<UserDto>(userDto1,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteUserById(@RequestParam int id)
	{
		String result=userService.deleteUserById(id);
		return new ResponseEntity<String>(result,HttpStatus.OK);
	}
	
	@GetMapping("/login-id")
	public ResponseEntity<UserDto> findUserById(@RequestParam int id){
		
		UserDto userDto=userService.findUserById(id);
		return new ResponseEntity<UserDto>(userDto,HttpStatus.OK);
	}
	
	@GetMapping("/login-username")
	public ResponseEntity<String> findUserByUsername(@RequestParam String username,@RequestParam String password){
		
		String result=userService.findUserByUsername(username,password);
		return new ResponseEntity<String>(result,HttpStatus.OK);
	}
	
	@PutMapping("/update-username")
	public ResponseEntity<UserDto> updateUserByUsername(@RequestParam String username,@RequestBody UserDto userDto)
	{
		UserDto userDto1=userService.updateByUsername(username, userDto);
		return new ResponseEntity<UserDto>(userDto1,HttpStatus.OK);
	}
	
	/*@GetMapping("/hello")
	public StudentDto greet(@RequestParam int studentId) {
		StudentDto student=studentClient.getStudentById(studentId);
		return student;
		
	}*/

}
