import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {
  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]')
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string): Item{
    return {
      id: this.listaDeCompra.length + 1,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
  }

  adicionarItemNaLista(nomeDoItem: string) {
    let item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item)
    //this.atualizarLocalStorage()
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string){
    const itemEditado : Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: itemAntigo.comprado 
    }

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado)
    //this.atualizarLocalStorage()
  }

  atualizarLocalStorage(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra))
  }
}
