import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/internal/Subscription';
import { IArtikl } from '../models/artikl.model';
import { IStavka } from '../models/stavka.model';
import { IRacun } from '../racun';
import { ArtiklService } from '../services/artikl.service';
import { RacunService } from '../services/racun.service';
import { StavkaService } from '../services/stavka.service';

@Component({
  selector: 'app-edit-outputs',
  templateUrl: './edit-outputs.component.html',
  styleUrls: ['./edit-outputs.component.css']
})
export class EditOutputsComponent implements OnInit {
  closeResult:string='';
  id:number = 0;
  racun!: IRacun;
  artikl: any;
  stavka: IStavka;
  public artikli : IArtikl[] = [];
  private routeSub!: Subscription;
  constructor(private _racunService: RacunService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private _artiklService: ArtiklService,
    private _stavkaService: StavkaService) { 
      this.artikl = null; 
      this.stavka = new IStavka();
    }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id=params['id'] //log the value of id
    });
    this._racunService.getRacunById(this.id).subscribe(data => this.racun = data);
    this._artiklService.getArtikli()
        .subscribe(data => this.artikli = data);
  }
  getArtiklById(id: any){
    console.log(id);
    this._artiklService.getArtiklById(id).subscribe(data => this.artikl = data);
    this.modalService.dismissAll();
  }
  addStavka(){
    this.stavka.artiklId = this.artikl.artiklId;
    this.stavka.klijentId = 1;
    this.stavka.skladisteIzlazId = 1;
    console.log(this.stavka);
    this._stavkaService.addStavka(this.stavka).subscribe(data=> this.stavka = data);
  }
  updateRacun(){
    this._racunService.updateRacun(this.racun.racunId,this.racun).subscribe(data => this.racun = data);
  }
  ToSection(id:string){
    document.getElementById(id)?.scrollIntoView();
  }
  /**Modal GetStavke */
  Get(content:any) {
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**Modal Delete */

Delete(content2:any) {
  this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}