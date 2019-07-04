import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from '../app/app-routing.module';
import { MatDialogModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatPaginatorModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { JobsPanelComponent } from './components/jobs/jobs-panel/jobs-panel.component';
import { JobsSearchbarComponent } from './components/jobs/jobs-searchbar/jobs-searchbar.component';
import { JobsListingComponent } from './components/jobs/jobs-listing/jobs-listing.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { JobComponent } from './components/jobs/job/job.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsPanelComponent,
    JobsSearchbarComponent,
    JobsListingComponent,
    NavbarComponent,
    FooterComponent,
    JobComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule, 
    MatSelectModule, 
    MatSidenavModule, 
    MatSliderModule, 
    MatSlideToggleModule, 
    MatSnackBarModule, 
    MatSortModule, 
    MatTableModule, 
    MatTabsModule, 
    MatToolbarModule, 
    MatTooltipModule, 
    MatTreeModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }