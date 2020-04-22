import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProizvodiPage } from './proizvodi.page';

describe('ProizvodiPage', () => {
  let component: ProizvodiPage;
  let fixture: ComponentFixture<ProizvodiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProizvodiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProizvodiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
