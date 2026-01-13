@echo off
setlocal enabledelayedexpansion

:askFolder
set "baseDir=%cd%"
set /p "folder=Enter folder name to be listed (case-insensitive): "
rem trim leading and trailing spaces
for /f "tokens=* delims= " %%A in ("%folder%") do set "folder=%%A"
for /l %%I in (1,1,100) do if "!folder:~-1!"==" " set "folder=!folder:~0,-1!"
set "targetPath=%baseDir%\%folder%"

if not exist "%targetPath%" (
    echo Folder not found: "%folder%"
    echo Please try again.
    echo.
    goto askFolder
)

rem make safe name (replace spaces with -)
set "safeFolder=%folder: =-%"
(
    echo [
    set "firstLine=1"
    for /r "%targetPath%" %%F in (*) do (
        rem skip .json files
        if /i not "%%~xF"==".json" (
            set "relPath=%%F"
            set "relPath=!relPath:%targetPath%\=!"
            if defined firstLine (
                set "prev=!relPath:\=\\!"
                set "firstLine="
            ) else (
                echo     "!prev!",
                set "prev=!relPath:\=\\!"
            )
        )
    )
    rem print last item without trailing comma
    if defined prev echo     "!prev!"
    echo ]
) > "%baseDir%\%folder%\%safeFolder%-images.json"

type "%baseDir%\%folder%\%safeFolder%-images.json"
echo.
echo Listed successfully to %safeFolder%-images.json!
echo The program will close in 10 seconds... (press any key to exit sooner)
timeout /t 10 >nul
exit
