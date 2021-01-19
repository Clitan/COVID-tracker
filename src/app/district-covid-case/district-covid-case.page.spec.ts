import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistrictCovidCasePage } from './district-covid-case.page';

describe('DistrictCovidCasePage', () => {
  let component: DistrictCovidCasePage;
  let fixture: ComponentFixture<DistrictCovidCasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictCovidCasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictCovidCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
