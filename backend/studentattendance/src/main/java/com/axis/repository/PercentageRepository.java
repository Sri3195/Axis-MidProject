package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.dto.PercentageEntity;

@Repository
public interface PercentageRepository  extends JpaRepository<PercentageEntity, Integer>{

}
