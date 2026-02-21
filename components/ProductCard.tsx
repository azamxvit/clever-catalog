'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Product, CATEGORY_LABELS, formatPrice, buildWhatsAppUrl } from '@/lib/mock-data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl(product);
    window.open(url, '_blank');
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      {/* Изображение */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-2 top-2 flex flex-col gap-2">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-sm">
            {CATEGORY_LABELS[product.category]}
          </Badge>
          {!product.inStock && (
            <Badge variant="destructive" className="bg-red-500/90 backdrop-blur-sm shadow-sm">
              Под заказ
            </Badge>
          )}
        </div>
      </div>

      {/* Контент */}
      <CardContent className="flex flex-1 flex-col p-4">
        {product.collection && (
          <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {product.collection}
          </span>
        )}
        <h3 className="text-lg font-semibold tracking-tight text-foreground leading-tight">
          {product.title}
        </h3>
        
        {product.description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Характеристики */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="font-normal">
            {product.dimensions} мм
          </Badge>
          {product.thickness && (
            <Badge variant="outline" className="font-normal">
              Толщина: {product.thickness}
            </Badge>
          )}
        </div>

        <div className="mt-auto pt-4">
          <p className="text-sm font-medium">
            от <span className="text-lg font-bold">{formatPrice(product.price)}</span> / м²
          </p>
        </div>
      </CardContent>

      {/* Футер с кнопкой */}
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors" 
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Узнать цену в WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
}