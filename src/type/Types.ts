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







export type ProfilType = {
  items: Items[];
  length: number;
  limit: number;
  page: number;
  totalItems: number;
};

 type Items = {
  createdAt: number;
  items: Items2[];
  customerId: number;
  id: number;
  status: number;
  totalPrice: number;
};

 type Items2 = {
  id: number;
  orderId: number;
  price: number;
  product: Product;
  productId: number;
  quantity: number;
};

 type Product = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
};
