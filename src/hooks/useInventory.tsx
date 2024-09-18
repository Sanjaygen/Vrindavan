import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createCategories, createSubCategories, fetchCategories, fetchSubCategories, updateCategories } from '@/service/page-service';
import { CategoryProps } from '@/types/inventory';

export const useFetchCategories = () => {
    return useQuery('categories', fetchCategories, {
        onSettled: (data, error) => {
            if (data) {
                console.log('Fetched categories:', data);
            }
            if (error) {
                console.error('Error fetching categories:', error);
            }
        },
    });
};

export const useCreateCategories = () => {
    return useMutation(createCategories, {
        onSuccess: (data) => {
            console.log('Category created successfully:', data);
        },
        onError: (error) => {
            console.error('Error creating category:', error);
        },
    });
};


export const useUpdateCategories = () => {
    const queryClient = useQueryClient();

    return useMutation(
        ({ id, payload }: { id: string; payload: CategoryProps }) => updateCategories(id, payload),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('categories');
            },
            onError: (error: Error) => {
                console.error('Error updating category:', error);
            }
        }
    );
};


//Sub-Categories 

export const useFetchSubCategories = () => {
    return useQuery('subcategories', fetchSubCategories, {
        onSettled: (data, error) => {
            if (data) {
                console.log('Fetched Sub-categories:', data);
            }
            if (error) {
                console.error('Error fetching Sub-categories:', error);
            }
        },
    });
};

export const useCreateSubCategories = () => {
    return useMutation(createSubCategories, {
        onSuccess: (data) => {
            console.log('SubCategory created successfully:', data);
        },
        onError: (error) => {
            console.error('Error creating Subcategory:', error);
        },
    });
};