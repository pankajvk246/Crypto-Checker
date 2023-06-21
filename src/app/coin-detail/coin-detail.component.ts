import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
  coindata: any;
  coinId!: string;
  days: number = 1;
  currency: string = 'INR';


  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val => this.coinId = val['id']);
    const z = this.activatedRoute.snapshot.paramMap.get('id')
    this.getCoinData();
  }
  getCoinData() {
    this.api.getCurrencyById(this.coinId).subscribe((res) => {
      this.coindata = res;

    })
  }

}
