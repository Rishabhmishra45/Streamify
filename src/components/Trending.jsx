const Trending = () => {
  const movies = [
    { 
      id: 1, 
      title: "Stranger Things", 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
    },
    { 
      id:2 , 
      title: "Kantara", 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNDU2ZTYxYTMtMjhlZC00ZjEwLThhNDUtMzdlNWM4ZDcyYTM1XkEyXkFqcGc@._V1_.jpg" 
    },
   
     { 
      id: 3, 
      title: "Legends of Hanuman", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGrJv-Ww0zVqm6amlvwudjNDRdTNA0NEwIg&s" 
    },

    { 
      id: 4, 
      title: "Bhay", 
      imageUrl: "https://images.justwatch.com/poster/340104374/s718/bhay-the-gaurav-tiwari-mystery.jpg" 
    },
    
     { 
      id: 5, 
      title: "120 Bahadur", 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BM2ZkZjRhMjItN2ZlNS00MTc3LTkyYWYtYTM1MWVjZGZlOWU5XkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg" 
    },

     { 
      id: 6, 
      title: "Transformers", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-_DnyshP2Ax6a-KQMDCiDclhegJ4VwJm-Q&s" 
    },
     { 
      id: 7, 
      title: "Sam Bahadur", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sbaTLIt5gVostyKgca-CT9cEBiVg-iInCg&s" 
    },
     { 
      id: 8, 
      title: "Varisu", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUaBtLzmwcjDpxYbzyFhVZfndIRn4p6vE_w&s" 
    },
     { 
      id: 9, 
      title: "Veronica", 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNDI3MjMxYTktZjQ0My00MDVlLWE1MzYtYjliNjFmNmNjMzQxXkEyXkFqcGc@._V1_.jpg" 
    },
     { 
      id: 10, 
      title: "KGF", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfh_pfyJlHwH9ZjIkoESpMSZ678tGkuK9xyA&s" 
    },
   
  ];

  return (
    <section className="px-6 md:px-12 py-10">
      <h2 className="text-2xl font-bold mb-5 text-white">Trending Now</h2>
      
      <div className="flex gap-4 overflow-x-auto scroll-smooth pb-6 no-scrollbar">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
           
            className="group shrink-0 relative min-w-[160px] md:min-w-[200px] h-[240px] md:h-[300px] rounded-lg overflow-hidden bg-gray-800 transition-all duration-300 ease-in-out hover:scale-105 hover:z-10"
          >
         
            <img 
              src={movie.imageUrl} 
              alt={movie.title} 
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-110"
              onError={(e) => { e.target.src = "https://via.placeholder.com/200x300?text=No+Poster"; }}
            />

        
            <span className="absolute bottom-2 left-2 text-6xl font-extrabold text-white/70 drop-shadow-2xl pointer-events-none transition-colors duration-300 group-hover:text-white">
              {index + 1}
            </span>

            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;