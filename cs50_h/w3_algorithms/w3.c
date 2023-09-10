#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string names[] = {"Pato", "Gabo"};
    string numbers[] = {"+54-420", "+54-666"};

   string n = get_string("Name: ");
   for (int i = 0; i < 2; i++)
   {
       if (strcmp(names[i], n) == 0)
       {
           printf("Found %s\n", numbers[i]);
           return 0;
       }
   }
   printf("Not Found\n");
   return 1;

}



/*
   string strings[] = {"battle", "boot", "cannon", "iron", "thimble", "tophat", "duck"};

   string s = get_string("String: ");
   for (int i = 0; i < 7; i++)
   {
   if (strcmp(strings[i], s) == 0)
   {
   printf("Found\n");
   return 0;
   }
   }
   printf("Not Found\n");
   return 1;
   */

/* Searching numbers
int numbers[] = {20, 500, 10, 5, 100, 1, 50};

int n = get_int("Number: ");
for (int i = 0; i < 7; i++)
{
    if (numbers[i] == n)
    {
        printf("Found\n");
        return 0;
    }
}
printf("Not Found\n");
return 1;
*/

