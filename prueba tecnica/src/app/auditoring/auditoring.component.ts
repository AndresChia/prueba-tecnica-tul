import { Component } from '@angular/core';
import DetailsService from 'src/services/details/details.service';

@Component({
  selector: 'app-auditoring',
  templateUrl: './auditoring.component.html',
  styleUrls: ['./auditoring.component.css'],
})
export default class AuditoringComponent {
  constructor(private detailsService: DetailsService) {}

  getData() {
    return this.detailsService.getDetail(12);
  }

  sum(numA: number, numB: number) {
    return numA + numB;
  }
}
