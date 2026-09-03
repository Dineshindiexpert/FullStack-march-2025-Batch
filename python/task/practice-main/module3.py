class wallet:
    def __init__(self):
        self.__balance = 0
        
    
    def addmoney(self,amount,currency):
        if (currency =="USD"):
            self.__balance=self.__balance+amount*85 
        else:
            self.__balance = self.__balance + amount
        print("money added successfully",self.__balance)
            
    def pay(self,amount):
        self.__balance = self.__balance - amount
        
    def checkamount(self):
        print("now ur amount wiil be ",self.__balance)
        
        
user = wallet()

user.addmoney(500,"inr")

user.pay(100)
user.checkamount()


            