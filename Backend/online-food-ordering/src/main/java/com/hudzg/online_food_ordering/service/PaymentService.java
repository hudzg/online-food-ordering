package com.hudzg.online_food_ordering.service;

import com.hudzg.online_food_ordering.model.Order;
import com.hudzg.online_food_ordering.response.PaymentResponse;
import com.stripe.exception.StripeException;

public interface PaymentService {
    public PaymentResponse createPaymentLink(Order order) throws StripeException;
}
