// const Route1 = () => {}
// const Route2 = () => {}
// const Route3 = () => {}

// export { Route1, Route2, Route3 }

function Route() {}

type Props1 = {}
export interface Props2 {}
interface Props3 {}
const Route1 = () => {}

export const Route2 = () => {
  Route1()
}
// module.exports.Route2 = Route2
namespace Route {
  export const Route1 = () => {}
}
const Route3 = () => {}

// module.exports = Route
// export = Route

// module.exports.default = Route
export default Route
