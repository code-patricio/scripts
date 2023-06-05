#include <stdio.h>

main() {

    int c, nl, b, tab;

    nl=0;
    b=0;
    tab=0;

    while ((c = getchar()) != EOF) {
        if (c == '\n') {
            ++nl;
        } else if (c == '\t') {
            ++tab;
        } else if (c == ' ') {
            ++b;
        }
    } printf("nl = %d, tab = %d, b = %d\n", nl, tab, b);

    return 0;
}

