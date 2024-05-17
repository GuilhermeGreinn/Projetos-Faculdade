package br.com.unicuritiba.concessionaria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.unicuritiba.concessionaria.models.Carros;
import br.com.unicuritiba.concessionaria.repository.CarroRepository;


@RestController
public class CarroAPIController {
	@Autowired
	private CarroRepository repositorio;
	
@GetMapping("/carros")
	public ResponseEntity<List<Carros>> getCarro() {
	List<Carros> carros = repositorio.findAll();
	return ResponseEntity.ok(carros);

}

}
