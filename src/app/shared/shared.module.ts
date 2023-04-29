import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";

const MATERIAL_MODULES = [
  MatSnackBarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatCheckboxModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatRadioModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSliderModule,
  MatMenuModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  DragDropModule,
  ScrollingModule,
  MatNativeDateModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ...MATERIAL_MODULES,
  ], exports: [...MATERIAL_MODULES, FlexLayoutModule],
  providers: [
    MatDatepickerModule, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},

  ],
})
export class SharedModule {
}
