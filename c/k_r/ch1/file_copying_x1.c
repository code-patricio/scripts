#include <stdio.h>

int main() {
    int bolean = getchar() != EOF;
    printf("%d", bolean);
    int c;
    while ((c = getchar()) != EOF)
        putchar(c);
}
