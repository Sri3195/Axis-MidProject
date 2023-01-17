package com.axis.service;

import java.util.List;

import com.axis.dto.StudentDto;

public interface StudentService {
	
	public String addStudent(StudentDto studentDto);
	public List<StudentDto> getAllStudents();
	public String updateStudentByID(int studentId,StudentDto studentDto);
	public String deleteStudentByID(int studentId);
	public StudentDto getStudentByID(int studentId);

}
