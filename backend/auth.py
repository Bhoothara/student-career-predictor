from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models import SessionLocal, User
from pydantic import BaseModel

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set your frontend URL here if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Schemas
class UserLogin(BaseModel):
    email: str
    password: str

class UserSignup(UserLogin):
    name: str

class UserProfileUpdate(BaseModel):
    name: str
    email: str
    password: str

# DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Routes
@app.get("/")
def home():
    return {"message": "Backend is working"}

@app.post("/auth/signup")
def signup(user: UserSignup, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")

    new_user = User(name=user.name, email=user.email, password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "Signup successful"}

@app.post("/auth/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user.email).first()
    if not existing or existing.password != user.password:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return {"message": "Login successful", "id": existing.id, "name": existing.name, "email": existing.email}

@app.get("/auth/profile/{user_id}")
def get_profile(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"id": user.id, "name": user.name, "email": user.email, "password": user.password}

@app.put("/auth/profile/{user_id}")
def update_profile(user_id: int, updated: UserProfileUpdate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    user.name = updated.name
    user.email = updated.email
    user.password = updated.password

    db.commit()
    db.refresh(user)
    return {"message": "Profile updated successfully", "id": user.id, "name": user.name, "email": user.email}
