package com.axis.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class PercentageEntity {
	
	
	public PercentageEntity(int studentId, int totalNoOfdays, int noofDaysPresent, double percentage) {
		super();
		this.studentId = studentId;
		this.totalNoOfdays = totalNoOfdays;
		this.noofDaysPresent = noofDaysPresent;
		this.percentage = percentage;
	}
	public PercentageEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	private int studentId;
	private int totalNoOfdays;
	private int noofDaysPresent;
	private double percentage;
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public double getPercentage() {
		return percentage;
	}
	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}
	public int getTotalNoOfdays() {
		return totalNoOfdays;
	}
	public void setTotalNoOfdays(int totalNoOfdays) {
		this.totalNoOfdays = totalNoOfdays;
	}
	public int getNoofDaysPresent() {
		return noofDaysPresent;
	}
	public void setNoofDaysPresent(int noofDaysPresent) {
		this.noofDaysPresent = noofDaysPresent;
	}
	

}
