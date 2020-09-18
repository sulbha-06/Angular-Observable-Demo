import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiverComponentComponent } from './receiver-component/receiver-component.component';
import { ExcelDemoComponent } from './components/excel-demo/excel-demo.component';

const routes: Routes = [
  {path:'receive' , component:ReceiverComponentComponent},
  {path:'exl', component:ExcelDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
