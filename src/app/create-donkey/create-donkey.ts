import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonkeyService } from '../services/donkey-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-create-donkey',
  styleUrl: './create-donkey.css',
  templateUrl: './create-donkey.html',
})
export class CreateDonkey {
  private donkeyService = inject(DonkeyService);

  private router = inject(Router);

  donkeyForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: Validators.required }),
    origin: new FormControl('', { nonNullable: true, validators: Validators.required}),
    birthDate: new FormControl('', { nonNullable: true, validators: Validators.required }),
    image: new FormControl('', { nonNullable: true, validators: Validators.required}),
  });

  onSubmit(): void {
    if (this.donkeyForm.invalid) {
      return;
    }
    this.donkeyService.addDonkey(this.donkeyForm.getRawValue());
    this.donkeyForm.reset();
    this.router.navigate(['/']);
  }
}
