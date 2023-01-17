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

import com.axis.dto.StudentDto;
import com.axis.entity.Student;
import com.axis.service.StudentService;

@RestController
@RequestMapping("/api/v1/STUDENT")
@CrossOrigin(origins = "*")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	
	@PostMapping("/add-student")
	public ResponseEntity<String> addStudent(@RequestBody StudentDto studentDto){
		String studentDto2=studentService.addStudent(studentDto);
		return new ResponseEntity<String>(studentDto2,HttpStatus.OK);
		
	}
	
	@GetMapping("/get-students")
	public ResponseEntity<List<StudentDto>> getAllStudents(){
		List<StudentDto> studentDtos= studentService.getAllStudents();
		return new ResponseEntity<List<StudentDto>>(studentDtos,HttpStatus.OK);
	}
	
	@PutMapping("/student-update")
	public ResponseEntity<String> updateStudentById(@RequestParam int studentId,@RequestBody StudentDto studentDto){
		String studentDto2=studentService.updateStudentByID(studentId, studentDto);
		return new ResponseEntity<String>(studentDto2,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/student-delete")
	public ResponseEntity<String> deleteStudentById(@RequestParam int studentId){
		String message=studentService.deleteStudentByID(studentId);
		return new ResponseEntity<String>(message,HttpStatus.OK);
	}
	
	@GetMapping("/student/studentId")
	public ResponseEntity<StudentDto> getStudentById(@RequestParam int studentId)
	{
		StudentDto studentDto=studentService.getStudentByID(studentId);
		return new ResponseEntity<StudentDto>(studentDto,HttpStatus.OK);
	}
}
