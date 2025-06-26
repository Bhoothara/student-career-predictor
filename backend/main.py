from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models import SessionLocal, User
from pydantic import BaseModel

app = FastAPI()

# CORS so frontend can connect to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Schemas
class UserBase(BaseModel):
    email: str
    password: str

class UserCreate(UserBase):
    name: str

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def home():
    return {"message": "Backend is working"}

@app.post("/auth/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")
    
    new_user = User(
        name=user.name,
        email=user.email,
        password=user.password  # For production, use password hashing
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "Signup successful"}

@app.post("/auth/login")
def login(user: UserBase, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user.email).first()
    if not existing or existing.password != user.password:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return {"message": "Login successful", "name": existing.name}
