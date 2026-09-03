#include <stdio.h>

int main()
{
    printf("welcome to SBI Bank\n");
    int a=3;
    while (a!=0)
    {
        
        int card;
        int pin;
        printf("enter your card number:");
     
     
        scanf("%d",&card);
        printf("enter pin:");
        scanf("%d",&pin);
        if (card==9896 && pin==7896)
        {
            printf("sucessfully login");
            break;
        }
        else
        {
            printf("wrong password.you have left chances =",a--);
            printf("%d\n",a);
            printf("after your card blocked your card blocked.\n");
            printf("please contact near branch. imediately.\n");
        
        
        }
        
    
    
    
    
 

    
    } 
    return 0;
}