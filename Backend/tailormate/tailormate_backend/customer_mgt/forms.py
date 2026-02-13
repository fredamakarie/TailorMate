from .models import Customer, Measurement
from django import forms

class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = '__all__'

class MeasurementForm(forms.ModelForm):
    class Meta:
        model = Measurement
        fields = '__all__'