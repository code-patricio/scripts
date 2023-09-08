#include <stdio.h>
#include <cs50.h>

int main (void){

    int age = get_int("Cuantos años tienes?\n");
    if ( age < 18) {
        printf("Adios\n");
    }
    else if ( age > 18) {
        printf("Hola, estas viendo porno solo? Enserio?\n");
    }
    else { 
        printf("Hola jovencito\n");
    }
}
