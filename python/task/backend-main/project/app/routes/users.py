from fastapi import APIRouter, FastAPI, Query
 
from app.schemas.schemas import User, UserUpdate , Login
from app.services.user_services import *
from app.utils.utils import read_hobbies 




appirouter = APIRouter(prefix="/users", tags=["Users"])
@appirouter.get("/hobbies")
def get_hobbies():
    data = read_hobbies()
    return data 



 

@appirouter.post("", status_code=201)
def create_user(user: User):
    return register_user(user)

@appirouter.get("")
def read_all_users():
    return get_all_users()   

# Specific string lookups placed higher up
 
@appirouter.post("/login")
def login(request: Login):
    return login_user(request.email, request.password)

@appirouter.get("/name/{name}")
def read_user_by_name(name: str):
    return get_user_by_name(name)

 
@appirouter.get("/{id}")
def read_user_by_id(id: str):
    return get_user_by_id(id)

@appirouter.put("/{id}")  
def modify_user(id: str, user_data: UserUpdate):
    return update_user(id, user_data)

@appirouter.delete("/{id}")
def remove_user(id: int):
    return soft_delete_user(id)

