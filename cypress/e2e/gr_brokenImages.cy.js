var expect = chai.expect;

const IMAGES = "img";

describe("the-internet.herokuapp.com", () => {
  beforeEach("Should navigate to Broken Images Page", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get('a[href="/broken_images"]').click();
  });

  // it("Check Broken Images", () => {
  //   cy.get("img").each(($img) => {
  //     cy.wrap($img).scrollIntoView().should("be.visible");

  //     let allImagesOnThePage = cy.get(IMAGES);
  //     let count = 0;
  //     for (let i = 0; i < allImagesOnThePage.length; i++) {
  //       if (allImagesOnThePage[i].naturalHeight == 0) {
  //         count++;
  //       }
  //     }
  //     expect(count).to.equal(2);
  //   });
  // });

  it("Test Broken Images", function () {
    cy.get("img").each(($img) => {
      cy.wrap($img).scrollIntoView().should("be.visible")
      // expect($img[1].naturalHeight).to.equal(0);
      // expect($img[2].naturalHeight).to.equal(0);
      // expect($img[3].naturalHeight).to.be.greaterThan(0);
    });
  });
});
