const fs = require("fs");
const path = require("path");

const languages = ["cs", "en", "pl", "sk", "de"];
const routes = [
  "",
  "webhosting-nolimit",
  "webhosting-lowcost",
  "vps",
  "website",
  "disk",
  "mailhosting",
  "renewal",
];
const buildDir = path.join(__dirname, "../build");

// Create language directories and copy files
languages.forEach((lang) => {
  // Skip 'cs' as it's the default language and doesn't need a prefix
  if (lang === "cs") {
    return;
  }

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
});

console.log("Language directories and routes created successfully!");
