'use client';

import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, X, Plus, Minus } from 'lucide-react';
import { RatingStars } from '@/components/ui/rating-stars';
import { useState, useMemo, useEffect, useRef } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/slices/cartSlice';
import { toast } from 'sonner';
import { fbEvent } from '@/lib/fpixel';
import { ttEvent } from '@/lib/tiktok';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { useSession } from 'next-auth/react';

interface QuickViewModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.images?.[0] || '/placeholder.jpg');

  // Derive available options from variants
  const uniqueColors = useMemo(() =>
    Array.from(new Set((product.variants || []).map((v: any) => v.color))).filter(Boolean) as string[],
    [product.variants]
  );

  const uniqueSizes = useMemo(() =>
    Array.from(new Set((product.variants || []).map((v: any) => v.size))).filter(Boolean) as string[],
    [product.variants]
  );

  const prevIsOpenRef = useRef(false);

  const availableSizes = useMemo(() =>
    (product.variants || [])
      .filter((v: any) => !selectedColor || String(v.color || '').trim().toLowerCase() === String(selectedColor).trim().toLowerCase())
      .map((v: any) => v.size)
      .filter(Boolean) as string[],
    [product.variants, selectedColor]
  );

  const activeVariant = useMemo(() =>
    (product.variants || []).find(
      (v: any) =>
        String(v.color || '').trim().toLowerCase() === String(selectedColor || '').trim().toLowerCase() &&
        String(v.size || '').trim().toLowerCase() === String(selectedSize || '').trim().toLowerCase()
    ),
    [product.variants, selectedColor, selectedSize]
  );

  const hasVariants = product.variants && product.variants.length > 0;
  const currentVariant = activeVariant || (hasVariants ? product.variants[0] : null);

  const displayPrice = hasVariants && currentVariant?.price !== undefined ? Number(currentVariant.price) : Number(product.price ?? 0);
  const rawVarSale = hasVariants && currentVariant?.salePrice !== undefined && currentVariant?.salePrice !== null ? Number(currentVariant.salePrice) : undefined;
  const rawProdSale = product.salePrice !== undefined && product.salePrice !== null ? Number(product.salePrice) : undefined;
  const rawSale = hasVariants ? rawVarSale : rawProdSale;

  const hasDiscount = Boolean(rawSale !== undefined && rawSale > 0 && rawSale < displayPrice);
  const finalPrice = hasDiscount ? rawSale! : displayPrice;
  const displaySalePrice = hasDiscount ? rawSale : undefined;
  const displayStock = hasVariants ? (currentVariant?.stock ?? 0) : (product.stock ?? 0);
  const displaySku = hasVariants ? (currentVariant?.sku ?? '') : product.sku;

  const allImages = useMemo(() => {
    if (hasVariants) {
      const variantImgs = Array.from(
        new Set((product.variants || []).map((v: any) => v.image).filter(Boolean))
      ) as string[];

      if (activeVariant?.image) {
        const idx = variantImgs.indexOf(activeVariant.image);
        if (idx > -1) {
          variantImgs.splice(idx, 1);
        }
        variantImgs.unshift(activeVariant.image);
      }
      return variantImgs.length > 0 ? variantImgs : (product.images || []);
    }
    return product.images || [];
  }, [product.images, product.variants, activeVariant, hasVariants]);

  // Reset state once when modal opens
  useEffect(() => {
    if (isOpen && !prevIsOpenRef.current) {
      const defaultVar = product.variants && product.variants.length > 0 ? product.variants[0] : null;
      const initialColor = defaultVar?.color || uniqueColors[0] || null;
      setSelectedColor(initialColor);

      const initialSizes = (product.variants || [])
        .filter((v: any) => !initialColor || String(v.color || '').trim().toLowerCase() === String(initialColor).trim().toLowerCase())
        .map((v: any) => v.size)
        .filter(Boolean);
      const initialSize = defaultVar?.size || initialSizes[0] || null;
      setSelectedSize(initialSize);
      setQuantity(1);

      setActiveImage(defaultVar?.image || product.images?.[0] || '/placeholder.jpg');

      // Track ViewContent for Quick View
      const initPrice = Number(defaultVar?.price ?? product.price ?? 0);
      const initSale = (defaultVar?.salePrice !== undefined && defaultVar?.salePrice !== null && Number(defaultVar.salePrice) > 0 && Number(defaultVar.salePrice) < initPrice)
        ? Number(defaultVar.salePrice)
        : undefined;

      const viewContentPayload = {
        content_name: product.name,
        content_category: product.categories?.[0]?.name || 'Uncategorized',
        content_ids: [product._id],
        content_type: 'product',
        value: initSale || initPrice,
        currency: 'BDT'
      };
      const trackingUser = {
        em: session?.user?.email || undefined,
        ph: (session?.user as any)?.phone || undefined,
        fn: session?.user?.name || undefined
      };
      fbEvent('ViewContent', viewContentPayload, trackingUser);
      ttEvent('ViewContent', viewContentPayload, trackingUser);
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen, product?._id]);

  // Sync activeImage when active variant changes
  useEffect(() => {
    if (activeVariant?.image) {
      setActiveImage(activeVariant.image);
    } else if (hasVariants) {
      const firstVarWithImg = (product.variants || []).find((v: any) => v.image);
      setActiveImage(firstVarWithImg?.image || product.images?.[0] || '/placeholder.jpg');
    }
  }, [activeVariant, hasVariants, product.variants, product.images]);

  // Adjust selectedSize only if invalid for current selection
  useEffect(() => {
    if (selectedSize && availableSizes.length > 0) {
      const match = availableSizes.some(s => String(s).trim().toLowerCase() === String(selectedSize).trim().toLowerCase());
      if (!match) {
        setSelectedSize(availableSizes[0] || null);
      }
    }
  }, [selectedColor, availableSizes]);

  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent, redirect: boolean = false) => {
    e.preventDefault();

    dispatch(addToCart({
      productId: product._id,
      name: product.name,
      price: finalPrice,
      basePrice: displayPrice,
      quantity: quantity,
      image: activeImage,
      color: selectedColor || undefined,
      size: selectedSize || undefined
    }));

    // Track AddToCart
    const addToCartPayload = {
      content_name: product.name,
      content_category: product.categories?.[0]?.name || 'Uncategorized',
      content_ids: [product._id],
      content_type: 'product',
      value: finalPrice * quantity,
      currency: 'BDT',
      quantity: quantity
    };
    const trackingUser = {
      em: session?.user?.email || undefined,
      ph: (session?.user as any)?.phone || undefined,
      fn: session?.user?.name || undefined
    };
    fbEvent('AddToCart', addToCartPayload, trackingUser);
    ttEvent('AddToCart', addToCartPayload, trackingUser);

    if (redirect) {
      router.push('/checkout');
    } else {
      toast.success(`${product.name} added to cart`);
    }

    onClose();
  };

  const discountPercentage = displayPrice && hasDiscount
    ? Math.round(((displayPrice - finalPrice) / displayPrice) * 100)
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-5xl w-[95vw] p-0 overflow-hidden bg-white border-none rounded-none shadow-2xl [&>button:not(.custom-close)]:hidden">
        <button
          type="button"
          onClick={onClose}
          className="custom-close absolute right-4 top-4 z-[100] p-2 bg-red-500 hover:bg-red-600 text-white rounded-sm shadow-xl transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-hidden">
          {/* Left: Sticky Image Section */}
          <div className="w-full md:w-[50%] bg-[#f8f8f8] relative md:sticky md:top-0 h-fit md:h-full flex flex-col items-center justify-center border-r border-neutral-100">
            <div className="relative w-full aspect-square flex items-center justify-center p-0">
              <Image
                src={activeImage}
                alt={product.name}
                width={400}
                height={400}
                priority
                className="w-full h-full object-contain mix-blend-multiply transition-all duration-700"
              />
            </div>

            {/* Thumbnails at the bottom of sticky image */}
            {allImages?.length > 1 && (
              <div className="flex gap-2 overflow-x-auto py-4 w-full justify-center scrollbar-hide px-4 absolute bottom-0 bg-white/20 backdrop-blur-sm">
                {allImages.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`h-16 w-16 flex-shrink-0 border-2 rounded-none overflow-hidden transition-all duration-300 ${activeImage === img ? 'border-primary' : 'border-white opacity-60 hover:opacity-100'
                      }`}
                  >
                    <Image src={img} alt="" width={64} height={64} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {discountPercentage > 0 && (
              <Badge className="absolute top-6 left-6 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-none">
                SAVE {discountPercentage}%
              </Badge>
            )}
          </div>

          {/* Right: Scrollable Details Section */}
          <div className="w-full md:w-[50%] p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Product Info */}
              <div className="mb-2 flex items-center gap-2">
                <RatingStars rating={product.ratings || 5} />
                <span className="text-xs text-gray-500">({product.numReviews || 0} Reviews)</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{product.name}</h2>

              <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-gray-100">
                <span className="text-3xl font-bold text-primary">
                  ৳{Math.round(finalPrice)}
                </span>
                {hasDiscount && (
                  <span className="text-lg line-through text-gray-400">
                    ৳{Math.round(displayPrice)}
                  </span>
                )}
              </div>

              <div className="space-y-1 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-none ${displayStock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="font-medium text-gray-600">
                    {displayStock > 0 ? `In stock (${displayStock} units)` : 'Out of stock'}
                  </span>
                  {displaySku && (
                    <>
                      <span className="text-gray-300 mx-1">|</span>
                      <span className="text-gray-500 uppercase">SKU: {displaySku}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Attributes Section (Vertical) */}
              {product.attributes && product.attributes.length > 0 && (
                <div className="mb-8 space-y-4 border-t border-gray-100 pt-6">
                  {product.attributes.map((attr: any, idx: number) => {
                    const label = attr.key || attr.name || 'Feature';

                    return (
                      <div key={idx} className="flex items-center gap-4">
                        <span className="text-[10px] font-black text-neutral-400 uppercase w-24 tracking-widest">{label}:</span>
                        <span className="text-sm font-bold text-neutral-800">{attr.value}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Variations Selection */}
              <div className="space-y-6 flex-grow">
                {uniqueColors.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Color: <span className="text-gray-900">{selectedColor}</span></span>
                    <div className="flex flex-wrap gap-2">
                      {uniqueColors.map((colorName, i) => {
                        const isSelected = String(selectedColor || '').trim().toLowerCase() === String(colorName || '').trim().toLowerCase();
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={(e) => { e.preventDefault(); setSelectedColor(colorName); }}
                            className={`px-4 py-2 text-xs font-bold rounded-none border transition-all ${isSelected
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-gray-200 hover:border-gray-900 text-gray-600'
                              }`}
                          >
                            {colorName}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {uniqueSizes.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Size: <span className="text-gray-900">{selectedSize || 'Select...'}</span></span>
                    <div className="flex flex-wrap gap-2">
                      {uniqueSizes.map((sizeName, i) => {
                        const isAvailable = availableSizes.some(s => String(s).trim().toLowerCase() === String(sizeName).trim().toLowerCase());
                        const isSelected = String(selectedSize || '').trim().toLowerCase() === String(sizeName || '').trim().toLowerCase();
                        return (
                          <button
                            key={i}
                            type="button"
                            disabled={!isAvailable}
                            onClick={(e) => { e.preventDefault(); setSelectedSize(sizeName); }}
                            className={`min-w-[44px] px-2 py-2 text-xs font-bold rounded-none border transition-all ${isSelected
                              ? 'border-primary bg-primary/5 text-primary'
                              : !isAvailable
                                ? 'opacity-30 grayscale cursor-not-allowed bg-gray-100'
                                : 'border-gray-200 hover:border-gray-900 text-gray-600'
                              }`}
                          >
                            {sizeName}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions Section */}
            <div className="pt-8 border-t border-gray-100 mt-8 space-y-4">
              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center border border-gray-200 rounded-none bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-50 text-gray-600 disabled:opacity-50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-gray-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(displayStock > 0 ? Math.min(displayStock, quantity + 1) : quantity + 1)}
                    disabled={displayStock > 0 && quantity >= displayStock}
                    className="p-2 hover:bg-gray-50 text-gray-600 disabled:opacity-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Add to Cart */}
                <Button
                  type="button"
                  onClick={(e) => handleAddToCart(e, false)}
                  disabled={displayStock <= 0}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-11 rounded-none shadow-none flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  ADD TO CART
                </Button>

                {/* Buy Now */}
                <Button
                  type="button"
                  onClick={(e) => handleAddToCart(e, true)}
                  disabled={displayStock <= 0}
                  variant="outline"
                  className="flex-1 bg-black hover:bg-neutral-800 text-white font-bold h-11 rounded-none border-black hover:text-white flex items-center justify-center gap-2"
                >
                  BUY NOW
                </Button>

                {/* Wishlist */}
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-none border-gray-200 hover:border-gray-900 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
