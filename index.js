/**
 * Other considerations
 * - How will we keep track of score?
 * - How will we keep track of streaks?
 * - How will we keep track of retries?
 *
 * Other functions
 * - Increment score
 * - Decrement score
 * - Make guess
 */

/**
 * @typedef {Object} Person
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {Object} headshot
 * @property {string} headshot.url
 */

/**
 * Some things we want to keep track of:
 * - Who the correct person is
 * - Who has been incorrectly guessed
 * @typedef {Object} Game
 */

/** @type {Person[]]} */
const ALL_PEOPLE = require('./data.json')

/**
 * Given a list of Person objects, listOfPeople, return an array of
 * randomly selected Persons whose length is no larger than numberToReturn.
 *
 * @param {Person[]} listOfPeople
 * @param {number} numberToReturn
 * @returns {Person[]}
 */
function getRandomPeople(listOfPeople, numberToReturn) {}

/**
 * Given a list of Persons, create a Game object which
 * you can decide how it is shaped.
 *
 * @param {Person[]} listOfPeople
 * @returns {Game}
 */
function makeGame(listOfPeople) {}

/**
 * Given the selected person the user is guessing and the game,
 * return if the  selected person is the correct answer.
 * @param {Person} selectedPerson
 * @param {Game} game
 * @returns {boolean}
 */
function isGuessCorrect(selectedPerson, game) {}
