package com.hust.salesnowbe.dto;


import java.sql.Timestamp;

public interface IBaseDto {
    int getId();
    Timestamp getCreatedAt();
    Timestamp getUpdatedAt();

}

