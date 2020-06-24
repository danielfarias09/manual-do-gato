import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinguagemCorporalPage } from './linguagem-corporal.page';

describe('LinguagemCorporalPage', () => {
  let component: LinguagemCorporalPage;
  let fixture: ComponentFixture<LinguagemCorporalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguagemCorporalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinguagemCorporalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
