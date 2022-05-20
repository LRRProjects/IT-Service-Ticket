import { ITServiceTicketPage } from "./app.po";

describe("it-service-ticket App", () => {
  let page: ITServiceTicketPage;

  beforeEach(() => {
    page = new ITServiceTicketPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to app!");
  });
});
