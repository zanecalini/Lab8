describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', ()=>{

    cy.get('#volume-number').clear().type('75');

    cy.get('#volume-slider').then(function($el){
      expect($el).to.have.value(75);
    })
  })

  it('Input changes when volume slider changes', ()=>{

    cy.get('#volume-slider').invoke('val', 33).trigger('input')

    cy.get('#volume-number').then(function($el){
      expect($el).to.have.value(33)
    })

  })
  it('Input changes when volume slider changes', ()=>{

    cy.get('#volume-slider').invoke('val', 33).trigger('input')

    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.prop('volume', .33)
    })

  })
  it('sound + img sources change when radio chagnes', ()=>{

    cy.get('#radio-car-horn').click()

    cy.get('#sound-image').then(function($el){
      expect($el).to.have.prop('src','http://127.0.0.1:5500/Part2-Cypress/assets/media/images/car.svg')
    })

    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/car-horn.mp3')
    })

  })

  it('image changes when volume go up', ()=>{

    cy.get('#volume-number').clear().type('0')
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src', `http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg`)
    })

    cy.get('#volume-number').clear().type('10')
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src', `http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg`)
    })

    cy.get('#volume-number').clear().type('50')
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src', `http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg`)
    })

    cy.get('#volume-number').clear().type('80')
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src', `http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg`)
    })

  })

  it('btn disabled when input is wrong', ()=>{

    cy.get('#volume-number').clear()
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.attr("disabled")
    })

    cy.get('#volume-number').clear().type('a')
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.attr("disabled")
    })
  })

  it('Err when range is exceeded', ()=>{

    cy.get('#volume-number').clear().type('1111')
    cy.get('input:invalid').then(function($el){
      expect($el).to.have.attr("1111")
    })
  })





})
