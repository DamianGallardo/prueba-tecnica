import DashboardLayout from '../components/DashboardLayout'
import CardContainer from '../components/ui/CardContainer'
import { useApi } from '../hooks/useApi'
import type { CardItemProps } from '../components/ui/CardItem'


export default function Dashboard() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL|| 'https://api.example.com';
  const { data: cards, loading, error } = useApi<CardItemProps[]>(`${apiUrl}/launches`);

  return (
    <DashboardLayout>
      <div className='flex flex-col items-center justify-center h-auto'>
       <CardContainer 
        items={cards || []}
        itemsPerPage={9}
        emptyStateMessage="No hay lanzamientos disponibles"
        loading={loading}
        error={error || undefined}
        className="w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      />
      </div>
    </DashboardLayout>
  )
}
