import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddIngredient() {
    const nameVal = this.nameInputRef.nativeElement.value;
    const amountVal = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameVal, amountVal);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
