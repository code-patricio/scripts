#include <cs50.h>
#include <stdio.h>

int main(void) {

    string name = get_string("Hola, cual es tu nombre?\n");
    printf("Bienvenido %s.\n", name);
    int age = get_int("Cual es tu edad?");
    printf("Crees que a los %i ya estas anciano?\n", age);
}
