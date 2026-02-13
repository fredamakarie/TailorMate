from django.db import models

# Create your models here.
class Customer(models.Model):
    customer_name = models.CharField(max_length=150)
    customer_number = models.CharField(max_length=20)
    customer_address = models.CharField(max_length=1000)
    customer_photo = models.ImageField(upload_to="profile_photos/", null=True, blank=True)
    gender = models.CharField(max_length=10)

class Measurement(models.Model):
    customer_name = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer')
    bust = models.CharField(max_length=20)
    waist = models.CharField(max_length=20)
    hips = models.CharField(max_length=20)
    shoulder_length = models.CharField(max_length=20)
    sleeve_length = models.CharField(max_length=20)