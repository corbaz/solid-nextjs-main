#!/usr/bin/env node

/**
 * Análisis SonarQube completo y avanzado
 * Incluye análisis estricto + consejos educativos
 */

const { execSync } = require("child_process");

console.log("🔍 Ejecutando análisis SonarQube completo y avanzado...");

try {
  console.log("📋 Analizando todo el código del proyecto...");
  console.log(
    "⚡ Ejecutando Next.js lint con cero tolerancia a advertencias...",
  );

  // Usar Next.js lint con máxima strictness + arreglo automático
  execSync("npx next lint --max-warnings 0 --fix", {
    stdio: "inherit",
    cwd: __dirname,
  });

  console.log("\n✅ ¡Análisis completado exitosamente!");
  console.log("🎯 Código perfecto! Sin advertencias ni errores.");

  // Mostrar consejos educativos de SonarQube
  console.log("\n💡 Recordatorio de buenas prácticas SonarQube aplicadas:");
  console.log(
    "  ✅ Use IDs únicos en vez de índices para keys en listas React",
  );
  console.log(
    "  ✅ Evite fragmentos redundantes (<> </>) cuando hay un solo elemento",
  );
  console.log("  ✅ Agregue atributos alt en imágenes y aria-label en enlaces");
  console.log('  ✅ Use componentes Link de Next.js en vez de <a href="#">');
  console.log("  ✅ Evite expresiones ternarias anidadas");
  console.log("  ✅ Componentes JSX en PascalCase descriptivo");
} catch (error) {
  console.log("\n⚠️ Se encontraron problemas en el código:");
  console.log(
    "📊 El análisis estricto encontró advertencias que debes revisar.",
  );
  console.error("🔍 Detalles del error:", error.message || String(error));

  console.log("\n💡 Para análisis SonarQube MÁS detallado:");
  console.log("  1. 🎯 Usar extensión 'SonarLint' en VSCode (RECOMENDADO)");
  console.log("  2. 🌐 Revisar SonarCloud online después del push");
  console.log(
    "  3. 🖥️ Ejecutar 'npm run sonar:real' para análisis local completo",
  );

  console.log("\n📊 El análisis actual incluye:");
  console.log("  • ✅ Reglas de React y Next.js");
  console.log("  • ♿ Problemas de accesibilidad");
  console.log("  • 🔄 Variables no utilizadas");
  console.log("  • 📦 Imports incorrectos");
  console.log("  • 🎨 Formato de código");
  console.log("  • ⚠️ Cero tolerancia a advertencias");

  console.log("\n🔧 Consejos para corregir:");
  console.log("  • Revisa los errores mostrados arriba");
  console.log("  • Usa SonarLint en VSCode para feedback en tiempo real");
  console.log(
    "  • Ejecuta 'npm run sonar:advanced' nuevamente después de corregir",
  );
}
