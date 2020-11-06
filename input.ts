function Route() {}

namespace Route {
  export const RouteA = () => {}
  export type FirstArgRouteA = number
  const RouteB = () => {}
}

interface Group {
  name?: string
}

const group: Group = {}

;( async () => {
  await new Promise( resolve => resolve() )
} )()
