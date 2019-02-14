import { MatCardModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatTabsModule } from '@angular/material';
import { CodeviewerComponent } from './codeviewer/codeviewer.component';
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  declarations: [
    CodeviewerComponent
  ],
  exports: [
    CodeviewerComponent
  ]
})
export class UtilModule { }
