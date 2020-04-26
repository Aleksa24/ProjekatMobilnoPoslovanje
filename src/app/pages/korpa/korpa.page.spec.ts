import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KorpaPage } from './korpa.page';

describe('KorpaPage', () => {
  let component: KorpaPage;
  let fixture: ComponentFixture<KorpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorpaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KorpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
