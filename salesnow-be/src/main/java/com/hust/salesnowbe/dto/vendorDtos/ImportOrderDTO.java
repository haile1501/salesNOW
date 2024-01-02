package com.hust.salesnowbe.dto.vendorDtos;

import com.hust.salesnowbe.dto.BaseDto;
import com.hust.salesnowbe.dto.productDtos.VariantDto;
import com.hust.salesnowbe.models.enums.ShipmentStatus;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class ImportOrderDTO extends BaseDto {
    @NotNull(message = "Vendor cannot be null")
    private VendorDTO vendor;
    @NotEmpty(message = "Variant list cannot be empty")
    private List<VariantDto> variantDTOList;
    private String staffName;
    private ShipmentStatus shipmentStatus;
    private PaymentDTO paymentDTO;
}
