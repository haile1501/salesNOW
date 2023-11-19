package com.hust.salesnowbe.dto.orderdtos;


import com.hust.salesnowbe.models.enums.PaymentStatus;

import java.sql.Timestamp;

public interface IOrderDetailInfo {

    Integer getId();

    String getCustomerName();

    String getPhone();

    Integer getCustomerId();

    Timestamp getCreatedAt();

    String getStaffName();

    PaymentStatus getPaymentStatus();

    Integer getAmount();

    Integer getDiscount();

    Integer getReturnOrderId();

    Integer getReturnAmount();
}
