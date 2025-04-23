export type TopKatigoriesType = {
  createdAt: string;
  description: string;
  id: number;
  name: string;
};

export type CatigoriesProductIdTYpe = {
  items:
    | []
    | {
        categoryId: number;
        createdAt: string;
        description: string;
        id: number;
        imageUrl: string;
        name: string;
        price: string;
        stock: number;
      }[];
  limit: number;
  page: number;
  totalItems: number;
};

export type ProduktType = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
};

export type CatgoriData = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
};

export type ButtonType = {
  limit: number;
  page: number;
  totalItems: number;
};

export type BAnnerType = {
  id: number;
  title: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: string;
};
