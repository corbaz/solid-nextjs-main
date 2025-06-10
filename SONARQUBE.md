# SonarQube Setup y Análisis de Código

Este documento explica cómo usar los diferentes scripts de análisis de código y las **diferencias importantes** entre ESLint y SonarQube.

## 🔍 DIFERENCIA CLAVE: ESLint vs SonarQube

### **ESLint/Next.js Lint** (lo que usan la mayoría de nuestros scripts)
- ✅ Reglas de **JavaScript/TypeScript** estándar
- ✅ Reglas de **React y Next.js**
- ✅ Problemas de **accesibilidad** básicos
- ✅ **Variables no utilizadas**, imports incorrectos
- ❌ **NO** tiene todas las reglas de SonarQube

### **SonarQube REAL** (reglas propias de SonarQube)
- ✅ **Todas las reglas de ESLint** + muchas más
- ✅ Detección de **vulnerabilidades de seguridad**
- ✅ **Code smells** avanzados
- ✅ **Complejidad ciclomática**
- ✅ **Duplicación de código**
- ✅ **Cobertura de tests**

## 📋 Scripts Disponibles

### 1. `npm run lint` - Básico (solo reporta)
```bash
npm run lint
```
- **Qué hace**: `next lint` (sin --fix)
- **Reglas**: ESLint + Next.js
- **Arregla automáticamente**: ❌ NO
- **Uso**: Ver problemas sin modificar código

### 2. `npm run sonar:check` - Rápido con arreglos
```bash
npm run sonar:check
```
- **Qué hace**: `next lint --fix` + consejos
- **Reglas**: ESLint + Next.js
- **Arregla automáticamente**: ✅ SÍ
- **Uso**: Desarrollo diario

### 3. `npm run sonar:advanced` - Estricto con arreglos
```bash
npm run sonar:advanced
```
- **Qué hace**: `next lint --max-warnings 0 --fix`
- **Reglas**: ESLint + Next.js (cero tolerancia)
- **Arregla automáticamente**: ✅ SÍ
- **Uso**: Antes de commits/deploy

### 4. `npm run sonar:real` - **VERDADERO SonarQube** 🆕
```bash
npm run sonar:real
```
- **Qué hace**: `sonar-scanner` (reglas REALES de SonarQube)
- **Reglas**: **TODAS las reglas de SonarQube**
- **Arregla automáticamente**: ❌ NO (solo reporta)
- **Uso**: Análisis completo de calidad
- **Requiere**: SonarQube Server o SonarCloud

### 5. `npm run sonar:verify` - **Verificar SonarLint** 🆕
```bash
npm run sonar:verify
```
- **Qué hace**: Crea archivo de prueba para verificar SonarLint
- **Uso**: Comprobar que SonarLint funciona en VSCode
- **Genera**: `sonar-test-example.tsx` con problemas intencionados

### 6. `npm run sonar:clean` - Limpieza
```bash
npm run sonar:clean
```
- Elimina archivos temporales y reportes

## 🎯 ¿Cómo usar las reglas REALES de SonarQube?

### **Opción 1: SonarLint en VSCode** (RECOMENDADO - YA INSTALADO)
- **✅ Fácil**: Ya tienes SonarLint instalado
- **✅ Tiempo real**: Ve problemas mientras escribes código
- **✅ Reglas reales**: Usa las reglas PROPIAS de SonarQube
- **Cómo verificarlo**: 
  1. Ejecuta `npm run sonar:verify`
  2. Abre el archivo `sonar-test-example.tsx` creado
  3. Deberías ver líneas rojas/amarillas marcadas por SonarLint
  4. Hover sobre ellas para ver detalles

### **Opción 2: Ejecutar `npm run sonar:real`**
- **⚠️ Más complejo**: Requiere configuración adicional
- **🖥️ Necesitas**: SonarQube Server local o SonarCloud
- **📊 Reportes completos**: Genera reportes detallados

### **Opción 3: SonarCloud online**
- Ir a [sonarcloud.io](https://sonarcloud.io)
- Conectar con GitHub
- Importar este proyecto
- Análisis automático en cada push

## 🚀 Workflow Recomendado

1. **Desarrollo diario**: `npm run sonar:check`
2. **Antes de commit**: `npm run sonar:advanced`
3. **Verificar SonarLint**: `npm run sonar:verify` (crear archivo de prueba)
4. **Análisis profundo**: Usar **SonarLint en VSCode** (tiempo real)
5. **Reportes completos**: `npm run sonar:real` (si tienes SonarQube configurado)
6. **Limpiar archivos**: `npm run sonar:clean`

## 📊 Resumen de Reglas

| Script               | Reglas ESLint | Reglas SonarQube Reales | Auto-fix |
| -------------------- | ------------- | ----------------------- | -------- |
| `lint`               | ✅             | ❌                       | ❌        |
| `sonar:check`        | ✅             | ❌                       | ✅        |
| `sonar:advanced`     | ✅             | ❌                       | ✅        |
| `sonar:real`         | ✅             | ✅                       | ❌        |
| `sonar:verify`       | -             | -                       | -        |
| **SonarLint VSCode** | ✅             | ✅                       | ❌        |

**💡 Para el análisis MÁS completo**: Usa **SonarLint en VSCode** + `npm run sonar:advanced`
