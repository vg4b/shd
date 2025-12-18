const fs = require("fs");
const path = require("path");

const languages = ["cs", "en", "pl", "sk", "de", "it"];
const routes = [
  "",
  "webhosting-nolimit",
  "webhosting-lowcost",
  "domains",
  "vps-on",
  "vps-ssd",
  "website",
  "disk",
  "mailhosting",
  "renewal",
];
const buildDir = path.join(__dirname, "../build");

// Create directories and copy files for all routes
languages.forEach((lang) => {
  // Handle routes differently for default language (cs) vs other languages
  if (lang === "cs") {
    // For default language, create route directories at root level
    routes.forEach((route) => {
      if (route) {
        const routeDir = path.join(buildDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.copyFileSync(
          path.join(buildDir, "index.html"),
          path.join(routeDir, "index.html")
        );
      }
    });
  } else {
    // For other languages, create language directory and route subdirectories
    const langDir = path.join(buildDir, lang);

    // Create language directory if it doesn't exist
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    // Copy index.html to language directory
    fs.copyFileSync(
      path.join(buildDir, "index.html"),
      path.join(langDir, "index.html")
    );

    // Create subdirectories for each route and copy index.html
    routes.forEach((route) => {
      if (route) {
        const routeDir = path.join(langDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.copyFileSync(
          path.join(buildDir, "index.html"),
          path.join(routeDir, "index.html")
        );
      }
    });
  }
});

console.log("Language directories and routes created successfully!");
