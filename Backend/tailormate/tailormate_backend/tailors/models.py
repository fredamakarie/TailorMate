from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):

    business_name = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    bio = models.TextField(blank=True, null=True)
    profile_photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)

    def __str__(self):
        return self.username