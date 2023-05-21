#!/bin/bash

declare -A pomo_options
pomo_options["work"]=25
pomo_options["break"]=1

pomodoro() {
  if [ -n "$1" ] && [ -n "${pomo_options["$1"]}" ]; then
    local val=$1
    local duration=$((pomo_options["$val"] * 60))  # Convertir minutos a segundos
    echo "Iniciando sesión de $val por $((duration/60)) minutos"
    sleep $duration
    spd-say "Done"
    echo "Pomodoro CLI" "$val session done"
  else
    echo "Opción de sesión inválida"
  fi
}

if [ $# -eq 0 ]; then
  echo "Uso: $0 <work|break>"
  exit 1
fi

pomodoro "$1" &
