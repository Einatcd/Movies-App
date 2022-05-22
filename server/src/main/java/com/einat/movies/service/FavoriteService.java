package com.einat.movies.service;

import com.einat.movies.mongoDB.FavoriteMoviesRepository;
import com.einat.movies.mongoDB.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {
	
	@Autowired
	private FavoriteMoviesRepository repository;
	
	public List<Movie> getAllFavs(){
		return repository.findAll();
	}
	
	public Movie findById(String id) {
		return repository.findById(id).orElseThrow();
	}
	
	public Movie addfav(Movie movie) {
		return repository.insert(movie);
	}
	
	public void removefav(String id) {
		repository.deleteById(id);
	}
	
	public void removeAllFav() {
		repository.deleteAll();
	}
}
