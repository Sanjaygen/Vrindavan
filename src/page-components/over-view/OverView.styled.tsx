
// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { FaRegEdit, FaRegTrashAlt, FaSearch } from "react-icons/fa";
// import { styled } from "styled-components";
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
// } from "@mui/material";
// import {
//   HeaderContainer,
//   LeftControls,
//   PageButton,
//   PaginationButtons,
//   PaginationContainer,
//   PaginationInfo,
//   RightControls,
//   SearchContainer,
//   SearchIcon,
//   SearchInput,
// } from "./DashboardTable.styled";

// interface Column {
//   id: keyof Row;
//   label: string;
//   minWidth: number;
//   align?: "right" | "left" | "center";
//   format?: (value: number | string) => string;
// }

// interface Row {
//   sNo: number;
//   name: string;
//   trackInventory: string;
//   image: string;
//   price: number;
//   discountPrice: number;
//   totalProduct: number;
//   stockUpdate: string;
//   unitSize: string;
//   weightage: number;
//   action?: any;
// }

// const columns: Column[] = [
//   { id: "sNo", label: "S No", minWidth: 50 },
//   { id: "name", label: "Name", minWidth: 100 },
//   { id: "trackInventory", label: "Track Inventory", minWidth: 40 },
//   { id: "image", label: "Image", minWidth: 100 },
//   {
//     id: "price",
//     label: "Price",
//     minWidth: 40,
//     align: "right",
//     format: (value: number | string) =>
//       typeof value === "number" ? `$${value.toFixed(2)}` : value,
//   },
//   {
//     id: "discountPrice",
//     label: "Discount Price",
//     minWidth: 40,
//     align: "right",
//     format: (value: number | string) =>
//       typeof value === "number" ? `$${value.toFixed(2)}` : value,
//   },
//   {
//     id: "totalProduct",
//     label: "Total Product",
//     minWidth: 30,
//     align: "right",
//     format: (value: number | string) =>
//       typeof value === "number" ? value.toLocaleString("en-US") : value,
//   },
//   { id: "stockUpdate", label: "Stock Update", minWidth: 150 },
//   { id: "unitSize", label: "Unit Size", minWidth: 30 },
//   {
//     id: "weightage",
//     label: "Weightage",
//     minWidth: 20,
//     align: "right",
//     format: (value: number | string) =>
//       typeof value === "number" ? `${value.toFixed(2)} kg` : value,
//   },
//   {
//     id: "action",
//     label: "Action",
//     minWidth: 100,
//     align: "center",
//   },
// ];

// function createData(
//   sNo: number,
//   name: string,
//   trackInventory: string,
//   image: string,
//   price: number,
//   discountPrice: number,
//   totalProduct: number,
//   stockUpdate: string,
//   unitSize: string,
//   weightage: number,
//   action?: string
// ): Row {
//   return {
//     sNo,
//     name,
//     trackInventory,
//     image,
//     price,
//     discountPrice,
//     totalProduct,
//     stockUpdate,
//     unitSize,
//     weightage,
//     action,
//   };
// }

// const rows: Row[] = [
//   createData(
//     1,
//     "Product A",
//     "false",
//     "/images/productA.jpg",
//     19.99,
//     14.99,
//     150,
//     "In Stock",
//     "Medium",
//     1.5
//   ),
//   createData(
//     2,
//     "Product B",
//     "No",
//     "/images/productB.jpg",
//     29.99,
//     19.99,
//     120,
//     "Low Stock",
//     "Large",
//     2.0
//   ),
//   createData(
//     3,
//     "Product C",
//     "Yes",
//     "/images/productC.jpg",
//     39.99,
//     29.99,
//     100,
//     "In Stock",
//     "Small",
//     1.2
//   ),
//   createData(
//     4,
//     "Product A",
//     "false",
//     "/images/productA.jpg",
//     19.99,
//     14.99,
//     150,
//     "In Stock",
//     "Medium",
//     1.5
//   ),
//   createData(
//     5,
//     "Product B",
//     "No",
//     "/images/productB.jpg",
//     29.99,
//     19.99,
//     120,
//     "Low Stock",
//     "Large",
//     2.0
//   ),
//   createData(
//     6,
//     "Sanjay C",
//     "Yes",
//     "/images/productC.jpg",
//     39.99,
//     29.99,
//     100,
//     "In Stock",
//     "Small",
//     1.2
//   ),
//   createData(
//     7,
//     "Product A",
//     "false",
//     "/images/productA.jpg",
//     19.99,
//     14.99,
//     150,
//     "In Stock",
//     "Medium",
//     1.5
//   ),
//   createData(
//     8,
//     "Product B",
//     "No",
//     "/images/productB.jpg",
//     29.99,
//     19.99,
//     120,
//     "Low Stock",
//     "Large",
//     2.0
//   ),
//   createData(
//     9,
//     "Product C",
//     "Yes",
//     "/images/productC.jpg",
//     39.99,
//     29.99,
//     100,
//     "In Stock",
//     "Small",
//     1.2
//   ),
//   createData(
//     10,
//     "Product C",
//     "Yes",
//     "/images/productC.jpg",
//     39.99,
//     29.99,
//     100,
//     "In Stock",
//     "Small",
//     1.2
//   ),
//   createData(
//     11,
//     "Product A",
//     "false",
//     "/images/productA.jpg",
//     19.99,
//     14.99,
//     150,
//     "In Stock",
//     "Medium",
//     1.5
//   ),
//   createData(
//     12,
//     "Product B",
//     "No",
//     "/images/productB.jpg",
//     29.99,
//     19.99,
//     120,
//     "Low Stock",
//     "Large",
//     2.0
//   ),
//   createData(
//     13,
//     "Product C",
//     "Yes",
//     "/images/productC.jpg",
//     39.99,
//     29.99,
//     100,
//     "In Stock",
//     "Small",
//     1.2
//   ),
//   createData(
//     14,
//     "Product A",
//     "false",
//     "/images/productA.jpg",
//     19.99,
//     14.99,
//     150,
//     "In Stock",
//     "Medium",
//     1.5
//   ),
//   createData(
//     15,
//     "Product B",
//     "No",
//     "/images/productB.jpg",
//     29.99,
//     19.99,
//     120,
//     "Low Stock",
//     "Large",
//     2.0
//   ),
//   createData(
//     16,
//     "Product C",
//     "Yes",
//     "/images/productC.jpg",
//     39.99,
//     29.99,
//     100,
//     "In Stock",
//     "Small",
//     1.2
//   ),
// ];

