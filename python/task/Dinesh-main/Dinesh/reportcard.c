#include<stdio.h>
int main()
{
    

int rows, cols;
while (1 )
{
    
    printf("Enter the number of rows: ");
    scanf(" %d", &rows);
    if (rows>0 && rows<11)
    break;

    printf("enter valid order.");
    
}
while (1)
    {
    printf("enter the no of  column.");
    scanf( "%d", &cols);
    if(cols>0 && cols<11)
    break;
    printf("please enter valid order");
    }
 
     
     
    int matrix[rows][cols];

     
    printf("Enter the elements of the matrix:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
             
            scanf("%d", &matrix[i][j]);
        }
    }

     
    printf("\nThe entered matrix is:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}

    



 