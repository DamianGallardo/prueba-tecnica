import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CardItemProps } from "./ui/CardItem";

const LaunchFavorite = () => {
  const [favorites, setFavorites] = useState<CardItemProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const handleViewDetails = (flight_number: number | string) => {
    navigate(`/dashboard/${flight_number}`);
  };

  const handleRemoveFavorite = (flight_number: number | string) => {
    const updated = favorites.filter((item) => item.flight_number !== flight_number);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  if (favorites.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-600 text-lg">
        No hay favoritos guardados.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 text-base font-medium transition"
        >
          Volver
        </button>
      </div>
      <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center mb-8">
        Mis Favoritos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {favorites.map((fav) => (
          <div
            key={fav.flight_number}
            className="border rounded-xl shadow-sm p-6 bg-white flex flex-col justify-between hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-5">
              {fav.mission_name}
            </h2>
            {fav.mission_patch || fav.links?.mission_patch ? (
              <img
                src={fav.mission_patch || fav.links?.mission_patch}
                alt={`Patch de ${fav.mission_name}`}
                className="w-full h-full object-cover mb-4 rounded-lg border"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4 rounded-lg text-gray-500 text-sm">
                Sin imagen
              </div>
            )}
            <p className="mt-2 text-sm/6 text-gray-600 line-clamp-3 mb-1">
              <strong>Año:</strong> {fav.launch_year}
            </p>
            <p className="text-sm/6 text-gray-600 line-clamp-3 mb-3">
              <strong>Estado:</strong> {fav.launch_success ? "Éxito" : "Fallido"}
            </p>
            <div className="flex justify-between mt-auto pt-4">
              <button
                onClick={() => handleViewDetails(fav.flight_number)}
                className="text-blue-600 hover:underline font-medium"
              >
                Ver detalles
              </button>
              <button
                onClick={() => handleRemoveFavorite(fav.flight_number)}
                className="text-red-600 hover:underline font-medium"
              >
                Quitar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchFavorite;
