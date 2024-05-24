package br.com.unicuritiba.concessionaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.unicuritiba.concessionaria.models.Carros;

public interface CarroRepository extends JpaRepository<Carros,Long>{
	

}
