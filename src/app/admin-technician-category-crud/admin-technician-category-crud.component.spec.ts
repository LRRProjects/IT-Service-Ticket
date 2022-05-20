import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AdminTechnicianCategoryCrudComponent } from "./admin-technician-category-crud.component";

describe("AdminTechnicianCategoryCrudComponent", () => {
  let component: AdminTechnicianCategoryCrudComponent;
  let fixture: ComponentFixture<AdminTechnicianCategoryCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTechnicianCategoryCrudComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTechnicianCategoryCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
