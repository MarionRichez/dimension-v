import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series-dimension',
  templateUrl: './series-dimension.component.html',
  styleUrls: ['./series-dimension.component.scss'],
})
export class SeriesDimensionComponent implements OnInit {
  fragment: string;
  show = false;

  chapter = [{ id: '', title: '', paragraph: '' }];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }

  ngAfterViewChecked(): void {
    try {
      if (this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView();
      }
    } catch (e) {}
  }

  toggle() {
    this.show = !this.show;
  }
}
