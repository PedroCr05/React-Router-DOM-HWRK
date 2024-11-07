const firstError =
  "hook.js:608 ⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition. Error Component Stack at BrowserRouter (react-router-dom.js?v=7c843ddc:5226:5)";

const secondError =
  " React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath. Error Component Stack at BrowserRouter (react-router-dom.js?v=7c843ddc:5226:5)";

console.log(`First Error:${firstError}${/r/}Second Error:${secondError}`);
