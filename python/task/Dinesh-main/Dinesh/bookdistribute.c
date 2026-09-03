#include<stdio.h>
#include<string.h>
int main()
{
    char book [3][50];
    int a=1;
    int abhinav[2][50];
    for(int i=0;i<3;i++)
    {
         printf("enter the book name : %d =",a);
         
         scanf(" %[^\n], %d", &book,a);
        a++;

    }
    for (int i=0;i<2;i++)
    {
        if(i>2)
        {
            printf("%s",abhinav[i]);
        }
        printf("%s",abhinav[i]);
    }
   

    return 0;
}