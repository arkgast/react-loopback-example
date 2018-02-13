'use strict'

const loopback = require('loopback')
const boot = require('loopback-boot')
const loopbackPassport = require('loopback-component-passport')
const PassportConfigurator = loopbackPassport.PassportConfigurator

const bodyParser = require('body-parser')

const app = module.exports = loopback()
const passportConfigurator = new PassportConfigurator(app)

boot(app, __dirname, function (err) {
  if (err) throw err
})

// -- Build provider config
let config = {}
try {
  config = require('../providers.json')
} catch (err) {
  console.trace(err)
  process.exit(1)
}

// -- Add middlewares
app.middleware('parse', bodyParser.json())
app.use(loopback.token())

passportConfigurator.init(false)

passportConfigurator.setupModels({
  userModel: app.models.user,
  userIdentityModel: app.models.userIdentity,
  userCredentialModel: app.models.userCredential
})

for (const s in config) {
  const c = config[s]
  c.session = c.session !== false
  passportConfigurator.configureProvider(s, c)
}

app.start = () => {
  return app.listen(() => {
    app.emit('started')
    var baseUrl = app.get('url').replace(/\/$/, '')
    console.log('Web server listening at: %s', baseUrl)
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath)
    }
  })
}

if (require.main === module) {
  app.start()
}
