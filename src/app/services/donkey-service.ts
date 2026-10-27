import { Service, signal } from '@angular/core';
import { Donkey } from '../models/donkey';

@Service()
export class DonkeyService {
  // Collection globale : les donkeys disponibles à l'adoption
  availableDonkeys = signal<Donkey[]>([]);

  // Collection de l'utilisateur : les donkeys adoptés
  adoptedDonkeys = signal<Donkey[]>([]);

  // Ajoute un donkey à la collection globale
  addDonkey(donkey: Donkey): void {
    this.availableDonkeys.update((list) => [...list, donkey]);
  }

  // Déplace un donkey de la collection globale vers celle de l'utilisateur
  adoptDonkey(donkey: Donkey): void {
    this.adoptedDonkeys.update((list) => [...list, donkey]);
    this.availableDonkeys.update((list) => list.filter((d) => d !== donkey));
  }
}
