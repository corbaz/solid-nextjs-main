#!/usr/bin/env node

/**
 * Script para ejecutar análisis SonarQube LOCAL standalone
 * Recorre TODOS los archivos automáticamente sin necesidad de servidor
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔍 Ejecutando análisis SonarQube LOCAL standalone...");
console.log("📋 Recorre TODOS los archivos automáticamente (como ESLint)\n");

// Crear archivo sonar-project.properties optimizado para análisis local
const sonarPropsPath = path.join(__dirname, "sonar-project.properties");
console.log("📝 Configurando análisis local standalone...");

const sonarConfig = `# Configuración para análisis SonarQube LOCAL standalone
sonar.projectKey=solid-nextjs-local
sonar.projectName=Solid Next.js Local Analysis
sonar.projectVersion=1.0

# Directorios a analizar (como ESLint)
sonar.sources=app,components,types
sonar.exclusions=node_modules/**,reports/**,.next/**,out/**,coverage/**,*.config.js,*.config.ts,public/**,**/*.d.ts

# Configuración específica para JavaScript/TypeScript
sonar.sourceEncoding=UTF-8
sonar.javascript.file.suffixes=.js,.jsx
sonar.typescript.file.suffixes=.ts,.tsx

# MODO LOCAL - Sin servidor (análisis standalone)
# Comentar estas líneas para análisis local
# sonar.host.url=http://localhost:9000
# sonar.login=token

# Configuración para análisis local detallado
sonar.verbose=true
sonar.log.level=INFO
`;

fs.writeFileSync(sonarPropsPath, sonarConfig);

try {
  console.log("🚀 Ejecutando SonarQube Scanner en modo LOCAL...");
  console.log("   📁 Analizando: app/, components/, types/");
  console.log("   ⚡ Modo standalone (sin servidor)\n");
  // Ejecutar sonar-scanner en modo local
  const scannerCommand =
    "npx sonar-scanner -Dsonar.scanner.dumpToFile=sonar-analysis-local.json";

  execSync(scannerCommand, {
    stdio: "inherit",
    cwd: __dirname,
  });

  console.log("\n✅ ¡Análisis SonarQube LOCAL completado!");
  console.log("📊 Resultados guardados en:");
  console.log("   • .scannerwork/ (archivos de análisis)");
  console.log("   • sonar-analysis-local.json (dump local)");
} catch (error) {
  console.log(
    "\n⚠️ El análisis local completo requiere configuración adicional.",
  );
  console.log("Pero tenemos ALTERNATIVAS que SÍ funcionan localmente:\n");

  console.log("🎯 OPCIÓN 1: SonarLint en VSCode (RECOMENDADO)");
  console.log("   ✅ Análisis AUTOMÁTICO de todos los archivos");
  console.log("   ✅ Reglas REALES de SonarQube");
  console.log("   ✅ Muestra problemas MIENTRAS escribes");
  console.log("   📋 Cómo verificar:");
  console.log("      1. npm run sonar:verify");
  console.log("      2. Abre archivos .ts/.tsx");
  console.log("      3. Ve problemas marcados automáticamente");

  console.log("\n🚀 OPCIÓN 2: Análisis por lotes con ESLint + SonarJS");
  console.log("   ✅ Recorre TODOS los archivos automáticamente");
  console.log("   ✅ Algunas reglas de SonarQube");
  console.log("   ✅ Auto-fix disponible");
  console.log("   📋 Comando:");
  console.log("      npm run sonar:advanced");

  console.log("\n🌐 OPCIÓN 3: SonarCloud (análisis completo online)");
  console.log("   ✅ TODAS las reglas de SonarQube");
  console.log("   ✅ Análisis automático en cada push");
  console.log("   ✅ Reportes detallados");
  console.log("   📋 Setup:");
  console.log("      1. Ir a sonarcloud.io");
  console.log("      2. Conectar con GitHub");
  console.log("      3. Importar proyecto");

  console.log("\n💡 RECOMENDACIÓN PRÁCTICA:");
  console.log("   • Desarrollo: SonarLint en VSCode (tiempo real)");
  console.log("   • Build: npm run sonar:advanced (auto-fix)");
  console.log("   • CI/CD: SonarCloud (análisis completo)");

  console.error("\n🔧 Error técnico:", error.message || String(error));
}
