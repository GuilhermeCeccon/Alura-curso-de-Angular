import { NgModule } from '@angular/core';
import { PhotoComponent } from '../../photo/photo.componente';
import { PhotoListComponent } from '../photo-list.component';
import { PhotoFormComponent } from '../../photo-form/photo-form.component';
import { PhotosComponent } from './photos.component';
import { FilterByDescription } from '../filter-by-description.pipe';
import { LoadButtonComponent } from '../load-button/load-button.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosComponent,
        FilterByDescription,
        LoadButtonComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule { }