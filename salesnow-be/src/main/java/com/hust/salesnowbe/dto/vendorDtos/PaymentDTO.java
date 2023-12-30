package com.hust.salesnowbe.dto.vendorDtos;

import com.hust.salesnowbe.models.enums.OrderType;
import com.hust.salesnowbe.models.enums.PaymentMethod;
import com.hust.salesnowbe.models.enums.PaymentStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;


@Getter
@Setter
public class PaymentDTO {

    private int payId;
    private int orderId;
    private int amount;
    @NotNull(message = "Payment method cannot be null")
    private PaymentMethod paymentMethod;
    private OrderType orderType;
    private PaymentStatus paymentStatus;
    private Date payDate;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private ImportOrderDTO importOrderDTO;
}
