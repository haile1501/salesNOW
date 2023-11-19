package com.hust.salesnowbe.dto.orderdtos;


import com.hust.salesnowbe.models.Variant;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter

public class TopOrder {
    private Variant variant;
    private BigDecimal value;

    public TopOrder(Variant variant, BigDecimal value) {
        this.variant = variant;
        this.value = value;
    }
}
