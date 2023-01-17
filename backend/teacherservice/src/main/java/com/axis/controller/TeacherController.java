package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axis.dto.TeacherDto;
import com.axis.entity.Teacher;
import com.axis.service.TeacherService;

@RestController
@RequestMapping("/api/v1/TEACHER")
@CrossOrigin(origins = "*")
public class TeacherController {
	
	@Autowired
	TeacherService teacherService;
	
	@PostMapping("/teacher")
	public ResponseEntity<String> addTeacher(@RequestBody TeacherDto teacherDto){
		String teacherDto2=teacherService.addTeacher(teacherDto);
		return new ResponseEntity<String>(teacherDto2,HttpStatus.OK);
		
	}
	
	@GetMapping("/teachers")
	public ResponseEntity<List<TeacherDto>> getAllTeachers(){
		List<TeacherDto> teacherDtos= teacherService.getAllTeachers();
		return new ResponseEntity<List<TeacherDto>>(teacherDtos,HttpStatus.OK);
	}
	
	@PutMapping("/teacher")
	public ResponseEntity<TeacherDto> updateTeacherById(@RequestParam int teacherId,@RequestBody TeacherDto teacherDto){
		TeacherDto teacherDto2=teacherService.updateTeacherByID(teacherId, teacherDto);
		return new ResponseEntity<TeacherDto>(teacherDto2,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/teacher")
	public ResponseEntity<String> deleteTeacherById(@RequestParam int teacherId){
		String message=teacherService.deleteTeacherByID(teacherId);
		return new ResponseEntity<String>(message,HttpStatus.OK);
	}
	
	@GetMapping("/teacher")
	public ResponseEntity<TeacherDto> getTeacherById(@RequestParam int teacherId)
	{
		TeacherDto teacherDto=teacherService.getTeacherByID(teacherId);
		return new ResponseEntity<TeacherDto>(teacherDto,HttpStatus.OK);
	}
}
