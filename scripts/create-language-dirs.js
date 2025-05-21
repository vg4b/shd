const fs = require("fs");
const path = require("path");

const languages = ["cs", "en", "pl", "sk", "de"];
const buildDir = path.join(__dirname, "../build");

// Read the original index.html
const indexContent = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

// Create language files and directories
languages.forEach((lang) => {
  // Create the directory version (e.g., /de/)
  const langDir = path.join(buildDir, lang);
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }

  // Create index.html in the language directory
  fs.writeFileSync(
    path.join(langDir, "index.html"),
    // Update the lang attribute and add canonical link
    indexContent
      .replace('<html lang="en"', `<html lang="${lang}"`)
      .replace(
        "</head>",
        `  <link rel="canonical" href="https://slevy-hosting-domeny.cz/${lang}/" />\n</head>`
      )
  );

  // Create the direct language file (e.g., /de)
  fs.writeFileSync(
    path.join(buildDir, lang),
    // Create a file without extension that serves as both file and directory index
    indexContent
      .replace('<html lang="en"', `<html lang="${lang}"`)
      .replace(
        "</head>",
        `  <link rel="canonical" href="https://slevy-hosting-domeny.cz/${lang}/" />\n</head>`
      )
  );
});

console.log("Language files and directories created successfully!");
