@echo off
setlocal enabledelayedexpansion

:: Archivo que contiene la lista de extensiones
set "extensions_file=PackageList.txt"

:: Verifica si el archivo de extensiones existe
if not exist "%extensions_file%" (
  echo El archivo "%extensions_file%" no existe.
  exit /b 1
)

:: Función para instalar las extensiones
:install_extensions
for /f "delims=" %%a in (%extensions_file%) do (
  npm install "%%a" --save
)

echo Extensiones instaladas correctamente.
:: Espera a que el usuario presione una tecla
pause
exit /b 0