package com.axis.exception;

public class PasswordValidateException extends RuntimeException {
	
	public PasswordValidateException(String message) {
		super();
		this.message = message;
	}

	String message;
	
	public String getMessage() {
		return message;
	}

}
