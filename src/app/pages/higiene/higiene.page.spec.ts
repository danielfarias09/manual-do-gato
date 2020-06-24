import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HigienePage } from './higiene.page';

describe('HigienePage', () => {
  let component: HigienePage;
  let fixture: ComponentFixture<HigienePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigienePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HigienePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
