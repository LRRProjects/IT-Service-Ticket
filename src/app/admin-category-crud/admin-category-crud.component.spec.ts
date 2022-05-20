import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminCategoryCrudComponent } from "./admin-category-crud.component";

describe("AdminCategoryCrudComponent", () => {
  let component: AdminCategoryCrudComponent;
  let fixture: ComponentFixture<AdminCategoryCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCategoryCrudComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
