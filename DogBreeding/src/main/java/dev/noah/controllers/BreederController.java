package dev.noah.controllers;

import java.util.List;

import javax.swing.text.html.FormSubmitEvent.MethodType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dev.noah.entities.Breeder;
import dev.noah.services.BreederServiceImpl;

@Component
@RestController
@CrossOrigin("*")
public class BreederController {

	@Autowired
	BreederServiceImpl bs;
	
	@RequestMapping(value = "/breeders", method = RequestMethod.POST)
	public Breeder createBreeder(@RequestBody Breeder breeder) {
		return bs.createBreeder(breeder);
	}
	
	@RequestMapping(value = "/breeders/{id}", method = RequestMethod.GET)
	public Breeder getBreederById(@PathVariable(required = false) int id, @RequestParam(required = false) String username) {
		
		if(id != 0) {
			return bs.getBreederById(id);
		}
		else {
			return bs.getBreederByUsername(username);
		}
		
	}
	
	@RequestMapping(value = "/breeders", method = RequestMethod.GET)
	public List<Breeder> getAllBreeders() {
		return bs.getAllBreeders();
	}
	
	@RequestMapping(value = "/breeders", method = RequestMethod.PUT)
	public Breeder updateBreeder(@RequestBody Breeder breeder) {
		return bs.updateBreeder(breeder);
	}
	
	@RequestMapping(value = "/breeders/{id}", method = RequestMethod.DELETE)
	public Boolean deleteBreeder(@PathVariable int id) {
		return bs.deleteBreederById(id);
	}
}
