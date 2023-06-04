#include <stdio.h>

main() {
    int bolean = getchar() == EOF;
    printf("%d\n", bolean);
    int c;
    while ((c = getchar()) != EOF) {
        putchar(c); 
    }
}
