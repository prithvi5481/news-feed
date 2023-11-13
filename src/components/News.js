import React,{useState,useEffect} from 'react'
import Cards from './Cards';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const News = () => {
    const [news,setNews] = useState([]);

    
    
    useEffect(() => {
      const newsData = async () => {

        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a0e3319e83354557a8b97e9b207bfcc0');
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            const data = await response.json();
            //console.log(data.articles);
            setNews(data.articles);
              
        } catch (error) {
            console.log('error facing while fetching api data');
        }
      }
      newsData();
    }, [])
    

    const showData = news.map((news,index)=>{
        return (
          
            <Cards 
                key={index} 
                content={truncateText(news.content, 150)}
                urlImage={news.urlToImage}
                heading={truncateText(news.title,20)}
                url={news.url}
            />
        
        )
    })

    
    function truncateText(text, maxLength) {
        if (text && text.length > maxLength) {
          return text.slice(0, maxLength) + '...';
        } else {
          return text;
        }
      }
      
    return (
        <div className='flex flex-wrap justify-center'>
            {showData}
        </div>
    )
}

export default News





