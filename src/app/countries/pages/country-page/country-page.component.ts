import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRout: ActivatedRoute,
    private countriesService: CountriesService
  ){}

  ngOnInit(): void {
    this.activatedRout.params
    .subscribe( ({id}) => {

      this.countriesService.searchCountryByAlphaCode(id)
      .subscribe (country => {
        console.log({country})
      });

    });
  }

}
