#!/usr/bin/env node

/**
 * Script para limpiar archivos temporales
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("Limpiando archivos temporales...");

const tempFiles = [
  ".eslintrc-sonar.json",
  ".eslintrc-sonar.js",
  ".eslint-temp.json",
  ".eslint-temp.js",
  "eslint.config.sonar.js",
  "sonar-test-example.tsx",
  "sonar-project.properties",
];

const tempDirs = [".sonar_temp", ".scannerwork"];

// Eliminar archivos temporales
tempFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Eliminado: ${file}`);
    } catch (err) {
      console.error(`Error al eliminar ${file}:`, err.message);
    }
  }
});

// Eliminar directorios temporales
tempDirs.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    try {
      // En Windows usamos rmdir, en Unix rm -rf
      const isWindows = process.platform === "win32";
      if (isWindows) {
        execSync(`rmdir /s /q "${dirPath}"`, { stdio: "inherit" });
      } else {
        execSync(`rm -rf "${dirPath}"`, { stdio: "inherit" });
      }
      console.log(`Eliminado: ${dir}`);
    } catch (err) {
      console.error(`Error al eliminar ${dir}:`, err.message);
    }
  }
});

console.log("Limpieza completada.");
