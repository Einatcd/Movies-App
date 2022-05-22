package com.einat.movies.mongoDB;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface FavoriteMoviesRepository extends MongoRepository<Movie, String>{
	
}
