// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://a9124b882a1d4871962318d21ead3fb9@o4505061588402176.ingest.sentry.io/4505061937184768",
  //   {
  //     release: "0-0-0",
  //     environment: "development-test",
  //   }
  // ).install();
}

function log(error) {
  // Raven.captureException(error);
  console.log(error);
}

export default {
  init,
  log,
};
