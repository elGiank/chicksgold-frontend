import { Component } from '@angular/core';
import { ResultCardComponent } from '../result-card/result-card.component';
import { PagerComponent } from '../pager/pager.component';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [ResultCardComponent, PagerComponent],
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.css'
})
export class ResultListComponent {

}
