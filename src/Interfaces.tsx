export interface Tag {
  id: number;
  name: string;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  category: Category;
  tags: Tag[];
  created_at: string;
  updated_at: string;
}
