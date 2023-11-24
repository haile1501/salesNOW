package com.hust.salesnowbe.dto.orderdtos;

import com.hust.salesnowbe.models.Order;
import com.hust.salesnowbe.models.Payment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class OrderListByCustomer {
    private Order order;

    private Payment payment;

}
