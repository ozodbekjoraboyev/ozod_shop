export type TopKatigoriesType = {
    createdAt: string;
    description: string;
    id: number;
    name: string;
  };

  export type CatigoriesProductIdTYpe = {
    items: | [] | {
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




  export type ProduktIdType = {
    categoryId: number;
    createdAt: string;
    description: string;
    id: number;
    imageUrl: string;
    name: string;
    price: string;
    stock: number;
  };
  

  
export type CardsDataType = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  stock: number;
};

export type BAnnerType = {
  id: number;
  title: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: string;
};