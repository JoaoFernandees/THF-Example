import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  static rooms = [
    {
      'text': 'Doca 1', 'color': '#ff0080', 'value': 1
    },
    {
      'text': 'Doca 2', 'color': '#0080c0', 'value': 2
    },
    {
      'text': 'Doca 3', 'color': '#0080c0', 'value': 3
    },
    {
      'text': 'Doca 4', 'color': '#0080c0', 'value': 4
    }
  ];
  constructor(private http: HttpClient) { }

  getRooms() {
    return of(RoomService.rooms);
  }

  saveRoom(room) {
    if (room.value) {
      RoomService.rooms = RoomService.rooms.map(filterRoom => {
        if (filterRoom.value === room.value) {
          filterRoom = room;
        }
        return filterRoom;
      });
    } else {
      RoomService.rooms.push({
        text: room.text,
        color: room.color,
        value: RoomService.rooms.length + 1
      });
    }

    return of(RoomService.rooms);
  }

  updateRoom(room) {
    return this.saveRoom(room);
  }

  deleteRoom(value) {
    RoomService.rooms = RoomService.rooms.filter(room => {
      if (room.value !== value) {
        return room;
      }
    });

    return of(RoomService.rooms);
  }
}
