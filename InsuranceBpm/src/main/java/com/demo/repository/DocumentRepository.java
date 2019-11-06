package com.demo.repository;

import com.demo.model.Document;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by cleophas on 2018/09/08.
 */
@Repository
public interface DocumentRepository extends CrudRepository<Document, Long> {
}
