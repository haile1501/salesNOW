package com.hust.salesnowbe.dto.orderdtos;


import com.hust.salesnowbe.models.enums.PaymentStatus;

import java.sql.Timestamp;

public interface IReturnOrderItemDto {

    Integer getReturnOrderId();

    Integer getBaseOrderId();

    Integer getSwapOrderId();

    String getCustomerName();

    Integer getAmount();

    Timestamp getCreatedAt();

    String getReturnReason();

    PaymentStatus getPaymentStatus();
}
