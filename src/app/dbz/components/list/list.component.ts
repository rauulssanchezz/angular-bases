import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: "dbz-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})

export class ListComponent {

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter<number>()

  @Input()
  public characterList: Character[] = [{name: 'Trunks', power:10}]

  onDeleteCharacter(index: number): void {
    this.onDelete.emit(index)
  }

}
