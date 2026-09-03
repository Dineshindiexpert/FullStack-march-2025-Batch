
#include <stdio.h>

int main()
{
    int stno;

    printf("Enter how many students to input data: ");
    scanf("%d", &stno);

    int hindi[stno];
    int eng[stno];
    char name[3][10]; 
    int math[stno];
    int sci[stno];

    for (int k = 0; k < stno; k++)
    {
        printf("\nEnter the name of student : " );
        
        scanf(" %s[^\n]", name[k]);

        printf("Enter Hindi marks for %s: ", name[k]);
        scanf("%d", &hindi[k]);

        printf("Enter English marks for %s: ", name[k]);
        scanf("%d", &eng[k]);
        printf("ente maths marks for %s:", name[k]);
        scanf("%d", &math[k]);
        printf("enter sci marks for %s :", name[k]);
        scanf("%d", &sci[k]);
        
    }

    printf("\noutput/n");
    printf("\nprocessing..\n");
    printf("\nStudent Marks:\n");

    for (int k = 0; k < stno; k++)
    {
        printf("Student %s - Hindi: %d, English: %d, Maths: %d,scienc: %d\n", name[k], hindi[k], eng[k],math[k],sci[k]);
    }

    return 0;
}
