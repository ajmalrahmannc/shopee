import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/users/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/util/block_ui/block-template.component';
import { SharedModule } from "./components/shared/shared.module";


@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BlockUIModule.forRoot({
            delayStart: 0,
            delayStop: 300,
            template: BlockTemplateComponent
        }),
        SharedModule
    ]
})
export class AppModule { }
