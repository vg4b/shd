const fs = require("fs");
const path = require("path");

const languages = ["cs", "en", "pl", "sk", "de"];
const buildDir = path.join(__dirname, "../build");

// Create language directories and copy files
languages.forEach((lang) => {
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
});

console.log("Language directories created successfully!");
