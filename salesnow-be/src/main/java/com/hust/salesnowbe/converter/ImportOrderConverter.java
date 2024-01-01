package com.hust.salesnowbe.converter;

import com.hust.salesnowbe.dto.vendorDtos.ImportOrderDTO;
import com.hust.salesnowbe.models.ImportOrder;
import org.springframework.stereotype.Component;

@Component
public class ImportOrderConverter {

    VendorConverter vendorConverter;

    ImportOrderConverter(VendorConverter vendorConverter){
        this.vendorConverter = vendorConverter;
    }

    public ImportOrderDTO toDto(ImportOrder entity){
        ImportOrderDTO dto = new ImportOrderDTO();
        if(entity.getId() != null){
            dto.setId(entity.getId());
        }
        dto.setId(entity.getId());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        dto.setStaffName(entity.getUserEntity().getFullName());
        dto.setVendor(vendorConverter.toDto(entity.getVendor()));
        dto.setShipmentStatus(entity.getShipmentStatus());
        return dto;
    }
}
