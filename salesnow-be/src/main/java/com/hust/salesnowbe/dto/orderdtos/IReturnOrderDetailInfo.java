package com.hust.salesnowbe.dto.orderdtos;


import com.hust.salesnowbe.models.enums.PaymentStatus;

import java.sql.Timestamp;

public interface IReturnOrderDetailInfo {

    String getCustomerName();

    Integer getCustomerId();

    Integer getBaseOrderId();

    Timestamp getCreatedAt();

    Integer getSwapOrderId();

    Integer getSwapAmount();

    String getStaffName();

    String getReturnReason();

    PaymentStatus getPaymentStatus();
}
