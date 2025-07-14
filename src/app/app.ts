import { Component } from '@angular/core';
import { PostItem } from './posts/post/post-item';
import { User } from '../assets/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'SocialMedia';

  users : User[] = [
    new User(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    '1-770-736-8031 x56442',
    'hildegard.org',
    {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
    ),
    new User(
      2,
      'Ervin Howell',
      'Antonette',
      'Shanna@melissa.tv',
      {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618'
        }
      },
      '010-692-6593 x09125',
      'anastasia.net',
      {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
      }
    ),
    new User(
      3,
      'Clementine Bauch',
      'Samantha',
      'Nathan@yesenia.net',
      {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653'
        }
      },
      '1-463-123-4447',
      'ramiro.info',
      {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications'
      }
    )
  ];
}
