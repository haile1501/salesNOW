package com.hust.salesnowbe.repositories.VendorManagerRepository;

import com.hust.salesnowbe.models.ImportItem;
import com.hust.salesnowbe.models.keys.ImportItemKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImportItemRepository extends JpaRepository<ImportItem, ImportItemKey> {
    List<ImportItem> findById_ImportOrderId(int importOrderId);
}
