package com.hust.salesnowbe.dto.orderdtos;

import com.hust.salesnowbe.models.UserEntity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderStatisticalCharge {
    private OrderStatistical orderStatistical;

    @ManyToOne
    @JoinColumn(name = "person_in_charge")
    private UserEntity userEntity;
    public OrderStatisticalCharge() {
    }

    public OrderStatisticalCharge(OrderStatistical orderStatistical, UserEntity userEntity) {
        this.orderStatistical = orderStatistical;
        this.userEntity = userEntity;
    }

}
