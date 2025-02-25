export interface ICategory {
  _id: string;
  name: string;
  description: string;
  image: string;
}

export interface ICategoryToCreate {
  name: string;
  description: string;
  image: string;
}