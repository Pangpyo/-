package com.bdos.ssafywiki.revision.repository;

import com.bdos.ssafywiki.revision.entity.Revision;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RevisionRepository extends JpaRepository<Revision, Long> {

}