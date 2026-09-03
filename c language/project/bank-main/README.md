Bank Management System
Project Overview

The Bank Management System is a console-based application built in C programming language that allows users to manage bank accounts efficiently. It provides functionalities for creating accounts, depositing and withdrawing money, checking balances, and performing other banking operations.

This system is ideal for learning basic file handling, menu-driven programming, and fundamental banking operations in C.

Features
Create Account – Add new bank accounts with customer details.
Deposit Money – Deposit funds into an existing account.
Withdraw Money – Withdraw funds from an account with balance verification.
Check Balance – View the current balance of a specific account.
Menu-Driven Interface – User-friendly interface to navigate between options.
Persistent Storage – Uses files to store account information for data persistence.
File Structure
bank-management-system/
│
├── checkbalance.c       # Function to check the balance of an account
├── choice.c             # Menu and user choice handling
├── choice.exe           # Compiled executable (Windows)
├── createaccount.c      # Create new bank accounts
├── deposite.c           # Deposit money into an account
├── withdraw.c           # Withdraw money from an account
├── bankmangment.c       # Main program integrating all functionalities
├── README.md            # Project documentation
├── dinesh/              # Folder with additional source files or data
└── bank/README.md       # Optional subproject documentation
Technologies Used
C Programming Language – Core language for all functionalities.
File Handling – For persistent storage of account information.
Console-based Interface – Simple and interactive text-based menu system.
Setup & Usage

Compile the source code:

gcc bankmangment.c createaccount.c deposite.c withdraw.c checkbalance.c choice.c -o bankmanagement

Run the program:

./bankmanagement      # Linux/Mac
bankmanagement.exe    # Windows
Follow on-screen menu to create accounts, deposit, withdraw, and check balances.
How to Use
Start the program.
Select a menu option:
1 – Create Account
2 – Deposit Money
3 – Withdraw Money
4 – Check Balance
5 – Exit
Enter required details (name, account number, amount, etc.).
Perform multiple transactions as needed.
Exit the program when finished.
Credits
Author: Dinesh (Dineshindiexpert)
Learning Reference: C programming and file handling tutorials.
License

This project is open-source and free to use for learning purposes.

