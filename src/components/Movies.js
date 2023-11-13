import React,{useState,useEffect} from 'react'
import MovieCard from './MovieCard';

const Movies = () => {

    const [movies,setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movieData = await fetch('https://imdb-top-100-movies.p.rapidapi.com/',{
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '8c92ff9214mshabe081a507d0101p128ee5jsnf6dbd4615e87',
                        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                    }
                } )
                const data = await movieData.json();
                setMovies(data)
                console.log(data);
            } catch (error) {
                console.log('facing error while fetching movies data from api');
            }
        }
        fetchMovies();
    }, [])
    
    const movieData = movies.map((movie)=>{
        return (
            <MovieCard 
                key={movie.id} 
                rank={movie.rank}
                title={movie.title}
                rating={movie.rating}
                description={movie.description}
                year={movie.year}
                movieImg={movie.image}
            />
        )
    })
    return (
        <div className='flex flex-wrap justify-center'>
            {movieData}
        </div>
    )
}

export default Movies