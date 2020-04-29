import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProizvodPage } from './proizvod.page';

describe('ProizvodPage', () => {
  let component: ProizvodPage;
  let fixture: ComponentFixture<ProizvodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProizvodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProizvodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
