
import apiClient from './apiClient';

export interface Todo {
    id?: number;
    title: string;
    description?: string;
    status: 'Ej påbörjad' | 'Pågående' | 'Avklarad';
}

export const getTodos = async () => {
    try {
        const response = await apiClient.get<{ message: string; tasks: Todo[] }>('');
        return response.data.tasks; // Returnera listan av uppgifter
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
};

export const createTodo = async (todo: Todo) => {
    try {
        const response = await apiClient.post<Todo>('/', todo);
        return response.data;
    } catch (error) {
        console.error('Error creating todo:', error);
        throw error;
    }
};
  
export const updateTodo = async (id: number, updatedTodo: Partial<Todo>) => {
    try {
        const response = await apiClient.put<Todo>(`/${id}`, updatedTodo);
        return response.data;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};
  
export const deleteTodo = async (id: number) => {
    try {
        await apiClient.delete(`/${id}`);
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
}; 