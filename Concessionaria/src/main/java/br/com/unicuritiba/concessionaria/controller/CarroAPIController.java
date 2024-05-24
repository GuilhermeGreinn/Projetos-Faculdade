package br.com.unicuritiba.concessionaria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

@PostMapping("/carros")
	public ResponseEntity<Carros> salvarCarros(
			@RequestBody Carros carro){
	Carros carroSalvo = repositorio.save(carro);
	return new ResponseEntity<Carros>(carroSalvo, HttpStatus.CREATED);
}

@DeleteMapping("/carros/{id}")
	public ResponseEntity<Carros> removerarro(@PathVariable("id") long id) {
	repositorio.deleteById(id);
	return new ResponseEntity<>(HttpStatus.OK);
}

@PutMapping("/carros/{id}")
	public ResponseEntity<Carros> atualizarCarro(
			@PathVariable("id") long id, @RequestBody Carros carro){
	carro.setId(id);
	repositorio.save(carro);
	return new ResponseEntity<Carros>(carro, HttpStatus.OK);
	
}

}
