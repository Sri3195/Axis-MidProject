package com.axis.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.axis.dto.TeacherDto;

@FeignClient(name="teacher-service")
public interface TeacherClient {
	
	@GetMapping("api/v1/TEACHER/teacher")
	TeacherDto getTeacherById(@RequestParam int teacherId);

}
