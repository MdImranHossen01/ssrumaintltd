import dynamic from 'next/dynamic';

// --- FOOTERS ---
import FooterV1 from './footers/FooterV1';

export const FooterSelector = ({ style }: { style: string }) => {
  return <FooterV1 />;
};

// --- PRODUCT DETAILS ---
export const ProductDetailsSelector = ({ style, product }: { style: string, product: any }) => {
  return null;
};

// --- SHOP LISTING ---
export const ShopListingSelector = ({ style, productCardStyle, products, categories, searchParams }: { style: string, productCardStyle?: string, products: any[], categories: any[], searchParams: any }) => {
  return null;
};


