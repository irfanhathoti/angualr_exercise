
import { Pipe, PipeTransform } from '@angular/core'; import { Category } from './parent-child/child'; @Pipe({ name: 'categoryfilter' }) export class CategoryfilterPipe implements PipeTransform { transform(customerChild: Category[], productId: string): Category[] { if (!productId) { return customerChild; } return customerChild.filter(customerChild => customerChild.productId == productId); } }

