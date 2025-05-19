import React from "react";
import { useNavigate } from "react-router-dom";

export interface CardItemProps {
  id?: string | number;
  flight_number: number | string;
  mission_name: string;
  launch_year: number;
  details?: string;
  launch_success?: boolean;
  links?: {
    mission_patch?: string;
    article_link?: string;
  };
  launch_site?: {
    site_name_long?: string;
  };
  mission_patch?: string;
  rocket?: {
    rocket_name?: string;
  };
  onClick?: () => void;
}

const CardItem: React.FC<CardItemProps> = ({
  flight_number,
  mission_name,
  launch_year,
  mission_patch,
  launch_success,
  rocket: { rocket_name } = {},
  links,
  details,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleViewMore = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    navigate(`/dashboard/${flight_number}`);
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/dashboard/${flight_number}`);
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      key={flight_number}
    >
      {(mission_patch || links?.mission_patch) && (
        <div className="w-full h-full overflow-hidden"
          onClick={handleCardClick}
        >
          <img
            src={mission_patch || links?.mission_patch}
            alt={`${mission_name} - ${rocket_name}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex-1 p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-2">{mission_name}</h2>
        <p className="text-sm text-muted-foreground">
          {rocket_name || "Cohete no disponible"}
        </p>
        <p className="text-muted-foreground text-sm line-clamp-3">{details}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-muted-foreground">
            {launch_success ? "Lanzamiento exitoso" : "Lanzamiento fallido"}
          </p>
          <p className="text-sm text-muted-foreground">{launch_year}</p>

          <button
            onClick={handleViewMore}
            className="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
