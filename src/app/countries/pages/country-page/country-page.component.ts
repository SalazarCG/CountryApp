import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRout: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.activatedRout.params
    .pipe(
      switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode( id )),
    )
    .subscribe ( country => {

      if( !country) return this.router.navigateByUrl('');
      return this.country = country;

    });
  }

}
