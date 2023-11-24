package com.hust.salesnowbe.dto.auth;

import com.hust.salesnowbe.models.Role;
import com.hust.salesnowbe.models.enums.Gender;
import com.hust.salesnowbe.models.enums.WorkStatus;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

@Getter
@Setter
public class UserInfoDto {

    private String fullName;

    private boolean isActive;

    private String phone;

    private String address;

    private Date dob;

    private Gender gender;

    private WorkStatus workStatus;

    private List<Role> roles;
}
