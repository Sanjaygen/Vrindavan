import React, { useEffect, useState } from 'react';
import { useFetchCategories, useUpdateCategories } from '@/hooks/useInventory';
import { CategoryProps } from '@/types/inventory';
import { useParams } from 'next/navigation';
import CategoriesList from './CategoriesList';

const EditCategoryPage: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const { data: categories, isLoading, isError } = useFetchCategories();
    const { mutate: updateCategory } = useUpdateCategories();
    const [category, setCategory] = useState<CategoryProps | null>(null);
console.log('edit',categoryId);

    useEffect(() => {
        if (categories && categoryId) {
            const cat = categories.find(cat => cat.id === categoryId);
            setCategory(cat || null);
        }
    }, [categories, categoryId]);

    const handleSaveCategory = (updatedCategory: CategoryProps) => {
        if (categoryId) {
            updateCategory({ id: categoryId, payload: updatedCategory });
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading categories.</p>;
    }

    if (!category) {
        return <p>Category not found.</p>;
    }

    return (
        <CategoriesList
            category={category}
            onSave={handleSaveCategory}
        />
    );
};

export default EditCategoryPage;
