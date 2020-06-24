import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiadoPage } from './miado.page';

describe('MiadoPage', () => {
  let component: MiadoPage;
  let fixture: ComponentFixture<MiadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
