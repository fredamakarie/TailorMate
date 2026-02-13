from rest_framework import viewsets, permissions, filters
from .serializers import CustomerSerializer
from .models import Customer

# Create your views here.
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['customer_name']
    ordering = ['customer_name']  # default ordering



    def get_queryset(self):
        """Only show Customers belonging to the logged-in user."""
        user = self.request.user
        if user.is_authenticated:
            return Customer.objects.filter(author=user)
        # No authentication = no Customers
        return Customer.objects.none()


    def perform_create(self, serializer):
        # Automatically assign the logged-in user as the author
        serializer.save(author=self.request.user)
