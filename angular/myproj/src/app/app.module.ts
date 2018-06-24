import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeAlertComponent } from './code-alert/code-alert.component';
import { JumboComponent } from './code-alert/jumbo.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { RatingComponent } from './databinding/rating.component';
import { IntrComCmnComponent } from './databinding/intr-com-cmn/intr-com-cmn.component';
import { HdrComponent } from './databinding/intr-com-cmn/hdr.component';
import { MkrComponent } from './databinding/intr-com-cmn/mkr.component';
import { LoclRefsComponent } from './locl-refs/locl-refs.component';
import { CmpLyfComponent } from './cmp-lyf/cmp-lyf.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyAttrDirective } from './directives/my-attr.directive';
import { MyStrDirective } from './directives/my-str.directive';

@NgModule({
  declarations: [
    AppComponent,
    CodeAlertComponent,
    JumboComponent,
    DatabindingComponent,
    RatingComponent,
    IntrComCmnComponent,
    HdrComponent,
    MkrComponent,
    LoclRefsComponent,
    CmpLyfComponent,
    DirectivesComponent,
    MyAttrDirective,
    MyStrDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
