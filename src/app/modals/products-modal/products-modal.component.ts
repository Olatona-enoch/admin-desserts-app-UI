import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.css']
})
export class ProductsModalComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {operation : 'delete' | 'edit' | 'add' , product: Product},
    private fb: FormBuilder,
    private productsService: ProductsService,
    private dialogRef: MatDialogRef<ProductsModalComponent>
  ){}

  ngOnInit(): void {
    if (this.data.operation === 'edit' || this.data.operation === 'add') {
      this.editForm = this.fb.group (
      {
        // fileInput: [`${this.data.product.image}`, [Validators.required]],
        productName: [this.data.product?.variation || '', [Validators.required]],
        productCategory: [this.data.product?.name || '', [Validators.required]],
        productPrice: [this.data.product?.price || 0, [Validators.required]],
        productStock: ['400', [Validators.required]],

      })
    }
  }

  onSave(id: any){
    console.log("editForm", this.editForm)
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }
    const formValues = this.editForm.getRawValue();
    const editedProduct: Product = {
      id: id,
      image: this.data.product.image, // keep existing image if you don’t update it
      variation: formValues.productName,
      name: formValues.productCategory,
      price: parseFloat(formValues.productPrice), // ensure price is a number
    };
    this.productsService.updateProduct( id , editedProduct)
    .then(() => {
      console.log('Product updated successfully');
      setTimeout(() => {
        this.dialogRef.close()
          window.location.reload();
      }, 500);
    })
    .catch((err: any) => {
      console.error('Error updating product:', err);
    });
    
  }


  onDelete(id: any){
    
    this.productsService.deleteProduct(id)
    .then(() => {
      console.log('Product Deleted successfully');
      setTimeout(() => {
        this.dialogRef.close()
          window.location.reload();
      }, 500);
    })
    .catch((err: any) => {
      console.error('Error Deleting product:', err);
    });

  }

  onAdd(){
    console.log("editForm", this.editForm)
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }
    const formValues = this.editForm.getRawValue();
    const newProduct: Product = {
      image: '',
      variation: formValues.productName,
      name: formValues.productCategory,
      price: parseFloat(formValues.productPrice), // ensure price is a number
    };

    this.productsService.addProduct(newProduct)
    .then(() => {
      console.log('Product Created successfully');
      setTimeout(() => {
        this.dialogRef.close()
          window.location.reload();
      }, 500);
    })
    .catch((err: any) => {
      console.error('Error Creating product:', err);
    });

  }
}
