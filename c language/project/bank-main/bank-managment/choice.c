
char account_no[1000][12];
char account_holder[1000][25];
int balance[1000];
void menu();
void createaccount();
int main()
{
    menu();
     
    return 0;
}
void menu()
{
    printf("\t......WELCOME.......\n");
    printf("\tBANK MANAGEMENT SYSTEM.\n");
    printf("\tMenu given below.\n");
    printf("\tPress 1. to Create Account.\n");
    printf("\tPress 2. to Withdraw Money.\n");
    printf("\tPress 4. to Deposit Money.\n");
    printf("\tPress 5. to Check Balance.\n");
    printf("\tPress 6. to Exit.\n");
}
void createaccount()
{
    int i = 0;
    while (1)
    {
        char accountnumber[12];
        int len;
        int check = 1;
        printf("\tEnter 11 digit account number: ");
        scanf("%s", accountnumber);
        len = strlen(accountnumber);
        if (len != 11)
        {
            printf("\tInvalid! Enter exactly 11 digits.\n");
            continue;
        }
        for (int j = 0; j < len; j++)
        {
            if (!isdigit(accountnumber[j]))
            {
                check = 0;
                break;
            }
        }
        if (!check)
        {
            printf("\tInvalid! Use digits only.\n");
            continue;
        }
        int duplicate = 0;
        for (int j = 0; j<i; j++)
        {
            if (strcmp(account_no[j], accountnumber)==0)
            {
                duplicate =1;
                break;
            }
        }
        if (duplicate)
        {
        printf("\tAccount number already exists.\n");
        continue;
        }
        if(strcmp(accountnumber,"00000000000")==0)
        {
            printf("\tenter the valid digit !\n");
            continue;
        }
        strcpy(account_no[i], accountnumber);
        getchar();
    
        char holdername[25]; 
        while (1)
        {
            printf("\tEnter account holder name: ");
            scanf(" %[^\n]", holdername);  

            int checkname = 1;
            for (int j = 0; j < strlen(holdername); j++)
            {
                if (isdigit(holdername[j]))
                {
                    checkname = 0;
                    break;
                }
            }

            if (!checkname)
            {
                printf("\tInvalid name! It should not contain digits.\n");
                while (getchar() != '\n');
                continue;
            }
            strcpy(account_holder[i], holdername);
            break;
        }

        int deposit;
        while (1)
        {
            printf("\tEnter amount: ");
            if (scanf("%d", &deposit) != 1)
            {
                printf("\tInvalid input! Please enter numbers only.\n");
                while (getchar() != '\n');
                continue;
            }
            if (deposit < 500 || deposit > 100000)
            {
                printf("\tAmount must be between 500 and 100000.\n");
                continue;
            }
            balance[i]=deposit;
            printf("\ttransaction sucessfully..\n");
            break; 
        }
        printf("\taccount Created Successfully!\n");
        printf("\taccount Number : %s\n", account_no[i]);
        printf("\tHolder Name    : %s\n", account_holder[i]);
        printf("\tCurrent Balance: Rs.%d\n", balance[i]);
        i++; 
        break;
    
    }
    
}