// const DashboardTable = () => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [searchQuery, setSearchQuery] = React.useState("");

//   const totalPages = Math.ceil(rows.length / rowsPerPage);

//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

//   const handlePreviousPage = () => {
//     if (page > 0) {
//       setPage(page - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (page < totalPages - 1) {
//       setPage(page + 1);
//     }
//   };
//   const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
//     setRowsPerPage(parseInt(event.target.value as string, 10));
//     setPage(0);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };
//   const handleSearchButtonClick = () => {
//     console.log("Search triggered with query:", searchQuery);
//   };
//   const filteredRows = rows.filter((row) =>
//     columns.some((column) =>
//       row[column.id]
//         ?.toString()
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase())
//     )
//   );
//   const startEntry = page * rowsPerPage + 1;
//   const endEntry = Math.min((page + 1) * rowsPerPage, filteredRows.length);
//   return (
//     <Paper style={{ width: "100%", overflow: "hidden" }}>
//       <HeaderContainer>
//         <LeftControls>
//           <span style={{ marginRight: "10px" }}>Show</span>
//           <FormControl
//             variant="outlined"
//             size="small"
//             style={{ minWidth: 120, marginRight: "10px" }}
//           >
//             <Select
//               value={rowsPerPage}
//               onChange={handleRowsPerPageChange}
//               label="Entries"
//             >
//               <MenuItem value={10}>10</MenuItem>
//               <MenuItem value={25}>25</MenuItem>
//               <MenuItem value={30}>30</MenuItem>
//             </Select>
//           </FormControl>
//           <span>Entries</span>
//         </LeftControls>

//         <RightControls>
//           <SearchContainer>
//             <SearchInput
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//           </SearchContainer>
//           <SearchIcon onClick={handleSearchButtonClick} />
//         </RightControls>
//       </HeaderContainer>
//       <TableContainer style={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth, fontWeight: "bold" }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredRows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.sNo}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.id === "action" ? (
//                           <>
//                             <FaRegEdit
//                               style={{
//                                 cursor: "pointer",
//                                 marginRight: 8,
//                                 color: "#007bff",
//                               }}
//                             />
//                             <FaRegTrashAlt
//                               style={{ cursor: "pointer", color: "#dc3545" }}
//                             />
//                           </>
//                         ) : column.format && typeof value === "number" ? (
//                           column.format(value)
//                         ) : (
//                           value
//                         )}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//         <PaginationContainer>
//           <PaginationInfo>
//             {`Showing ${startEntry} to ${endEntry} of ${filteredRows.length} entries`}
//           </PaginationInfo>
//           <PaginationButtons>
//             <PageButton onClick={handlePreviousPage} disabled={page === 0}>
//               Previous
//             </PageButton>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <PageButton
//                 key={index}
//                 active={index === page}
//                 onClick={() => handlePageChange(index)}
//               >
//                 {index + 1}
//               </PageButton>
//             ))}
//             <PageButton
//               onClick={handleNextPage}
//               disabled={page === totalPages - 1}
//             >
//               Next
//             </PageButton>
//           </PaginationButtons>
//         </PaginationContainer>
//       </TableContainer>
//     </Paper>
//   );
// };

// export default DashboardTable;

