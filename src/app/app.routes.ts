import { Routes } from '@angular/router';
import { CreateDonkey } from './create-donkey/create-donkey';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'create', component: CreateDonkey },
  { path: '', component: Home},
];
