#!bin/bash

if [ -z "$1" ]; then
echo "Proporciona un nombre para el directorio principal"
exit 1
fi

directory="$1"

mkdir "$directory"

cd "$directory"

mkdir teoria
mkdir tps
mkdir clases

cd clases

mkdir unidad1
mkdir unidad2
mkdir unidad3
mkdir unidad4
mkdir unidad5
mkdir unidad6
mkdir unidad7
mkdir unidad8

cd ..

echo "University class directory created"


