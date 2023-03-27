import {Hero} from '../../hero';
import {HEROES} from '../../mock-heroes';
import {MessageService} from "../message/message.service";

import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {MessageType} from "../message/message-type";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes', MessageType.SUCCESS);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(` HeroService: Fetched hero ID: ${id}`, MessageType.DEFAULT);
    return of(hero);
  }
}
