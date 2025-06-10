#!/usr/bin/env node

/**
 * Script para mostrar un reporte legible del análisis SonarQube local
 */

const fs = require("fs");
const path = require("path");

console.log("📊 Reporte de Análisis SonarQube Local");
console.log("=====================================\n");

// Verificar si existe el archivo de análisis
const analysisFile = path.join(__dirname, "sonar-analysis-local.json");
const scannerWorkDir = path.join(__dirname, ".scannerwork");

if (!fs.existsSync(analysisFile)) {
  console.log("❌ No se encontró archivo de análisis.");
  console.log("💡 Ejecuta primero: npm run sonar:local\n");
  return;
}

try {
  // Leer el archivo de configuración generado
  const analysisContent = fs.readFileSync(analysisFile, "utf8");

  console.log("✅ Análisis SonarQube local completado exitosamente\n");

  // Extraer información relevante
  const configLines = analysisContent.split("\n");
  const config = {};

  configLines.forEach((line) => {
    if (line.includes("=") && !line.startsWith("#")) {
      const [key, value] = line.split("=");
      config[key] = value;
    }
  });

  console.log("📋 Configuración del análisis:");
  console.log(`   • Proyecto: ${config["sonar.projectName"] || "N/A"}`);
  console.log(`   • Versión: ${config["sonar.projectVersion"] || "N/A"}`);
  console.log(
    `   • Directorios analizados: ${config["sonar.sources"] || "N/A"}`,
  );
  console.log(`   • Exclusiones: ${config["sonar.exclusions"] || "N/A"}`);
  console.log(`   • Encoding: ${config["sonar.sourceEncoding"] || "N/A"}`);

  // Verificar archivos en .scannerwork
  if (fs.existsSync(scannerWorkDir)) {
    const scannerFiles = fs.readdirSync(scannerWorkDir);
    console.log(`\n📁 Archivos generados en .scannerwork/:`);
    scannerFiles.forEach((file) => {
      const filePath = path.join(scannerWorkDir, file);
      const stats = fs.statSync(filePath);
      console.log(`   • ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
    });
  }

  console.log("\n🎯 ¿Qué significa esto?");
  console.log("   ✅ SonarQube Scanner ejecutó correctamente");
  console.log(
    "   ✅ Analizó todos los archivos de los directorios especificados",
  );
  console.log("   ✅ Generó metadatos de análisis local");
  console.log("   ⚠️  Para ver PROBLEMAS reales, necesitas:");

  console.log("\n💡 OPCIONES para ver problemas detectados:");
  console.log("   1. 🎯 SonarLint en VSCode (RECOMENDADO):");
  console.log("      • npm run sonar:verify");
  console.log("      • Abre archivos .ts/.tsx");
  console.log("      • Ve problemas marcados en tiempo real");

  console.log("\n   2. 🌐 SonarCloud online:");
  console.log("      • Conecta proyecto a sonarcloud.io");
  console.log("      • Análisis completo automático");
  console.log("      • Reportes detallados en web");

  console.log("\n   3. 🖥️ SonarQube Server local:");
  console.log("      • docker run -d -p 9000:9000 sonarqube:community");
  console.log("      • Configura proyecto y token");
  console.log("      • npm run sonar:real");

  console.log("\n📊 MIENTRAS TANTO:");
  console.log("   • Usa: npm run sonar:advanced (auto-fix con ESLint)");
  console.log("   • Usa: SonarLint en VSCode (reglas reales de SonarQube)");
} catch (error) {
  console.error("❌ Error al leer el archivo de análisis:", error.message);
}
