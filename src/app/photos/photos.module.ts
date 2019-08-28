import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
    imports: [
        PhotosModule,
        PhotoFormModule,
        PhotoListComponent,

    ]
})
export class PhotosModule {

}