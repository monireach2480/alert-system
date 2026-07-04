from pydantic import BaseModel, EmailStr

class InquiryCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    message: str

class InquiryResponse(BaseModel):
    id: int
    full_name: str
    email: str
    phone: str
    message: str

    class Config:
        from_attributes = True