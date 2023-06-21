import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() dadosItem!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void { }

  onDestroy(): void {
    console.log("Item Deletado")
   }

  editarItem(): void {
    this.emitindoItemParaEditar.emit(this.dadosItem);
  }

  deletarItem(): void {
    this.emitindoIdParaDeletar.emit(this.dadosItem.id);
  }

  checarItem() {
    this.dadosItem.comprado = !this.dadosItem.comprado;
  }

}
