#!/usr/bin/env node

/**
 * Script simplificado para análisis rápido de código
 * Utiliza el linter de Next.js
 */

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

console.log("Ejecutando análisis rápido de código con Next.js lint...");

try {
  // Ejecutar el linter de Next.js para el proyecto completo
  console.log("Analizando todo el código del proyecto...");
  execSync("npx next lint --fix", {
    stdio: "inherit",
    cwd: __dirname,
  });

  console.log("\nAnálisis completado.");

  // Mostrar consejos para problemas comunes de SonarQube
  console.log("\nRecordatorio de problemas comunes detectados por SonarQube:");
  console.log("✅ Use IDs únicos en vez de índices para keys en listas React");
  console.log(
    "✅ Evite fragmentos redundantes (<> </>) cuando hay un solo elemento",
  );
  console.log("✅ Agregue atributos alt en imágenes y aria-label en enlaces");
  console.log('✅ Use componentes Link de Next.js en vez de <a href="#">');
  console.log("✅ Evite expresiones ternarias anidadas");
} catch (error) {
  console.log("El análisis encontró problemas que requieren atención.");
  // Registrar el error específico para ayudar en la depuración
  console.error("Detalles del error:", error.message || String(error));
}
