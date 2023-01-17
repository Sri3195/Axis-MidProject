package com.axis.service;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import com.axis.dto.PercentageEntity;
import com.axis.dto.StudentAttendanceDto;
import com.axis.entity.StudentAttendance;

public interface StudentAttendanceService {
	
	public String addAttendance(StudentAttendanceDto studentAttendanceDto);
	public List<StudentAttendanceDto> getAllAttendance();
	public StudentAttendanceDto updateAttendanceById(int attendanceId,StudentAttendanceDto studentAttendanceDto);
	public String deleteAttendanceById(int attendanceId);
	public StudentAttendanceDto getAttendanceById(int attendanceId);
	public List<StudentAttendanceDto> getAttendanceByStudentId(int studentId);
	public List<StudentAttendanceDto> getAttendanceByStudentIdandSubject(int studentId,String subject);
	public List<StudentAttendanceDto> getAttendanceBySubject(String subject);
	public List<StudentAttendanceDto> getAttendanceByDates(Date startDate,Date endDate);  
	public List<StudentAttendanceDto> getAttendanceForMonthBySubject(Date startDate,Date endDate,String subject);
	public List<StudentAttendanceDto> getAttendanceForMonthBySubjectForStudent(Date startDate,Date endDate,String subject,int studentId);
	public List<StudentAttendanceDto> getPresentAttendanceForMonthBySubjectForStudent(Date startDate,Date endDate,String subject,int studentId,String status);
	
	public Map<Integer,Double> calculateStudentPercentage(Date startDate,Date endDate,String subject,int studentId);
	public void calculateAllPercentage(Date startDate,Date endDate,String subject);
	
	public String  deleteAttendance(Date date,String time,int teacherId,String subject,int studentId, String status);
	
	public List<StudentAttendance> getAttendanceByDate(Date date);


}
