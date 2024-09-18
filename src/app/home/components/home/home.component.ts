import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RecognizeComponent } from "../recognize/recognize.component";
import { MessageComponent } from "../message/message.component";
import { PreviewComponent } from "../preview/preview.component";
import { SendCopyComponent } from "../send-copy/send-copy.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DashboardComponent,
    RecognizeComponent,
    MessageComponent,
    PreviewComponent,
    SendCopyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
