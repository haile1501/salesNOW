package com.hust.salesnowbe.dto.vendorDtos;

import com.hust.salesnowbe.models.keys.ImportItemKey;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImportItemDTO {

    private ImportItemKey id;
    @Min(value = 0, message = "Import price must be greater than or equal to 0")
    private int importPrice;

    @Positive(message = "Quantity must be a positive number")
    private int quantity;

    private int discount;
}
