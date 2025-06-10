#!/usr/bin/env node

/**
 * Script para verificar que SonarLint está funcionando en VSCode
 * y crear un ejemplo con problemas que SonarQube detecta
 */

const fs = require("fs");
const path = require("path");

console.log("🎯 Verificador de SonarLint - Reglas REALES de SonarQube");
console.log("=====================================================\n");

// Crear archivo de ejemplo con problemas que SonarQube detecta
const examplePath = path.join(__dirname, "sonar-test-example.tsx");
const exampleContent = `// ARCHIVO DE PRUEBA - SonarLint debería marcar problemas aquí
import React from 'react';

// ❌ SonarQube detecta: Unused import
import { useState, useEffect } from 'react';

// ❌ SonarQube detecta: Cognitive complexity too high
function ComplexComponent() {
  const items = [1, 2, 3, 4, 5];
  
  // ❌ SonarQube detecta: Missing key in React list
  const listItems = items.map((item) => <li>{item}</li>);
  
  // ❌ SonarQube detecta: Nested ternary operators
  const status = true ? (false ? "A" : "B") : "C";
  
  // ❌ SonarQube detecta: Magic numbers
  const result = 42 * 3.14159;
  
  // ❌ SonarQube detecta: Empty catch block
  try {
    JSON.parse("invalid");
  } catch (e) {
    // Silent catch
  }
  
  // ❌ SonarQube detecta: Console.log in production
  console.log("Debug info");
  
  return (
    <div>
      {/* ❌ SonarQube detecta: Missing alt attribute */}
      <img src="/test.jpg" />
      
      {/* ❌ SonarQube detecta: Anchor without href */}
      <a onClick={() => alert('test')}>Click me</a>
      
      <ul>{listItems}</ul>
      <p>Status: {status}</p>
      <p>Result: {result}</p>
    </div>
  );
}

export default ComplexComponent;
`;

console.log("📝 Creando archivo de ejemplo con problemas de SonarQube...");
fs.writeFileSync(examplePath, exampleContent);

console.log("✅ Archivo creado: sonar-test-example.tsx");
console.log("\n🔍 CÓMO VERIFICAR que SonarLint funciona:");
console.log("1. Abre el archivo 'sonar-test-example.tsx' en VSCode");
console.log("2. Deberías ver LÍNEAS ROJAS/AMARILLAS marcadas por SonarLint");
console.log("3. Hover sobre las líneas para ver detalles de SonarQube");

console.log("\n📋 Problemas que SonarLint DEBERÍA detectar:");
console.log("   • Import no utilizado (useState, useEffect)");
console.log("   • Falta key en lista React");
console.log("   • Operadores ternarios anidados");
console.log("   • Números mágicos (42, 3.14159)");
console.log("   • Catch block vacío");
console.log("   • console.log en producción");
console.log("   • Img sin atributo alt");
console.log("   • Anchor sin href");

console.log("\n💡 Si NO ves problemas marcados:");
console.log("   1. Verifica que SonarLint esté habilitado");
console.log("   2. Reinicia VSCode");
console.log("   3. Revisa la configuración de SonarLint");

console.log("\n🧹 Para limpiar:");
console.log("   rm sonar-test-example.tsx");

console.log("\n🎯 RECUERDA:");
console.log("   • SonarLint = Reglas REALES de SonarQube");
console.log("   • npm scripts = Solo reglas de ESLint");
console.log("   • Para análisis completo: SonarLint + npm run sonar:advanced");
