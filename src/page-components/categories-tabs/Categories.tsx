"use client";
import React, { useState } from "react";
import { FaList, FaPlus } from "react-icons/fa";
import HeaderContainer from "@/page-components/tabs/helper-components/TopContent";
import Tabs from "@/page-components/tabs/Tabs";
import ButtonGroup from "@/page-components/tabs/helper-components/ButtonGroup";
import CategoriesTable from "../over-view/helper-component/helper-components/CategoriesTable";
import { Container, ContentWrapper } from "./Categories.styled";
import CategoriesList from "./helper-component/CategoriesList";

const Categories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [anchorElExport, setAnchorElExport] = useState<null | HTMLElement>(null);

  const handleExportClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElExport(event.currentTarget);
  };

  const handleExportClose = () => {
    setAnchorElExport(null);
  };

  const tabsData = [
    { id: "tab1", label: "Categories List", icon: <FaList /> },
    { id: "tab2", label: "Create Category", icon: <FaPlus /> },
  ];

  return (
    <>
      <HeaderContainer title="Categories" subtitle="Categories Management" />
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
            <CategoriesTable/>
          </>
        )}
        <br />
        {activeTab === "tab2" && (
          <>
            <CategoriesList/>
          </>
        )}
      </Container>
    </>
  );
};

export default Categories;
