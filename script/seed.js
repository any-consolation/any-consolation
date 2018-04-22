/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const { User, Article } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({ email: 'bongo@email.com', name: 'bongo', isVerified: true, isAdmin: true, password: '123' }),
    User.create({ email: 'autarch@email.com', name: 'autarch', isVerified: true, isAdmin: false, password: '123'})
  ])

  const articles = await Promise.all([
    Article.create({
      title: 'Hoot Rips',
      tagLine: 'This shit rips',
      content: 'have you heard about hoot? it owns',
      isAnonymous: false,
      isPublished: true,
      userId: 1
    }),
    Article.create({
      title: 'the new DJ boring Album',
      tagLine: 'this is so good',
      content: 'I\'m listening to it right now and it is some of the sickest shit I\'ve ever heard. no fake.',
      isAnonymous: false,
      isPublished: true,
      userId: 2
    })
  ])

    // Wowzers! We can even `await` on the right-hand side of the assignment operator
    // and store the result that the promise resolves to in a variable! This is nice!
    console.log(`seeded ${users.length} users`)
    console.log(`seeded ${articles.length} articles`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
