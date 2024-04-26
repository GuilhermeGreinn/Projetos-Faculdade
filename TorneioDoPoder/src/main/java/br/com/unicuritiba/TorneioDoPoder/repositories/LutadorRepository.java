package br.com.unicuritiba.TorneioDoPoder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.unicuritiba.TorneioDoPoder.models.Lutador;

public interface LutadorRepository extends 
	JpaRepository<Lutador, Long> {
	

}
