import React from 'react';
import DashboardTable from '../DashboardTable'; 
import { CategoriesTableProps, Column } from '@/types/inventory';
import { useFetchCategories } from '@/hooks/useInventory';

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'image', label: 'Image', minWidth: 150, align: 'center' },
  { id: 'weightage', label: 'Weightage', minWidth: 100, align: 'left' },
  { id: 'updatedAt', label: 'Updated At', minWidth: 100, align: 'right' },
  { id: 'action', label: 'Action', minWidth: 100, align: 'center' },
];

const CategoriesTable: React.FC<CategoriesTableProps> = ({ onEditClick }) => {
  const { data: categories } = useFetchCategories();

  const rows = (categories || []).map(category => ({
    id: category.id,  
    name: category.name || 'Unknown',
    image: category.image || '/images/default.png',
    updatedAt: category.updated_at || 'N/A',
    weightage: parseFloat(category.weightage) || 0
  }));

  return (
    <DashboardTable
      columns={columns}
      rows={rows}
      onEditClick={onEditClick}  
    />
  );
};

export default CategoriesTable;
