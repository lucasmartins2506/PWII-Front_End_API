import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { ProjetoApiService } from '../service/projeto-api.service';
import { Projeto } from '../model/projeto';

@Component({
  selector: 'has-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {

  formProjeto : FormGroup

  constructor( public FormBuilder : FormBuilder, private service : ProjetoApiService ) { }

  ngOnInit() {
    this.formProjeto = this.FormBuilder.group({
      nome : this.FormBuilder.control (""),
      sala :  this.FormBuilder.control (""),
      turma :  this.FormBuilder.control (""),
      orientadores :   this.FormBuilder.control ("")
    })
  }

  onSalvar()
  {
    let projeto :  Projeto = this.formProjeto.value;
    this.service.createProjeto(projeto)
                .subscribe(data => console.log(data),
                            error => console.log(error));
  } 

}
