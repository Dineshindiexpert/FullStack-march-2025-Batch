class test:
    def __init__(self,roll_no,name,grade):
        self.roll_no = roll_no
        self.name = name,
        self.grade =grade
        
    def printvalue(self):
        
        print(self.roll_no,self.name,self.grade)
        
student = test(12,'dinesh',8.6)
student.printvalue()