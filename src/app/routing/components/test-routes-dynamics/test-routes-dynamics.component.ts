import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-routes-dynamics',
  templateUrl: './test-routes-dynamics.component.html',
  styleUrl: './test-routes-dynamics.component.scss'
})
export class TestRoutesDynamicsComponent {
  protected slug: string | null;
  constructor(private route: ActivatedRoute) {
    this.slug = route.snapshot.paramMap.get('slug')
  }
}
