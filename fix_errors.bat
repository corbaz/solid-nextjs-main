@echo off  
setlocal EnableDelayedExpansion  
for %%f in (components\Auth\Signin.tsx components\Auth\Signup.tsx components\Contact\index.tsx components\CTA\index.tsx components\FAQ\index.tsx components\FunFact\index.tsx components\Pricing\index.tsx) do (  
  powershell -Command "(Get-Content %%f) -replace '\}\;\s*export default', '}\r\n\r\nexport default' | Set-Content %%f"  
  powershell -Command "(Get-Content %%f) -replace '\)\;\s*\}', ');\r\n};' | Set-Content %%f"  
  powershell -Command "(Get-Content %%f) -replace '\s+\)\;\s*\}', '\r\n  );\r\n};' | Set-Content %%f"  
) 
