# Corre Corre Que Te Pillan - Auto APK

Este proyecto genera automáticamente un APK usando GitHub Actions.

## Cómo generar el APK

1. Crea un repositorio nuevo en GitHub.
2. Sube todos estos archivos al repositorio.
3. En GitHub entra a la pestaña **Actions**.
4. Abre el workflow **Generar APK Android**.
5. Toca **Run workflow**.
6. Espera que termine.
7. Descarga el artifact llamado:

```text
Corre-Corre-Que-Te-Pillan-APK-debug
```

Dentro estará:

```text
app-debug.apk
```

Ese APK se puede instalar en Android activando instalación desde orígenes desconocidos.

## Importante

- Este APK es **debug**, sirve para compartir y probar.
- Para Play Store se necesita APK/AAB firmado con keystore de release.
- El juego funciona offline porque todo está incluido dentro del APK.
- Los personajes son ficticios.

## Estructura

```text
.github/workflows/build-apk.yml  -> automatización para generar APK
public/index.html                -> juego completo
public/manifest.json             -> configuración tipo app
public/sw.js                     -> cache offline
public/icons/                    -> iconos
capacitor.config.json            -> configuración APK
package.json                     -> dependencias
```
