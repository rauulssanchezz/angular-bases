import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: "dbz-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})

export class ListComponent {

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter<string>()

  @Input()
  public characterList: Character[] = [{id: '0',name: 'Trunks', power:10}]

  onDeleteCharacter(id:string): void {
    this.onDelete.emit(id)
  }

}
