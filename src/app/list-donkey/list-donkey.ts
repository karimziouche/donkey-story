import { Component, inject } from '@angular/core';
import { DonkeyService } from '../services/donkey-service';
import { Donkey } from '../models/donkey';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-list-donkey',
  styleUrl: './list-donkey.css',
  templateUrl: './list-donkey.html',
})
export class ListDonkey {
  private donkeyService = inject(DonkeyService);
  hoveredDonkey: Donkey | null = null;

  get donkeys(): Donkey[] {
    return this.donkeyService.availableDonkeys();
  }
  adopt(donkey: Donkey): void {
    this.donkeyService.adoptDonkey(donkey);
  }
}
