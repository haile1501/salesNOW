package com.hust.salesnowbe.dto.orderdtos;

import com.hust.salesnowbe.models.enums.PaymentStatus;

import java.sql.Timestamp;

public interface IOrderListItemDto {

    int getOrderId();

    Timestamp getCreatedAt();

    String getCustomerName();

    String getPhone();

    PaymentStatus getPaymentStatus();

    int getAmount();
}
