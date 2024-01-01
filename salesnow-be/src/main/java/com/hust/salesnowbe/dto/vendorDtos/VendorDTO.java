package com.hust.salesnowbe.dto.vendorDtos;

import com.hust.salesnowbe.dto.BaseDto;
import com.hust.salesnowbe.models.Shop;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class VendorDTO extends BaseDto {

    @NotBlank(message = "Name must not be empty")
    private String name;
    @NotBlank(message = "Address must not be empty")
    private String address;
    @NotBlank(message = "Phone must not be empty")
    @Pattern(regexp = "\\d{10}", message = "Invalid phone number")
    private String phone;
    @NotBlank(message = "Email must not be empty")
    @Email(message = "Invalid email")
    private String email;
    private String fax;
    private String tax;
    private String website;
    private String description;
    private List<PaymentDTO> paymentDTOList;
    private Shop shop;
    private int Debt;
    private int TotalImportOrder;
    private int NumberImportOrder;
    private String status;
}
