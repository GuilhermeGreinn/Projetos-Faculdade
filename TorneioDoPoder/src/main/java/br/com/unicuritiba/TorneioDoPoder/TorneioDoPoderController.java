package br.com.unicuritiba.TorneioDoPoder;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.servlet.ModelAndView;

import br.com.unicuritiba.TorneioDoPoder.models.Lutador;
import br.com.unicuritiba.TorneioDoPoder.repositories.LutadorRepository;

@Controller
public class TorneioDoPoderController {
	@Autowired
	private LutadorRepository repositorio;
	
	@GetMapping("/")
	public ModelAndView home() {
		
		List<Lutador> lutadores = repositorio.findAll();
		
		ModelAndView view=new ModelAndView("index");
		view.addObject("lutadores", lutadores);
		
		return view;
	}
	
	@GetMapping("/cadastro")
	public ModelAndView create() {
		ModelAndView view = new ModelAndView("create");
		view.addObject("model", new Lutador());
		return view;
	}
	
	
@PostMapping("/cadastro")
	public String createFighter(
		Lutador lutador,
		Model model,
		BindingResult result) {
		
		repositorio.save(lutador);
		return "redirect:/";
	}

@DeleteMapping ("/remover/{id}")
	public String removeFighter(@PathVariable("id") long id) {
	repositorio.deleteById(id);
	return "redirect:/";

}

@PutMapping("/atualizar/{id}")
	public String updateFighter(@PathVariable("id") long id,
		Lutador lutador,
		Model model,
		BindingResult result) {
	lutador.setId(id);
	repositorio.save(lutador);
	return "redirect:/";
	
}
@GetMapping("/atualizar/{id}")
	public ModelAndView update (@PathVariable("id") long id) {
	
	Lutador lutador = repositorio.findById(id).get();
	ModelAndView view = new ModelAndView("update");
	view.addObject("lutador", lutador);
	return view;
}


}
