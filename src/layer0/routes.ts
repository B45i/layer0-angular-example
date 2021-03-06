// This file was automatically added by Layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'
import { angularRoutes } from '@layer0/angular'
import { API_CACHE_HANDLER, SSR_CACHE_HANDLER } from './cache'
import getPrerenderRequests from './getPrerenderRequests'

export default new Router()
  .prerender(getPrerenderRequests)
  .match('/api/:build_id/:path*', API_CACHE_HANDLER)
  .match('/', SSR_CACHE_HANDLER)
  .match('/category/:name', SSR_CACHE_HANDLER)
  .match('/product/:name', SSR_CACHE_HANDLER)
  .match('/service-worker.js', ({ serveStatic }) => {
    serveStatic('dist/ngworkbox/service-worker.js')
  })
  .use(angularRoutes)
