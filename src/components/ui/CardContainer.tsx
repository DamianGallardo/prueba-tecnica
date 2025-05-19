import React, { useState, useMemo } from "react";
import CardItem from "./CardItem";
import type { CardItemProps } from "./CardItem";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

interface CardContainerProps {
  items: CardItemProps[];
  itemsPerPage?: number;
  className?: string;
  loading?: boolean;
  error?: string;
  emptyStateMessage?: string;
  onCardClick?: (id: string | number) => void;
}

const CardContainer: React.FC<CardContainerProps> = ({
  items,
  itemsPerPage = 6,
  loading = false,
  error = "No se encontraron elementos",
  className = " w-full",
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  

  const filteredItems = useMemo(() => {
    if (!searchValue.trim()) return items;

    return items.filter((item) => {
      const search = searchValue.toLowerCase();
      const matches =
      String(item.launch_year).includes(searchValue) ||
      String(item.mission_name).toLowerCase().includes(search) ||
      String(item.details).toLowerCase().includes(search) ||
      String(item.rocket?.rocket_name).toLowerCase().includes(search) ||
      String(item.launch_site?.site_name_long).toLowerCase().includes(search) ||
      String(item.flight_number).toString().includes(searchValue) ||
      String(item.links?.article_link).toLowerCase().includes(search);
      let launchStatus = "";
      if (item.launch_success === true) launchStatus = "lanzamiento exitoso";
      else if (item.launch_success === false) launchStatus = "lanzamiento fallido";

      const matchesStatus =
      launchStatus && launchStatus.includes(search);
      return matches || matchesStatus;
    });
  }, [items, searchValue]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
  
  const safePage = Math.min(currentPage, totalPages);
  if (safePage !== currentPage && currentPage !== 1) {
    setCurrentPage(safePage);
  }

  // Obtener elementos para la página actual
  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredItems, currentPage, itemsPerPage]);

    const [searchMessage, setSearchMessage] = useState<string | null>(null);

const handleSearch = () => {
    setCurrentPage(1);
    if (!searchValue.trim()) {
        setSearchMessage(null);
        return;
    }

    if (filteredItems.length === 0) {
        setSearchMessage(`No se encontraron resultados para "${searchValue}"`);
    } else {
        setSearchMessage(`Se encontraron ${filteredItems.length} resultado(s)`);
    }
};

  return (
    <div className={className}>
      
      <div className="mb-6">
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
          placeholder="Buscar por título o contenido..."
        />
      </div>

      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <div key={item.id} className="h-full">
              <CardItem
                {...item}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
         {loading && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">Cargando...</p>
        </div>
      )}
      {error && (
        <div className="text-center py-10">
          <p className="text-red-500">{error}</p>
        </div>
      )}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default CardContainer;