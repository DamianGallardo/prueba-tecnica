import { useParams, useNavigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import type { CardItemProps } from "./ui/CardItem";

const LaunchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL || "https://api.example.com";
  const apiMap = import.meta.env.VITE_API_KEY_GOOGLE_MAPS || "https://api.example.com";
  const { data: launch, loading, error } = useApi<CardItemProps>(`${apiUrl}/launches/${id}`);

  if (loading) return <p className="text-center text-lg font-medium text-blue-600">Cargando datos del lanzamiento...</p>;
  if (error) return <p className="text-center text-lg font-semibold text-red-600">Error al cargar el lanzamiento.</p>;
  if (!launch) return <p className="text-center text-lg font-semibold text-gray-600">No se encontró información del lanzamiento.</p>;

  const handleAddToFavorites = () => {
    const favoriteData = {
      flight_number: launch.flight_number,
      mission_name: launch.mission_name,
      mission_patch: launch.mission_patch || launch.links?.mission_patch,
      launch_year: launch.launch_year,
      launch_success: launch.launch_success,
      launch_site: launch.launch_site,
      rocket: launch.rocket,
      details: launch.details,
    };

    const existingFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const alreadyExists = existingFavorites.some(
      (fav: any) => fav.flight_number === favoriteData.flight_number
    );

    if (!alreadyExists) {
      existingFavorites.push(favoriteData);
      localStorage.setItem("favorites", JSON.stringify(existingFavorites));
      alert("Lanzamiento agregado a favoritos");
    } else {
      alert("Este lanzamiento ya está en tus favoritos");
    }
  };

  const handleViewFavorites = () => {
    navigate("/dashboard/favorites");
  };

  return (
    <div className="max-w-2xl mx-auto pt-10 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 text-base font-medium transition"
        >
          Volver
        </button>
        <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          Detalles del Lanzamiento
        </h1>
      </div>
      <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        {launch.mission_name}
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {(launch.mission_patch || launch.links?.mission_patch) && (
          <img
            src={launch.mission_patch || launch.links?.mission_patch}
            alt={`Patch de ${launch.mission_name}`}
            className="w-40 h-40 sm:w-52 sm:h-52 rounded-md mb-4 mt-4 md:mb-0 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        )}
        <div className="flex-1 w-full">
          <p className="mb-2 text-base sm:text-lg text-gray-700">
            <span className="font-semibold text-gray-900">Año de lanzamiento:</span>{" "}
            {launch.launch_year}
          </p>
          <p className="mb-2 text-base sm:text-lg text-gray-700">
            <span className="font-semibold text-gray-900">Cohete:</span>{" "}
            {launch.rocket?.rocket_name || <span className="italic text-gray-400">No disponible</span>}
          </p>
          <p className="mb-2 text-base sm:text-lg text-gray-700">
            <span className="font-semibold text-gray-900">Estado:</span>{" "}
            <span className={launch.launch_success ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
              {launch.launch_success ? "Éxito" : "Fallido"}
            </span>
          </p>
          <p className="mt-2 mb-2 text-base sm:text-lg text-gray-700">
            <span className="font-semibold text-gray-900">Detalles:</span>{" "}
            {launch.details || <span className="italic text-gray-400">Sin detalles disponibles</span>}
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            <span className="font-semibold text-gray-900">Lugar de lanzamiento:</span>{" "}
            <span className="text-blue-800 font-medium">{launch.launch_site?.site_name_long || "No disponible"}</span>
          </p>
          <div className="flex mt-4 w-full justify-center md:justify-start">
            <iframe
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0, maxWidth: 350 }}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${apiMap}&q=${launch.launch_site?.site_name_long || ""}`}
              allowFullScreen
              title="Google Maps"
              className="rounded shadow-md"
            ></iframe>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
            <button
              onClick={handleAddToFavorites}
              className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold transition w-full sm:w-auto"
            >
              Agregar a favoritos
            </button>
            <button
              onClick={handleViewFavorites}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 font-semibold transition w-full sm:w-auto"
            >
              Ver mis favoritos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetails;
