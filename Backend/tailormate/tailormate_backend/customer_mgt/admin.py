from django.contrib import admin
from .models import Customer, Measurement

# Register your models here.
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("customer_name",)
    list_filter = ("customer_name",)
    search_fields = ("customer_name",)

class MeasurementAdmin(admin.ModelAdmin):
    list_display = ("customer_name",)
    list_filter = ("customer_name",)
    search_fields = ("customer_name",)

admin.site.register(Customer, CustomerAdmin)
admin.site.register(Measurement)