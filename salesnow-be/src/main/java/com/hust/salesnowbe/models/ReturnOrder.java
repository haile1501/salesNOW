package com.hust.salesnowbe.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReturnOrder extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "base_order")
    @JsonIgnore
    private Order baseOrder;

    @OneToOne
    @JoinColumn(name = "swap_order")
    @JsonIgnore
    private Order swapOrder;

    @ManyToOne
    @JoinColumn(name = "person_in_charge")
    private UserEntity user;

    @OneToMany(mappedBy = "returnOrder")
    private List<ReturnOrderLine> returnOrderLineList;

    @Column(name = "return_reason")
    private String returnReason;
}
