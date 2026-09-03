import uuid
from fastapi import HTTPException
from app.schemas.schemas import User, UserUpdate
from app.utils.utils import read_users, save_users, write_logs

def register_user(user: User):
    users = read_users()
    
   
    for u in users:
        if not u.get("is_deleted", False):
            if u["email"].lower() == user.email.lower():
                raise HTTPException(status_code=400, detail="Email already exists")
            if u["mobile"] == user.mobile:
                raise HTTPException(status_code=400, detail="Mobile already exists")
    
    try:
        user_dict = user.model_dump()
        user_dict["id"] = str(uuid.uuid4())
        user_dict["is_deleted"] = False
        
        users.append(user_dict)
        save_users(users)
        return {"message": "User Registered Successfully", "user": user_dict}
    except Exception as e:
        write_logs(e)
        raise HTTPException(status_code=500, detail="Internal Server Error")

def get_all_users():
    try:
        users = read_users()
       
        return [u for u in users if not u.get("is_deleted", False)]
    except Exception as e:
        write_logs(e)
        raise HTTPException(status_code=500, detail="Internal Server Error")

def get_user_by_id(user_id: str): # Kept as str to match UUID
    try:
        users = read_users()
        for u in users:
            if u["id"] == user_id and not u.get("is_deleted", False):
                return u
        raise HTTPException(status_code=404, detail="User Not Found")
    except HTTPException:
        raise # Reraise planned API exceptions
    except Exception as e:
        write_logs(e)
        raise HTTPException(status_code=500, detail="Internal Server Error")

def login_user(email: str, password: str):
    try:
        users = read_users()
        print(users)
        for u in users:
            if u["email"].lower() == email.lower() and u["password"] == password.strip() and not u.get("is_deleted", False):
                return {"id ":u["id"],
                        "email" : u["email"]}
        raise HTTPException(status_code=404, detail="User Not Found")
    except HTTPException:
        raise
    except Exception as e:
        write_logs(e)
        raise HTTPException(status_code=500, detail="Internal Server Error")

def get_user_by_name(name: str):
    try:
        users = read_users()
        for u in users:
            if u["name"].lower() == name.lower() and not u.get("is_deleted", False):
                return u
        raise HTTPException(status_code=404, detail="User Not Found")
    except HTTPException:
        raise
    except Exception as e:
        write_logs(e)
        raise HTTPException(status_code=500, detail="Internal Server Error")

def soft_delete_user(user_id: str): # Fixed type from int to str
    try:
        users = read_users()
        for u in users:
            if u["id"] == user_id and not u.get("is_deleted", False):
                u["is_deleted"] = True
                save_users(users)
                return {"message": "User Deleted Successfully"}
        raise HTTPException(status_code=404, detail="User Not Found")
    except HTTPException:
        raise
    except Exception as e:
        write_logs(e)
        raise HTTPException(status_code=500, detail="Internal Server Error")

def update_user(user_id: str, user_data: UserUpdate): # Fixed type from int to str
    users = read_users()
    target_user = None
    
    for u in users:
        if u["id"] == user_id and not u.get("is_deleted", False):
            target_user = u
            break
            
    if not target_user:
        raise HTTPException(status_code=404, detail="User Not Found")
        
    update_dict = user_data.model_dump(exclude_unset=True)
    
    
    for u in users:
        if u["id"] != user_id and not u.get("is_deleted", False):
            if "email" in update_dict and u["email"].lower() == update_dict["email"].lower():
                raise HTTPException(status_code=400, detail="Email already exists")
            if "mobile" in update_dict and u["mobile"] == update_dict["mobile"]:
                raise HTTPException(status_code=400, detail="Mobile already exists")
                
    try:
        for key, value in update_dict.items():
            target_user[key] = value
            
        save_users(users)
        return {"message": "User Updated Successfully", "user": target_user}
    except Exception as e:
        write_logs(e)
        raise HTTPException(status_code=500, detail="Internal Server Error")
