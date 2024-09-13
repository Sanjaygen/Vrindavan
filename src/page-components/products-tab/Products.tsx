"use client";
import React, { useState } from "react";
import { FaList, FaPlus } from "react-icons/fa";
import HeaderContainer from "@/page-components/tabs/helper-components/TopContent";
import Tabs from "@/page-components/tabs/Tabs";
import ButtonGroup from "@/page-components/tabs/helper-components/ButtonGroup";
import ProductsList from "./helper-component/ProductsList";
import ProductsTable from "../over-view/helper-component/helper-components/ProductsTable";
import { Container, ContentWrapper } from "../categories-tabs/Categories.styled";

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [anchorElExport, setAnchorElExport] = useState<null | HTMLElement>(null);

  const handleExportClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElExport(event.currentTarget);
  };

  const handleExportClose = () => {
    setAnchorElExport(null);
  };

  const tabsData = [
    { id: "tab1", label: "Product List", icon: <FaList /> },
    { id: "tab2", label: "Create Product", icon: <FaPlus /> },
  ];

  return (
    <>
      <HeaderContainer title="Products" subtitle="Products Management" />
      <Container>
        <ContentWrapper>
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabItems={tabsData}
          />

          {activeTab === "tab1" && (
            <ButtonGroup
              onExportClick={handleExportClick}
              anchorElExport={anchorElExport}
              onExportClose={handleExportClose}
            />
          )}
        </ContentWrapper>
       <br/>
        {activeTab === "tab1" && (
          <>
            <ProductsTable/>
          </>
        )}
        <br />
        {activeTab === "tab2" && (
          <>
            <ProductsList/>
          </>
        )}
      </Container>
    </>
  );
};

export default Products;
