import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    ignores: ["backup/**", "node_modules/**"]
  },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser, 
        ...globals.node,
        // Google Apps Script globals
        SpreadsheetApp: "readonly",
        Logger: "readonly",
        HtmlService: "readonly",
        PropertiesService: "readonly",
        UrlFetchApp: "readonly",
        DriveApp: "readonly",
        ScriptApp: "readonly"
      } 
    },
    rules: {
      "no-case-declarations": "warn"  // Convert to warning instead of error
    }
  },
  // Jest environment for test files
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
]);
