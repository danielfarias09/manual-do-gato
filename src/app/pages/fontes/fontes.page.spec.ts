import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FontesPage } from './fontes.page';

describe('FontesPage', () => {
  let component: FontesPage;
  let fixture: ComponentFixture<FontesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FontesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
