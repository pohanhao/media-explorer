import { NgModule } from '@angular/core';

import { ExplorerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ExplorerSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ExplorerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ExplorerSharedCommonModule {}
