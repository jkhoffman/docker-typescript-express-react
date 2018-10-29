import express from 'express'
import ip from 'ip'
import morgan from 'morgan'
import { bright, yellow } from './utils/console'

const IS_DEV = process.env.NODE_ENV === 'development' ? true : false
const PORT = process.env.PORT || 3001

const mode = IS_DEV ? 'development' : 'production'
console.log(yellow(`Starting the ${mode} server...\n`))

const app = express()

app.use(morgan(IS_DEV ? 'dev' : 'common'))

app.listen(PORT, () => {
  console.log(`✓ The ${bright('server')} is now listening at:`)
  console.log('')
  console.log(`  ${bright('Local:')}            http://localhost:${PORT}`)
  console.log(`  ${bright('On Your Network:')}  http://${ip.address()}:${PORT}`)
  console.log('')
  if (IS_DEV) {
    console.log(`To create a production build, use ${yellow('npm run build')}.`)
    console.log('')
  }
})
