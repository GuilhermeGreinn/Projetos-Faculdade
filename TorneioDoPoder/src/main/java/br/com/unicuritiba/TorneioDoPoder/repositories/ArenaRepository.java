package br.com.unicuritiba.TorneioDoPoder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.unicuritiba.TorneioDoPoder.models.Arena;

public interface ArenaRepository extends
	JpaRepository<Arena, Long> {
	

}
