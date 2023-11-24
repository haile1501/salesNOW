package com.hust.salesnowbe.repositories;


import com.hust.salesnowbe.models.enums.OrderType;
import com.hust.salesnowbe.models.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    Payment findPaymentByOrderId(int orderId);

    Payment findPaymentByOrderIdAndOrderType(int orderId, OrderType orderType);

    @Query("SELECT p FROM Payment p WHERE p.orderId = :orderId AND p.orderType = 'ORDER' ")
    Payment findPaymentByOrder(@Param("orderId") int orderId);

} 

