package com.hust.salesnowbe.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ResponseObject {
    private int responseCode;
    private String message;
    private Object data;

}
