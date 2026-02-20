from django.contrib import admin
from .models import CustomUser

# Register your models here.
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ("username", "id", "business_name")
    list_filter = ("username", "id", "business_name")
    search_fields = ("username", "id", "business_name")
admin.site.register(CustomUser, CustomUserAdmin)