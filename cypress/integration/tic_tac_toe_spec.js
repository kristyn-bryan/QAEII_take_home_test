describe('Detect the initial setup of the app', function () {
    it ('loads the webiste', () => {
      let url = 'https://hip-warm-methane.glitch.me/'
         cy.visit(url, {
           headers: {
               'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
           },
           timeout: 60000
       });
     }
   )

    it('sets the game board up', () => {
    // check the correct amount of boxes are on board.
    // check that they're empty
    cy.get('section.container')
      .children()
      .should('have.length', 9)
      .and('be.empty')
    // check that there is a reset button
    cy.contains('Reset')
      .should('be.visible')
   })
})

describe('Allows for correct game play', function () {
    it('acknowledges the correct player', () => {
    // correct letter is displayed in the box when clicked
    cy
      .get('section.container').first()
      .click()
      .then(($cont) => {
        cy
          .wrap($cont)
          .invoke('val')
          .should('eq','X') // NOTE:not yet working, but want it to check for the value of X

        //determine if Play O's turn
        cy
          .get('span.display-player')
          .should('have.class', 'playerO')
      })
   })
})

describe('Game can be reset', function () {
    it('resets the game state when the reset button is pressed', () => {
      //NOTE: With more time, I would have reference the "sets the board game up" test
      // check the correct amount of boxes are on board.
      // check that they're empty
      cy
        .contains('Reset')
        .click()
        .then(($cont) => {
          cy.get('section.container')
            .children()
            .should('have.length', 9)
            .and('be.empty')
          // check that there is a reset button
          cy.contains('Reset')
            .should('be.visible')
      })
   })
})


//NOTE: Next test if I had more time
  // if someone has 3 in a row,
  //THEN acknoledges that the game is over
  // AND note of who the winner is
  // AND not allow any more moves

    //it('acknowledges a win', () => {

    //})
