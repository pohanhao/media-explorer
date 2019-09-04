import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExplorerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ExplorerSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ExplorerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExplorerSharedModule {
  static forRoot() {
    return {
      ngModule: ExplorerSharedModule
    };
  }
}
