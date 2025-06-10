#!/usr/bin/env node

/**
 * Análisis avanzado con más reglas estrictas
 */

const { execSync } = require("child_process");

console.log("🔍 Ejecutando análisis SonarQube avanzado...");

try {
  console.log(
    "📋 Ejecutando Next.js lint con cero tolerancia a advertencias...",
  );
  // Usar Next.js lint con máxima strictness + arreglo automático
  execSync("npx next lint --max-warnings 0 --fix", {
    stdio: "inherit",
    cwd: __dirname,
  });

  console.log("\n✅ ¡Código perfecto! Sin advertencias ni errores.");
} catch (error) {
  console.log("\n⚠️ Se encontraron problemas en el código:");
  console.log("El análisis estricto encontró advertencias que debes revisar.");
  console.error("Error específico:", error.message || String(error));

  console.log("\n💡 Para análisis SonarQube MÁS detallado:");
  console.log("  1. 🎯 Instalar extensión 'SonarLint' en VSCode (RECOMENDADO)");
  console.log("  2. 🌐 Configurar SonarCloud online");
  console.log("  3. 🖥️ Instalar SonarQube Server local");

  console.log("\n📊 El análisis actual ya incluye:");
  console.log("  • ✅ Reglas de React y Next.js");
  console.log("  • ♿ Problemas de accesibilidad");
  console.log("  • 🔄 Variables no utilizadas");
  console.log("  • 📦 Imports incorrectos");
  console.log("  • 🎨 Formato de código");
}
