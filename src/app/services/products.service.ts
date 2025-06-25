import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Product {
  id?: number;
  image?: string;
  name: string;
  variation: string;
  price: number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private firestore: Firestore
  ) { }
  
  getProducts(): Observable<Product[]> {
    const productsRef = collection(this.firestore, 'products');
    return collectionData(productsRef, { idField: 'id' }) as Observable<Product[]>;
  }

  updateProduct(id: string, product: Product ) : any{
    const productDocRef = doc(this.firestore, 'products', id);
    return updateDoc(productDocRef, {
      // image: product.image,
      name: product.name,
      variation: product.variation,
      price: product.price,

    });
  }

  deleteProduct(id: string) : any{
    const productDocRef = doc(this.firestore, 'products', id);
    return deleteDoc(productDocRef)
  }

  addProduct(product: Product){
    const productsRef = doc(collection(this.firestore, 'products'));
    const id = productsRef.id
    const productsRefWithId = { ...product, id }
    return setDoc(productsRef, productsRefWithId);
  }
}