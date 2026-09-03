 
void withdraw()
{
    char accountnumber[12];
    while (1)
    {
        printf("\tEnter 11 digit account number: ");
        scanf("%s", accountnumber);

        if (strlen(accountnumber) != 11)
        {
            printf("\tInvalid! Enter exactly 11 digits.\n");
            continue;
        }

        int check = 1;
        for (int j = 0; j < 11; j++)
        {
            if (!isdigit(accountnumber[j]))
            {
                check  = 0;
                break;
            }
        }
        if (!check)
        {
            printf("\tInvalid! Use digits only.\n");
            continue;
        }
        if (strcmp(accountnumber,"0000000000"))
        {
            printf("\t invalid account number !\n");
            continue;
        }

        int checkaccount = 0;
        for (int i = 0; i < 1000; i++)
        {
            if (account_no[i][0] != '\0' && strcmp(account_no[i], accountnumber) == 0)
            {
                printf("\t\t Note : please ensure user have right details.\n");
                printf("\n\n");
                printf("\tyour account details :%s\n",&account_no[i]);
                printf("\tholder name :%s\n",&account_holder[i]);
                printf("\tyour balance :%d\n",balance[i]);
                printf("\tplease wait......");
                printf("\n\n");
                
                int deposit;
                while (1)
                {
                    printf("\tEnter amount to withdraw : ");
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
                    if (balance[i]-= deposit <500)
                    {
                        printf("\tmin amount in the bank account will be 500 Rs.\n");
                    }
                    else
                    {
                        balance[i] -= deposit;
                    }
                    
                    printf("\tTransaction successful.\n");
                    printf("\tAccount Number : %s\n", account_no[i]);
                    printf("\tHolder Name    : %s\n", account_holder[i]);
                    printf("\tCurrent Balance: Rs.%d\n", balance[i]);
                    break;
                }
                checkaccount = 1;
                break;
            }
        }

        if (!checkaccount)
        {
            printf("\tAccount number does not exist.\n");
            continue;
        }

        break;
    }
}