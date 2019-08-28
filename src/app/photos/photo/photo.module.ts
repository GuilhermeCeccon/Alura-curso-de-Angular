import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.componente';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [PhotoComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class PhotoModule { }