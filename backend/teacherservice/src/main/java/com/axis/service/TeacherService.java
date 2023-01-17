package com.axis.service;

import java.util.List;

import com.axis.dto.TeacherDto;

public interface TeacherService {
	
	public String addTeacher(TeacherDto teacherDto);
	public List<TeacherDto> getAllTeachers();
	public TeacherDto updateTeacherByID(int teacherId,TeacherDto teacherDto);
	public String deleteTeacherByID(int teacherId);
	public TeacherDto getTeacherByID(int teacherId);

}
