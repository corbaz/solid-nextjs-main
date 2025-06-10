#!/usr/bin/env node

/**
 * Script para ejecutar análisis REAL de SonarQube usando sonar-scanner
 * Este script usa las reglas PROPIAS de SonarQube, no solo ESLint
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔍 Ejecutando análisis REAL de SonarQube...");
console.log(
  "📋 Este script usa las reglas PROPIAS de SonarQube, no solo ESLint\n",
);

// Crear archivo sonar-project.properties si no existe
const sonarPropsPath = path.join(__dirname, "sonar-project.properties");
if (!fs.existsSync(sonarPropsPath)) {
  console.log("📝 Creando archivo sonar-project.properties...");
  const sonarConfig = `# Configuración para análisis SonarQube
sonar.projectKey=solid-nextjs
sonar.projectName=Solid Next.js
sonar.projectVersion=1.0
sonar.sources=app,components,types
sonar.exclusions=node_modules/**,reports/**,.next/**,out/**,coverage/**,*.config.js,*.config.ts,public/**
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.typescript.lcov.reportPaths=coverage/lcov.info

# Configuración específica para JavaScript/TypeScript
sonar.sourceEncoding=UTF-8

# OPCIONES para conectar a SonarQube:
# Opción 1: SonarCloud (comentar host.url)
# sonar.organization=tu-organizacion
# sonar.login=tu-token-sonarcloud

# Opción 2: SonarQube Server local (descomentar)
# sonar.host.url=http://localhost:9000
# sonar.login=tu-token-local

# Opción 3: Sin servidor (análisis local limitado)
# No configurar host.url ni login
`;
  fs.writeFileSync(sonarPropsPath, sonarConfig);
}

try {
  console.log("🚀 Ejecutando SonarQube Scanner...");
  console.log("   (Esto analizará con las reglas REALES de SonarQube)\n");

  // Ejecutar sonar-scanner
  execSync("npx sonar-scanner", {
    stdio: "inherit",
    cwd: __dirname,
  });

  console.log("\n✅ ¡Análisis SonarQube completado!");
  console.log("📊 El reporte se generó en la carpeta .scannerwork/");
} catch (error) {
  console.log("\n❌ Error en el análisis SonarQube:");
  console.log("Esto es NORMAL si no tienes SonarQube configurado.");

  console.log("\n🎯 MEJOR OPCIÓN: SonarLint en VSCode");
  console.log("   ✅ YA INSTALADO en tu VSCode");
  console.log("   ✅ Reglas REALES de SonarQube");
  console.log("   ✅ Análisis en TIEMPO REAL");
  console.log("   📋 Cómo usarlo:");
  console.log("      1. Abre cualquier archivo .ts/.tsx");
  console.log("      2. Ve los problemas marcados en rojo");
  console.log("      3. Hover para ver detalles");

  console.log("\n🌐 Para usar este script con SonarQube REAL:");
  console.log("   OPCIÓN A - SonarCloud (gratis):");
  console.log("      1. Ir a https://sonarcloud.io");
  console.log("      2. Conectar con GitHub");
  console.log("      3. Importar este proyecto");
  console.log("      4. Copiar el token");
  console.log("      5. Editar sonar-project.properties");

  console.log("\n   OPCIÓN B - SonarQube Server local:");
  console.log("      1. docker run -d -p 9000:9000 sonarqube:community");
  console.log("      2. Ir a http://localhost:9000");
  console.log("      3. Crear proyecto y token");
  console.log("      4. Editar sonar-project.properties");

  console.log("\n📊 MIENTRAS TANTO:");
  console.log("   - Usa SonarLint en VSCode (reglas REALES)");
  console.log("   - Usa npm run sonar:advanced (arreglos automáticos)");

  console.error("\n🔧 Detalles técnicos:", error.message || String(error));
}
