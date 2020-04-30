import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProizvodPage } from './add-proizvod.page';

describe('AddProizvodPage', () => {
  let component: AddProizvodPage;
  let fixture: ComponentFixture<AddProizvodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProizvodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProizvodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
