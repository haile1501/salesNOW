package com.hust.salesnowbe.dto.staff;

import com.hust.salesnowbe.models.enums.Gender;
import com.hust.salesnowbe.models.enums.RoleType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
public class CreateStaffDto {

    @NotBlank
    private String fullName;

    @NotBlank
    private String password;

    @NotBlank
    private String phone;

    private String address;

    @NotNull
    private Timestamp dob;

    @NotNull
    private Gender gender;

    @NotEmpty
    private List<RoleType> roleNames;
}
