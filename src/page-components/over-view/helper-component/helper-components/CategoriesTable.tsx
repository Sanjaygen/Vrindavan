import DashboardTable from "../DashboardTable";
interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: number | string) => string;
  }
  
  interface Row {
    name: string;
    image: string;
    UpdateAt: string;
    weightage: number;
  }
  
  const createData = (
    name: string,
    image: string,
    UpdateAt: string,
    weightage: number
  ): Row => ({
    name,
    image,
    UpdateAt,
    weightage,
  });
  
const columns: Column[] = [
  { id: "name", label: "Name", minWidth: 200 },
  { id: "image", label: "Image", minWidth: 150 },
 
  {
    id: "weightage",
    label: "Weightage",
    minWidth: 100,
    align: "left",
    format: (value: number | string) =>
      typeof value === "number" ? `${value.toFixed(2)} kg` : value,
  },
  { id: "updatedAt", label: "Updated At", minWidth: 100,align: "right", },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

const rows: Row[] = [
  createData( "Product A","/images/Vrindavan-img.png","1 year ago",8),
  createData( "Product B","/images/Vrindavan-img.png","1 year ago",8),
  createData( "Sanjay C","/images/Vrindavan-img.png","1 year ago",8),
  createData( "Product D","/images/Vrindavan-img.png","1 year ago",8),
  createData( "Product E","/images/Vrindavan-img.png","1 year ago",8),
  createData( "Product F","/images/Vrindavan-img.png","1 year ago",8),
  createData( "Product G","/images/Vrindavan-img.png","1 year ago",8),

  
];

const CategoriesTable = () => {
    return (
        <DashboardTable columns={columns} rows={rows} />
     );

};
export default CategoriesTable;

