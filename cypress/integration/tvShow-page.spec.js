let shows;    // List of movies from TMDB

// Utility functions
const filterByTitle = (showList, string) =>
  showList.filter((s) => s.name.toLowerCase().search(string) !== -1);

const filterByGenre = (showList, genreId) =>
 showList.filter((s) => s.genre_ids.includes(genreId));

describe("Tv Shows Page ", () => {
  before(() => {
    cy.request(
        `https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&page=1`
    )
      .its("body")  
      .then((response) => {
        shows = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/shows/tvshows")
  });
  
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h3").contains("TV Shows");
        cy.get("h1").contains("Filter Shows");
      });
    });
  })



  describe("Filtering", () => {
    describe("By Show title", () => {
     it("should only display shows with h in the title", () => {
       let searchString = "h";
       let matchingShows = filterByTitle(shows, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter m in text box
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingShows.length
       );
       cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(matchingShows[index].name);
       });
     })
   

     it("should only display shows with o in the title", () => {
       let searchString = "o";
       let matchingShows = filterByTitle(shows, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter m in text box
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingShows.length
       );
       cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(matchingShows[index].name);
       });
     });
     it("shouldn't display any shows when xyz is searched", () => {
        let searchString = "xyz";
        let matchingShows = filterByTitle(shows, searchString);
        cy.get("#filled-search").clear().type(searchString); // Enter m in text box
        cy.get(".MuiCardHeader-content").should(
          "not.exist",
          matchingShows.length
        );
      });
   });

   describe("By shows genre", () => {
    it("should display shows with the specified genre only", () => {
       const selectedGenreId = 35;
       const selectedGenreText = "Comedy";
       const matchingShows = filterByGenre(shows, selectedGenreId);
       cy.get("#filled-search").clear();
       cy.get("#Tvgenre-select").click();
       cy.get("li").contains(selectedGenreText).click();
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingShows.length
       );
       cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(matchingShows[index].name);
       });
    });
   });
  });