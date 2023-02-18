// remix.config.js
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    /@ant-design\/*/,
    /@antv\/*/,
    /d3-interpolate/,
    /d3-color/,
    /lodash-es/,
  ],
};
