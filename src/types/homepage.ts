export interface HomepageType {
  heroSection: {
    preTitle: string;
    title: string;
    desc: string;
  };
  departmentInfo: string;
}

export interface ProductCategory {
  name: string;
  slug: string;
}

export type ProductSize = ProductCategory;

export interface ProductType {
  id: string;
  title: string;
  type: string;
  description: string;
  filename: `${number}.jpg`;
  size: string;
  price: number;
  information: string;
}

export interface BlogType {
  id: string;
  title: string;
  published: string;
  excerpt: string;
  image: string;
}
