import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Sangat: use the preinstalled headless Chromium in this environment (no download).
// Remove this line on a machine where Remotion can fetch its own browser.
if (process.env.REMOTION_BROWSER) Config.setBrowserExecutable(process.env.REMOTION_BROWSER);
// The sandbox proxies HTTPS with its own CA, which headless Chromium rejects (the examples fetch Google Fonts).
if (process.env.REMOTION_IGNORE_CERTS) Config.setChromiumIgnoreCertificateErrors(true);
