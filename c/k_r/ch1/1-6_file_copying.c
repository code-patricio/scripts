#include <stdio.h>

main() {
    printf("Escribe algo:\n");
    
    int bolean = getchar() != -1;
    printf("bolean es igual a: %d\n", bolean);
}
