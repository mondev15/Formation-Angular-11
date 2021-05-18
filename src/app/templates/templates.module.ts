import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { TemplateFullWidthComponent } from './template-full-width/template-full-width.component';

@NgModule({
  declarations: [TemplateFullWidthComponent, TemplateContainerComponent],
  imports: [CommonModule],
  exports: [TemplateFullWidthComponent, TemplateContainerComponent],
})
export class TemplatesModule {}
