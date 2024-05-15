import { Component } from '@angular/core';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-test-providers',
  templateUrl: './test-providers.component.html',
  styleUrl: './test-providers.component.scss',
  providers: [ProviderService]
})
export class TestProvidersComponent {
  text: string
  constructor(private providerService: ProviderService){
    this.text = providerService.providerServiceName
  }
}
