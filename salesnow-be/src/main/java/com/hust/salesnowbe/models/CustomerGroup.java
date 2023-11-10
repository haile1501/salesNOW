package com.hust.salesnowbe.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.List;

@Entity
@Getter
public class CustomerGroup extends BaseEntity {

    @Column(unique = true)
    private String name;

    private double discount;

    @OneToMany(mappedBy = "group")
    @JsonIgnore
    private List<Customer> customerList;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "shop_id")
    private Shop shop;
}
