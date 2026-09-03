import json
import os

FILE_PATH = "app/database/users.json"
HOOBIE="app/database/hoobies.json"
logs = 'app/logs/logs.txt'

def read_users() -> list:
    with open(FILE_PATH, "r") as f:
        return json.load(f)
     

def save_users(users: list) -> None:
    with open(FILE_PATH, "w") as f:
        json.dump(users, f, indent=4)
        


def read_hobbies() -> list:
    with open(HOOBIE, "r") as file:
        data = json.load(file)
        print(data)
        return data
    


def write_logs(data):
    with open(logs,"a") as file:
        data = file.write(data + "\n")
        
        return data