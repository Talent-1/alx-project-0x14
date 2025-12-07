import React from 'react';

// Define a basic structure for the movie data this card will display
interface MovieCardProps {
  title: string;
  year: number;
  // This would typically be a poster image URL
  imageUrl: string; 
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, imageUrl }) => {
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
      <img 
        className="object-cover w-full h-64" 
        src={imageUrl} 
        alt={`Poster for ${title}`} 
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 truncate">{title}</h3>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;