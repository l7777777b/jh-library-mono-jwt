import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'publisher',
        loadChildren: () => import('./publisher/publisher.module').then(m => m.JhlibrarymonojwtPublisherModule)
      },
      {
        path: 'author',
        loadChildren: () => import('./author/author.module').then(m => m.JhlibrarymonojwtAuthorModule)
      },
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.JhlibrarymonojwtClientModule)
      },
      {
        path: 'book',
        loadChildren: () => import('./book/book.module').then(m => m.JhlibrarymonojwtBookModule)
      },
      {
        path: 'borrowed-book',
        loadChildren: () => import('./borrowed-book/borrowed-book.module').then(m => m.JhlibrarymonojwtBorrowedBookModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.JhlibrarymonojwtBlogModule)
      },
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.JhlibrarymonojwtPostModule)
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then(m => m.JhlibrarymonojwtTagModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.JhlibrarymonojwtCategoryModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.JhlibrarymonojwtProductModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.JhlibrarymonojwtCustomerModule)
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then(m => m.JhlibrarymonojwtAddressModule)
      },
      {
        path: 'wish-list',
        loadChildren: () => import('./wish-list/wish-list.module').then(m => m.JhlibrarymonojwtWishListModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class JhlibrarymonojwtEntityModule {}
