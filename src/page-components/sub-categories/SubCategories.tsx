import React, { useState } from "react";
import { FaList, FaPencilAlt, FaPlus } from "react-icons/fa";
import HeaderContainer from "@/page-components/tabs/helper-components/TopContent";
import Tabs from "@/page-components/tabs/Tabs";
import ButtonGroup from "@/page-components/tabs/helper-components/ButtonGroup";
import CategoriesTable from "../over-view/helper-component/helper-components/CategoriesTable";
import { Container, ContentWrapper } from "../categories-tabs/Categories.styled";
import SubCategoriesList from "./helper-components/SubCategoriesList";
import SubCategoriesTable from "../over-view/helper-component/helper-components/SubCategoriesTable";
import EditCategoryPage from "../categories-tabs/helper-component/EditCategories";


const SubCategories: React.FC = () => {
  const initialTab = localStorage.getItem('activeTab') || "tab1";
  const [activeTab, setActiveTab] = useState<string>(initialTab); 
  const [isEditMode, setIsEditMode] = useState<boolean>(initialTab === "tab3"); 
  const [anchorElExport, setAnchorElExport] = useState<null | HTMLElement>(null);

  const handleExportClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElExport(event.currentTarget);
  };

  const handleExportClose = () => {
    setAnchorElExport(null);
  };

  const tabsData = [
    { id: "tab1", label: "Sub Categories List", icon: <FaList /> },
    { id: "tab2", label: "Create Sub Category", icon: <FaPlus /> },
  ];

  if (isEditMode) {
    tabsData.push({ id: "tab3", label: "Edit Category", icon: <FaPencilAlt /> });
  }

  const handleEditClick = () => {
    setActiveTab("tab3");
    setIsEditMode(true);
    localStorage.setItem('activeTab', 'tab3');
  };

  const handleTabChange = (tabId: string) => {
    if (tabId === "tab3" && !isEditMode) return;
    if (tabId !== "tab3") {
      setIsEditMode(false);
      localStorage.removeItem('activeTab');
    } else {
      localStorage.setItem('activeTab', 'tab3');
    }
    setActiveTab(tabId);
  };

  return (
    <>
      <HeaderContainer title="Sub Categories" subtitle="Sub Categories Management" />
      <Container>
        <ContentWrapper>
          <Tabs
            activeTab={activeTab}
            setActiveTab={handleTabChange}
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
        <br />

        {activeTab === "tab1" && (
          <SubCategoriesTable
            onEditClick={handleEditClick}/>
        )}

        {activeTab === "tab2" && <SubCategoriesList onSave={() => {}} />}

        {activeTab === "tab3" && isEditMode && <EditCategoryPage/>}
      </Container>
    </>
  );
};

export default SubCategories;
