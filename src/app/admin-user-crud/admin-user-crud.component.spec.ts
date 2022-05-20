import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminUserCRUDComponent } from "./admin-user-crud.component";

describe("AdminUserCRUDComponent", () => {
  let component: AdminUserCRUDComponent;
  let fixture: ComponentFixture<AdminUserCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserCRUDComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
