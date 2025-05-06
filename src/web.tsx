import { Hono } from 'hono'
import { jsxRenderer } from "hono/jsx-renderer"
import App from './client/App'

const web = new Hono()

web.use("*", 
  jsxRenderer(
  ({children}) => {
    return (
    <html lang='en'>
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <script
            type="module"
            src={
              import.meta.env.PROD
                ? "/assets/index.js"
                : "/src/client/index.tsx"
            }
          />
          <title>Hono SSR</title>
        </head>
        <body>
          {children}
        </body>
    </html>
  );
  },
  {docType: true}
))

web.get('/', (c) => {
  return c.render(
    <div id="root" data-root>
      <App />
    </div>)
})

web.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})

web.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Custom Error Message', 500)
})

export default web;