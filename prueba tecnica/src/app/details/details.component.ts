import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DetailsService from 'src/services/details/details.service';
import { Detail } from './detail';
import { delay } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export default class DetailsComponent {
  id!: number;

  todo!: Detail;

  loading: boolean = false;

  constructor(
    private detailsService: DetailsService,
    private activatedRoute: ActivatedRoute
  ) {
    // realizar estos dos llamados en una misma transaccion con
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id') ?? 1);
    this.getImage();
    this.getDetails();
  }

  getImage() {
    this.detailsService
      .getImage(this.id)
      .pipe(delay(2000))
      .subscribe((response) => {
        this.todo = { ...this.todo, image: { ...response } };
      });
  }

  getDetails() {
    this.detailsService.getDetail(this.id).subscribe((response) => {
      this.todo = { ...this.todo, ...response };
    });
  }
}
