from pydantic import BaseModel, EmailStr, Field, field_validator
from typing import List, Optional
from datetime import date # Import date validation

class User(BaseModel):
    name: str = Field(..., min_length=1)   
    email: EmailStr
    
    mobile: str = Field(..., pattern=r"^\d{10}$") 
    address: Optional[str] = Field(None) 
    password : str =Field(..., description="Strong application password")
    qualification: List[str] = Field(..., min_length=1)
    hobbies: List[str] = Field(..., min_length=1)
    dob: str = Field(..., description="YYYY-MM-DD format") # Added missing field
    is_deleted: bool = False



class Login(BaseModel):
    email : EmailStr
    password : str  
    
    

class UserUpdate(BaseModel):
    
    name: Optional[str] = Field(None, min_length=1)
    email: Optional[EmailStr] = None
    mobile: Optional[str] = Field(None, min_length=10, max_length=10, pattern=r"^\d{10}$")
    address: Optional[str] = Field(None, min_length=1)
    qualification: Optional[List[str]] = Field(None, min_length=1)

    hobbies: Optional[List[str]] = None
    
    @field_validator("mobile")
    @classmethod
    def validate_mobile(cls, value: Optional[str]):
        if value is not None:
            if not value.isdigit():
                raise ValueError("Mobile must contain only digits")
            if len(value) != 10:
                raise ValueError("Mobile must be exactly 10 digits")
        return value
