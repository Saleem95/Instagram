describe("Instagram Stories", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // Change this URL if needed
    // cy.visit("https://insta-ss.netlify.app/"); 

  });

  it("should load stories", () => {
    cy.get(".storyThumbnail").should("have.length.at.least", 1);
  });

  it("should open a story when clicked", () => {
    cy.get(".storyThumbnail").first().click();
    cy.get(".storyOverlay").should("exist");
  });

  it("should close a story when clicked outside", () => {
    cy.get(".storyThumbnail").first().click();
    cy.get(".storyOverlay").click();
  });

  it("should navigate to the next story", () => {
    cy.get(".storyThumbnail").first().click();
    cy.get(".navAreaRight").click();
    cy.get(".storyImage").should("have.attr", "src");
  });
});
