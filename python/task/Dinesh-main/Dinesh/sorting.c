#include<stdio.h>
int main()
{




    int num[5] = {1,2,3,4,5};
    int temp;

    printf("start\n");
    for(int i=0;i<5-1-i;i++)
    {
        for(int j=0;j<5-1;j++)
        {
            if (num[i]<num[i+1])
            {
                temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;
            }
        
            else
            {
            continue;
            }
        }
        
         
    }
    printf("after sorting here");
    printf("\n output \n");
    for(int i=0;i<5;i++)
    {
        printf("%d", num[i]);

    }
    
    return 0;
}