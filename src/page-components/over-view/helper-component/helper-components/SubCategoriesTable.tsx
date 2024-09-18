import SmallCard from "@/page-components/products-tab/helper-component/ProductCard";
import DashboardTable from "../DashboardTable";
import { CategoriesTableProps, Column } from "@/types/inventory";
import { useFetchSubCategories } from "@/hooks/useInventory";

  const columns: Column[] = [
    { id: 'category', label: 'Category', minWidth: 200 },
    { id: 'name', label: 'Name', minWidth: 200 },
    { id: 'image', label: 'Image', minWidth: 150, align: 'center' },
    { id: 'weightage', label: 'Weightage', minWidth: 100, align: 'left' },
    { id: 'updatedAt', label: 'Updated At', minWidth: 100, align: 'right' },
    { id: 'action', label: 'Action', minWidth: 100, align: 'center' },
  ];
  
  const SubCategoriesTable: React.FC<CategoriesTableProps> = ({ onEditClick }) => {
    const { data: subcategories } = useFetchSubCategories();
  
    const rows = (subcategories || []).map(subcategory => ({
      id: subcategory.id, 
      category: subcategory.category_name|| 'Unknown', 
      name: subcategory.name || 'Unknown',
      image: subcategory.image || '/images/default.png',
      updatedAt: subcategory.updated_at || 'N/A',
      weightage: parseFloat(subcategory.weightage) || 0
    }));
    return ( 
         <>
         <DashboardTable columns={columns} rows={rows} onEditClick={onEditClick}/>
         </>
     );

};
export default SubCategoriesTable;

