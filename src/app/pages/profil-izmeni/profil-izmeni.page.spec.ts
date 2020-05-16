import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilIzmeniPage } from './profil-izmeni.page';

describe('ProfilIzmeniPage', () => {
  let component: ProfilIzmeniPage;
  let fixture: ComponentFixture<ProfilIzmeniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilIzmeniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilIzmeniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
