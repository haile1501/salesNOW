package com.hust.salesnowbe.dto.orderdtos;

import com.hust.salesnowbe.models.Customer;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter

public class TopCustomer {
    private Customer customer;
    private BigDecimal value;

    public TopCustomer(Customer customer, BigDecimal value) {
        this.customer = customer;
        this.value = value;
    }
}
