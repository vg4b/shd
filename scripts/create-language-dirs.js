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
  "wordpress-hosting",
  "website",
  "disk",
  "mailhosting",
  "renewal",
  "blog",
  "blog/wordpress-hosting-lowcost-vs-nolimit",
  "blog/vps-on-vs-vps-ssd",
  "blog/jak-vybrat-domenu-a-neudelat-chybu",
  "blog/how-to-choose-wordpress-hosting-2026",
  "blog/jak-wybrac-vps-na-start",
  "blog/ako-vybrat-webhosting-pre-firemny-web",
  "blog/domain-fuer-unternehmen-auswaehlen",
  "blog/hosting-wordpress-guida-rapida",
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
          path.join(routeDir, "index.html"),
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
      path.join(langDir, "index.html"),
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
          path.join(routeDir, "index.html"),
        );
      }
    });
  }
});

// Create 404.html as a copy of index.html for better routing support on static hosts
fs.copyFileSync(
  path.join(buildDir, "index.html"),
  path.join(buildDir, "404.html"),
);

console.log("Language directories, routes, and 404.html created successfully!");
