let showId = 90462; // Hawkeye Show
let show;
let reviews;

describe("Tv Shows Details Page", () => {
  before(() => {
    cy.request(
        `https://api.themoviedb.org/3/tv/${showId}?api_key=${Cypress.env(
            "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((tvDetails) => {
        show = tvDetails;
        return tvDetails.id;
      });
  });
  beforeEach(() => {
    cy.visit(`/shows/${show.id}`);
  });
  describe("Base tests", () => {
    it("should display show name in the page header", () => {
        cy.get("h3").contains("Chucky");
    });

    it("should display the show's details", () => {
      cy.get("h3").contains("Overview");
      cy.get("h3").next().contains(show.overview);
      cy.get("ul")
        .eq(1)
        .within(() => {
          const genreChips = show.genres.map((g) => g.name);
          genreChips.unshift("Genres");
          cy.get("span").each(($card, index) => {
            cy.wrap($card).contains(genreChips[index]);
          });
        });
    });
    it("should display the show's poster on the left handside", () => {
        cy.get("img").should('have.css','text-align','left');
       
      });


    });
  });