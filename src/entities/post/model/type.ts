export interface ITag {
  id: number;
  name: string;
  description: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  category: ICategory;
  tags: ITag[];
  created_at: string;
  updated_at: string;
}

export type ICreatePost = Pick<IPost, 'title' | 'content'> & {
  category_id: number;
  tag_ids: number[];
};

export type IUpdatePost = Pick<IPost, 'title' | 'content'> & {
  category_id: number;
  tag_ids: number[];
};
