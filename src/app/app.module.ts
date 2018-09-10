import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgxSpinnerModule} from 'ngx-spinner';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { MiniPlayerComponent } from './header/mini-player/mini-player.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { SectionThreeVideoOneComponent } from './section-three/section-three-video-one/section-three-video-one.component';
import { SectionFourComponent } from './section-four/section-four.component';
import { SectionFiveComponent } from './section-five/section-five.component';
import { SectionFiveVideoTwoComponent } from './section-five/section-five-video-two/section-five-video-two.component';
import { SectionSixComponent } from './section-six/section-six.component';
import { ModalCaptureComponent } from './modal-capture/modal-capture.component';
import { SectionSevenComponent } from './section-seven/section-seven.component';
import { SectionSevenVideoThreeComponent } from './section-seven/section-seven-video-three/section-seven-video-three.component';
import { SectionEightComponent } from './section-eight/section-eight.component';
import { SectionNineComponent } from './section-nine/section-nine.component';
import { SectionNineVideoFourComponent } from './section-nine/section-nine-video-four/section-nine-video-four.component';
import { SectionTenComponent } from './section-ten/section-ten.component';
import { SectionElevenComponent } from './section-eleven/section-eleven.component';
import { SectionElevenVideoFiveComponent } from './section-eleven/section-eleven-video-five/section-eleven-video-five.component';
import { SectionTwelveComponent } from './section-twelve/section-twelve.component';
import { SectionFourteenComponent } from './section-fourteen/section-fourteen.component';
import { CarouselPlayerComponent } from './section-fourteen/carousel-player/carousel-player.component';
import { CarouselOneDirective } from './section-fourteen/carousel-one.directive';
import { SectionFifteenComponent } from './section-fifteen/section-fifteen.component';
import { CarouselTwoDirective } from './section-fifteen/carousel-two.directive';
import { CarouselPlayerTwoComponent } from './section-fifteen/carousel-player-two/carousel-player-two.component';
import { AccordionComponent } from './section-fifteen/accordion/accordion.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';
import { PreloaderComponent } from './preloader/preloader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    MiniPlayerComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionThreeVideoOneComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionFiveVideoTwoComponent,
    SectionSixComponent,
    ModalCaptureComponent,
    SectionSevenComponent,
    SectionSevenVideoThreeComponent,
    SectionEightComponent,
    SectionNineComponent,
    SectionNineVideoFourComponent,
    SectionTenComponent,
    SectionElevenComponent,
    SectionElevenVideoFiveComponent,
    SectionTwelveComponent,
    SectionFourteenComponent,
    CarouselPlayerComponent,
    CarouselOneDirective,
    SectionFifteenComponent,
    CarouselTwoDirective,
    CarouselPlayerTwoComponent,
    AccordionComponent,
    SectionFooterComponent,
    PreloaderComponent,
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    FontAwesomeModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbAccordionModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [NgxSpinnerModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
