import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('100ms', [
          animate('.0.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
        ,
        query(':leave', stagger('100ms', [
          animate('.0.5s ease-out', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class AlbumDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => this.getAlbums(params.name));
  }

  albums: {
    artist: string
  };
  selectedAlbum: {};
  listening: {};

  ngOnInit() {}

  getAlbums(artist): void {
    this.http.get('http://localhost:4200/assets/Data.json')
    .subscribe(data => {
      this.albums = (<any>data).data.filter(item => item.artist === artist)[0];
    });
  }
  
  onSelect(album): void {
    if (album === this.selectedAlbum)
      this.selectedAlbum = {};
    else
      this.selectedAlbum = album;
  }
  
  onSongSelect(song): void {
    this.listening = {
      artist: this.albums.artist,
      song
    }
  }
}
