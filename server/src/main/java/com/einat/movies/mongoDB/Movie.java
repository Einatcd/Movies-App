package com.einat.movies.mongoDB;

import org.springframework.data.annotation.Id;

public class Movie {
	  
	  public String title;
	  public String year;
	  public String poster;
	  @Id
	  public String imdbID;

	  public Movie() {}

	  public Movie(String title, String year, String poster, String imdbID) {
	    this.title = title;
	    this.year = year;
	    this.poster = poster;
	    this.imdbID = imdbID;

	  }


	public String getImdbID() {
		return imdbID;
	}

	public void setImdbID(String imdbID) {
		this.imdbID = imdbID;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getPoster() {
		return poster;
	}

	public void setPoster(String poster) {
		this.poster = poster;
	} 

}
