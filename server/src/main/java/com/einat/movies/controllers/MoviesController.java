package com.einat.movies.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.einat.movies.mongoDB.Movie;
import com.einat.movies.service.FavoriteService;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/fav")

@RestController
public class MoviesController {
	
	@Autowired
	private FavoriteService favoriteService;
	
	//get all favorites
	@GetMapping
	public List<Movie> getAllFavs() {
		return favoriteService.getAllFavs();
	}
	
	@GetMapping("/{imdbID}")
	public Movie findById(@PathVariable String id) {
		return favoriteService.findById(id);
	}
	
	//add fav
	@PostMapping
	public Movie addfav(@RequestBody Movie movie) {
		return favoriteService.addfav(movie);
	}
	
	//remove fav
	@DeleteMapping("/{id}")
	public void removefav(@PathVariable String id){
		favoriteService.removefav(id);
	}
	
	//remove all favs
	@DeleteMapping
	public void removeAllFavs() {
		favoriteService.removeAllFav();
	}

}