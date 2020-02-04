import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialHeaderComponent } from './special-header/special-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  entryComponents: [SpecialHeaderComponent],
  declarations: [SpecialHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class SharedModule { }
