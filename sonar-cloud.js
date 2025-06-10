#!/usr/bin/env node

/**
 * Script para ejecutar análisis con SonarCloud
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🌐 Análisis SonarCloud");
console.log("=====================\n");

const cloudPropsPath = path.join(__dirname, "sonar-project-cloud.properties");

if (!fs.existsSync(cloudPropsPath)) {
  console.log("❌ No se encontró configuración de SonarCloud");
  console.log("💡 Archivo esperado: sonar-project-cloud.properties\n");
  return;
}

// Leer configuración
const configContent = fs.readFileSync(cloudPropsPath, "utf8");
const hasOrganization =
  configContent.includes("sonar.organization=") &&
  !configContent.includes("TU_ORGANIZACION_AQUI");
const hasToken =
  configContent.includes("sonar.login=") &&
  !configContent.includes("TU_TOKEN_AQUI");

if (!hasOrganization || !hasToken) {
  console.log("⚠️ Configuración de SonarCloud incompleta");
  console.log("\n📋 PASOS PARA CONFIGURAR:");
  console.log("1. 🌐 Ve a https://sonarcloud.io");
  console.log("2. 🔑 Login con GitHub");
  console.log("3. ➕ Importa tu proyecto 'solid-nextjs-main'");
  console.log("4. 📝 Copia estos datos:");
  console.log("   • Organization key");
  console.log("   • Project key");
  console.log("   • Personal token (Account → Security)");
  console.log("5. ✏️ Edita sonar-project-cloud.properties");
  console.log("6. 🔄 Ejecuta de nuevo: npm run sonar:cloud");

  console.log("\n💡 MIENTRAS TANTO:");
  console.log("   • SonarCloud analizará automáticamente en cada push");
  console.log("   • Ve reportes en: https://sonarcloud.io/projects");
  console.log("   • Usa SonarLint en VSCode para análisis local");

  return;
}

try {
  console.log("🚀 Ejecutando análisis SonarCloud...");
  console.log("📤 Enviando código para análisis completo...\n");

  execSync(`npx sonar-scanner -Dproject.settings=${cloudPropsPath}`, {
    stdio: "inherit",
    cwd: __dirname,
  });

  console.log("\n✅ ¡Análisis enviado a SonarCloud!");
  console.log("📊 Ve los resultados en: https://sonarcloud.io/projects");
} catch (error) {
  console.log("\n❌ Error en el análisis SonarCloud:");
  console.log("Esto puede deberse a:");
  console.log("  1. 🔑 Token incorrecto o expirado");
  console.log("  2. 🏢 Organization/Project key incorrectos");
  console.log("  3. 🌐 Problemas de conexión");

  console.log("\n💡 SOLUCIONES:");
  console.log(
    "  1. 🔄 Verifica configuración en sonar-project-cloud.properties",
  );
  console.log("  2. 🆕 Genera nuevo token en SonarCloud");
  console.log("  3. 🌐 Ve reportes automáticos en sonarcloud.io");

  console.error("\n🔧 Error técnico:", error.message || String(error));
}
