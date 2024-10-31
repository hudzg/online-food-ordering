package com.hudzg.online_food_ordering.repository;

import com.hudzg.online_food_ordering.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
