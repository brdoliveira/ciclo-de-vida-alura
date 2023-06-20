import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'input-item',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  valorItem! : string;
  editando: Boolean = false;
  textoBtn : string = 'Salvar Item'

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = 'Editar item'
      this.valorItem = this.itemQueVaiSerEditado?.nome
    }

  }

  adicionarItem(){
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo()
  }

  limparCampo(){
    this.valorItem = '';
  }

  editarItem(){
    this.listaService.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem)
    this.limparCampo()
    this.editando = false;
    this.textoBtn = "Salvar Item"
  }
}
