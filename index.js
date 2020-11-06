"use strict";
// const Route1 = () => {}
// const Route2 = () => {}
// const Route3 = () => {}
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route2 = void 0;
// export { Route1, Route2, Route3 }
function Route() { }
const Route1 = () => { };
exports.Route2 = () => {
    Route1();
};
// module.exports.Route2 = Route2
(function (Route) {
    Route.Route1 = () => { };
})(Route || (Route = {}));
const Route3 = () => { };
// module.exports = Route
// export = Route
// module.exports.default = Route
exports.default = Route;
