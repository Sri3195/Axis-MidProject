package com.axis.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.axis.dto.StudentDto;

@FeignClient(name="student-service")
public interface StudentClient {

	@GetMapping("api/v1/STUDENT/student/studentId")
	StudentDto getStudentById(@RequestParam int  studentId);
}
