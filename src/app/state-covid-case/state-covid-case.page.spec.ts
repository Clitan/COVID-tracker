import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StateCovidCasePage } from './state-covid-case.page';

describe('StateCovidCasePage', () => {
  let component: StateCovidCasePage;
  let fixture: ComponentFixture<StateCovidCasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCovidCasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StateCovidCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
