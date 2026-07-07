// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Layout Directives
// Services
import {
  ContentAnimateDirective,
  FirstLetterPipe,
  GetObjectPipe,
  HeaderDirective,
  JoinPipe,
  MenuDirective,
  OffcanvasDirective,
  SafePipe,
  ScrollTopDirective,
  SparklineChartDirective,
  StickyDirective,
  TabClickEventDirective,
  TimeElapsedPipe,
  ToggleDirective
} from './_base/layout';

// NOTE: CoreModule is kept during migration for components that still import it.
// Each directive/pipe should eventually be made standalone and imported directly.
@NgModule({
    declarations: [
        // directives
        ScrollTopDirective,
        HeaderDirective,
        OffcanvasDirective,
        ToggleDirective,
        MenuDirective,
        TabClickEventDirective,
        SparklineChartDirective,
        ContentAnimateDirective,
        StickyDirective,
        // pipes
        TimeElapsedPipe,
        JoinPipe,
        GetObjectPipe,
        SafePipe,
        FirstLetterPipe,
    ],
    imports: [CommonModule],
    exports: [
        // directives
        ScrollTopDirective,
        HeaderDirective,
        OffcanvasDirective,
        ToggleDirective,
        MenuDirective,
        TabClickEventDirective,
        SparklineChartDirective,
        ContentAnimateDirective,
        StickyDirective,
        // pipes
        TimeElapsedPipe,
        JoinPipe,
        GetObjectPipe,
        SafePipe,
        FirstLetterPipe,
    ],
    providers: []
})
export class CoreModule {
}
