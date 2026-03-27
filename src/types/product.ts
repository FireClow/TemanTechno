export type ProductCategory = "home" | "wellness" | "laundry";

export interface Product {
  title: string;
  slug: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  category: ProductCategory;
}
