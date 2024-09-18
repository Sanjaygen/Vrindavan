import SmallCard from "@/page-components/products-tab/helper-component/ProductCard";
import DashboardTable from "../DashboardTable";
interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: number | string) => string;
  }
  
  interface Row {
    sNo: number;
    name: string;
    trackInventory: string;
    image: string;
    price: number;
    discountPrice: number;
    totalProduct: number;
    stockUpdate: string;
    unitSize: string;
    weightage: number;
  }
  
  const createData = (
    sNo: number,
    name: string,
    trackInventory: string,
    image: string,
    price: number,
    discountPrice: number,
    totalProduct: number,
    stockUpdate: string,
    unitSize: string,
    weightage: number
  ): Row => ({
    sNo,
    name,
    trackInventory,
    image,
    price,
    discountPrice,
    totalProduct,
    stockUpdate,
    unitSize,
    weightage,
  });
  
const columns: Column[] = [
  { id: "sNo", label: "S No", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "trackInventory", label: "Track Inventory", minWidth: 40 },
  { id: "image", label: "Image", minWidth: 100 },
  {
    id: "price",
    label: "Price",
    minWidth: 40,
    align: "right",
    format: (value: number | string) =>
      typeof value === "number" ? `$${value.toFixed(2)}` : value,
  },
  {
    id: "discountPrice",
    label: "Discount Price",
    minWidth: 40,
    align: "right",
    format: (value: number | string) =>
      typeof value === "number" ? `$${value.toFixed(2)}` : value,
  },
  {
    id: "totalProduct",
    label: "Total Product",
    minWidth: 30,
    align: "right",
    format: (value: number | string) =>
      typeof value === "number" ? value.toLocaleString("en-US") : value,
  },
  { id: "stockUpdate", label: "Stock Update", minWidth: 150 },
  { id: "unitSize", label: "Unit Size", minWidth: 30 },
  {
    id: "weightage",
    label: "Weightage",
    minWidth: 20,
    align: "right",
    format: (value: number | string) =>
      typeof value === "number" ? `${value.toFixed(2)} kg` : value,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

const rows: Row[] = [
  createData(
    1,
    "Product A",
    "false",
    "/images/productA.jpg",
    19.99,
    14.99,
    150,
    "In Stock",
    "Medium",
    1.5
  ),
  createData(
    2,
    "Product B",
    "No",
    "/images/productB.jpg",
    29.99,
    19.99,
    120,
    "Low Stock",
    "Large",
    2.0
  ),
  createData(
    3,
    "Product C",
    "Yes",
    "/images/productC.jpg",
    39.99,
    29.99,
    100,
    "In Stock",
    "Small",
    1.2
  ),
  createData(
    4,
    "Product A",
    "false",
    "/images/productA.jpg",
    19.99,
    14.99,
    150,
    "In Stock",
    "Medium",
    1.5
  ),
  createData(
    5,
    "Product B",
    "No",
    "/images/productB.jpg",
    29.99,
    19.99,
    120,
    "Low Stock",
    "Large",
    2.0
  ),
  createData(
    6,
    "Sanjay C",
    "Yes",
    "/images/productC.jpg",
    39.99,
    29.99,
    100,
    "In Stock",
    "Small",
    1.2
  ),
  createData(
    7,
    "Product A",
    "false",
    "/images/productA.jpg",
    19.99,
    14.99,
    150,
    "In Stock",
    "Medium",
    1.5
  ),
  createData(
    8,
    "Product B",
    "No",
    "/images/productB.jpg",
    29.99,
    19.99,
    120,
    "Low Stock",
    "Large",
    2.0
  ),
  createData(
    9,
    "Product C",
    "Yes",
    "/images/productC.jpg",
    39.99,
    29.99,
    100,
    "In Stock",
    "Small",
    1.2
  ),
  createData(
    10,
    "Product C",
    "Yes",
    "/images/productC.jpg",
    39.99,
    29.99,
    100,
    "In Stock",
    "Small",
    1.2
  ),
  createData(
    11,
    "Product A",
    "false",
    "/images/productA.jpg",
    19.99,
    14.99,
    150,
    "In Stock",
    "Medium",
    1.5
  ),
  createData(
    12,
    "Product B",
    "No",
    "/images/productB.jpg",
    29.99,
    19.99,
    120,
    "Low Stock",
    "Large",
    2.0
  ),
  createData(
    13,
    "Product C",
    "Yes",
    "/images/productC.jpg",
    39.99,
    29.99,
    100,
    "In Stock",
    "Small",
    1.2
  ),
  createData(
    14,
    "Product A",
    "false",
    "/images/productA.jpg",
    19.99,
    14.99,
    150,
    "In Stock",
    "Medium",
    1.5
  ),
  createData(
    15,
    "Product B",
    "No",
    "/images/productB.jpg",
    29.99,
    19.99,
    120,
    "Low Stock",
    "Large",
    2.0
  ),
  createData(
    16,
    "Product C",
    "Yes",
    "/images/productC.jpg",
    39.99,
    29.99,
    100,
    "In Stock",
    "Small",
    1.2
  ),
];

const ProductsTable = () => {
    return ( 
         <>
         <SmallCard />
         <DashboardTable columns={columns} rows={rows} />
         </>
     );

};
export default ProductsTable;

