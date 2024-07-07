from rest_framework import generics

from .models import Category
from .serializer import CategorySerializer


class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
category_list_create_view = CategoryListCreateAPIView.as_view()
    
class CategoryDetailAPIView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = "id"

category_detail_view = CategoryDetailAPIView.as_view()