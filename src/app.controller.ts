import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

@Get()
getHello(): string {
  return 'Hola mundo!';
 }

@Get('nuevo')
newEndpoint() {
  return 'Hola nuevo endpoint';
 }

@Get('products')
getProducts(
  @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('brand') brand: string,
) {
  return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
}

@Get('products/filter')
getProductFilter() {
  return `soy un filtro`;
 }

@Get('products/:productId')
getProduct(@Param('productId') productId: string) {
  return `product ${productId}`;
 }

@Get('categories/:id/products/:productId')
getCategory(@Param('productId') productId: string, 
            @Param('id') id: string) {
  return `product ${productId} and ${id}`;
 }
}