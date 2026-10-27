import { Component, inject } from '@angular/core';
import { DonkeyService } from '../services/donkey-service';
import { Donkey } from '../models/donkey';

@Component({
  imports: [],
  selector: 'app-user-donkey',
  styleUrl: './user-donkey.css',
  templateUrl: './user-donkey.html',
})
export class UserDonkey {
  private donkeyService = inject(DonkeyService);

  get donkeys(): Donkey[] {
    return this.donkeyService.adoptedDonkeys();
  }
}
