import { CategoryProps } from "@/types/inventory";
import { get, post, update } from "./api-service/api";

//CateGories 
export const fetchCategories = async (): Promise<CategoryProps[]> => {
    const response = await get<{ data: CategoryProps[] }>('categories');
    return response.data;
};

export const createCategories = async (payload: CategoryProps): Promise<CategoryProps> => {
    const response = await post<{ data: CategoryProps }>('categories', payload);
    return response.data;
};

export const updateCategories = async (id: string, payload: CategoryProps) => {
    const response = await update(`categories/${id}`, payload);
    return response;
};

//Sub-Categories 

export const fetchSubCategories = async (): Promise<CategoryProps[]> => {
    const response = await get<{ data: CategoryProps[] }>('subcategories');
    return response.data;
};

export const createSubCategories = async (payload: CategoryProps): Promise<CategoryProps> => {
    const response = await post<{ data: CategoryProps }>('subcategories', payload);
    return response.data;
};