package com.hust.salesnowbe.dto.staff;

import com.hust.salesnowbe.models.Role;
import com.hust.salesnowbe.models.enums.WorkStatus;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
public class StaffItemDto {

    private int id;

    private String fullName;

    private String phone;

    private WorkStatus workStatus;

    private List<Role> roles;

    private Timestamp createdAt;
}
