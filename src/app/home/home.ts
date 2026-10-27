import { Component } from '@angular/core';
import { ListDonkey } from '../list-donkey/list-donkey';
import { UserDonkey } from '../user-donkey/user-donkey';

@Component({
  imports: [ListDonkey, UserDonkey],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
