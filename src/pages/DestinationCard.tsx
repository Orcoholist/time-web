import React from "react";
import { IDestination } from '../types/types';
import { useNavigate } from 'react-router-dom'; 

interface DestinationCardProps {
  destination: IDestination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(`/destination/${destination.id}`); 
  };

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <h3>{destination.name}</h3>
      <p>Год: {destination.year}</p>
      <p>{destination.description}</p>
    </div>
  );
};

export default DestinationCard;