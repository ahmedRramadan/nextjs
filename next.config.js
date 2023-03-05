const path=require("path");
const withOffline = require("next-offline");
const withTM = require("next-transpile-modules");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");
require("dotenv").config({ path: ".env" });

const getEnv = phase => {
  if (phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1") {
    return "PROD";
  } else if (phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1") {
    return "STAGING";
  } else if (phase === PHASE_DEVELOPMENT_SERVER) {
    return "DEV";
  }
};

console.debug(`Building Next with NODE_ENV="${process.env.NODE_ENV}"`);

module.exports = phase => {
  return withBundleAnalyzer(withTM(
    withOffline({
      env: {
        ENV: getEnv(phase),
        APP_TYPE: "PRO"
      },
      transpileModules: [
        "@thepro/common",
        "@thepro/core",
        "@thepro/context",
        "@thepro/actions",
        "@thepro/common-web"
      ],
      webpack: config => {
        config.resolve.alias['Components']= path.join(__dirname, './src/components/');
        return config;
      }
    })
  ));
};
