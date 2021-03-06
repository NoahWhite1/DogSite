package dev.noah.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import dev.noah.entities.Breeder;

@Component
@Repository
public interface BreederRepository extends CrudRepository<Breeder, Integer> {

	 Breeder getBreederByUsername(String username);
	
}
