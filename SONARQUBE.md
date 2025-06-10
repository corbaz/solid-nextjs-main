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

### 1. `npm run sonar:advanced` - **Análisis Completo** (RECOMENDADO)
```bash
npm run sonar:advanced
```
- **Qué hace**: `next lint --max-warnings 0 --fix`
- **Reglas**: ESLint + Next.js (cero tolerancia)
- **Arregla automáticamente**: ✅ SÍ
- **Consejos educativos**: ✅ SÍ
- **Uso**: Desarrollo diario y antes de commits

### 2. `npm run sonar:real` - **VERDADERO SonarQube** 🆕
```bash
npm run sonar:real
```
- **Qué hace**: `sonar-scanner` (reglas REALES de SonarQube)
- **Reglas**: **TODAS las reglas de SonarQube**
- **Arregla automáticamente**: ❌ NO (solo reporta)
- **Uso**: Análisis completo de calidad
- **Requiere**: SonarQube Server o SonarCloud

### 3. `npm run sonar:verify` - **Verificar SonarLint** 🆕
```bash
npm run sonar:verify
```
- **Qué hace**: Crea archivo de prueba para verificar SonarLint
- **Uso**: Comprobar que SonarLint funciona en VSCode
- **Genera**: `sonar-test-example.tsx` con problemas intencionados

### 4. `npm run sonar:clean` - Limpieza
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

1. **Desarrollo diario**: `npm run sonar:advanced`
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

## 🚀 Después del Push - SonarCloud Reports

### **¿Qué pasa cuando haces `git push`?**

1. **GitHub Actions se ejecuta automáticamente**
   - Detecta el push
   - Ejecuta el workflow: `.github/workflows/build.yml`
   - Usa tu token: `d85d9dbea87f243f9c948432ec4918812f629702`

2. **SonarCloud analiza el código**
   - Aplica **TODAS las reglas de SonarQube** (no solo ESLint)
   - Enfoque "Clean as You Code" - analiza código nuevo/modificado
   - Genera métricas completas

### **📊 Dónde ver los informes:**

#### **1. GitHub (Status Checks)**
```
📍 Ubicación: Tu repositorio → Actions/Commits/Pull Requests
✅ Status: SonarCloud Quality Gate (Pass/Fail)
🔗 Link: Directo al reporte en SonarCloud
```

#### **2. SonarCloud Dashboard**
```
📍 URL: https://sonarcloud.io/project/overview?id=corbaz_solid-nextjs-main
📊 Métricas:
   - 🐛 Bugs: 0 (objetivo)
   - 🔐 Security Vulnerabilities: 0 (objetivo)  
   - 🔍 Code Smells: Cantidad detectada
   - 📈 Coverage: % de tests
   - 🔄 Duplications: % de código duplicado
   - 🔢 Lines of Code: Total
```

#### **3. Notification en VS Code**
```
💡 SonarLint ya te muestra issues en tiempo real
🔄 No necesitas esperar al push para ver problemas
⚡ Feedback inmediato mientras codificas
```

### **🎯 Ejemplo de lo que verás:**

#### **GitHub Actions (después del push):**
- ✅ **SonarCloud analysis** - Build passing
- 📊 **Quality Gate** - Passed/Failed
- 🔗 **View in SonarCloud** - Link directo

#### **SonarCloud Dashboard:**
- 📈 **Reliability**: A/B/C/D/E rating
- 🔒 **Security**: A/B/C/D/E rating  
- 🔧 **Maintainability**: A/B/C/D/E rating
- 📊 **Overall Code**: Pass/Fail

#### **Detalles por tipo:**
- 🐛 **New Bugs**: 0 (gracias a nuestras refactorizaciones)
- 🔐 **New Vulnerabilities**: 0 
- 🔍 **New Code Smells**: Posibles issues nuevos detectados
- ⏱️ **New Technical Debt**: Tiempo estimado para arreglar

### **🚨 Si hay problemas nuevos:**
- GitHub mostrará ❌ en el commit
- SonarCloud te dará detalles específicos
- SonarLint en VS Code te guiará para corregir

### **✅ Clean as You Code verificado:**
- Solo analiza código **nuevo o modificado**
- No te penaliza por código legacy existente
- Enfoque en mantener calidad hacia adelante