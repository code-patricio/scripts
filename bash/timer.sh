#bin/bash

if [ -z $1 ]; then
    echo "minutos?"
    exit 1
fi

m="$1"

sleep "$m"m && spd-say --rate +10 "Tik tak tik tak" & 
