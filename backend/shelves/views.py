from rest_framework import generics

from .models import Shelves
from .serializers import ShelvesSerializer


class ShelvesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Shelves.objects.all()
    serializer_class = ShelvesSerializer

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
shelves_list_create_view = ShelvesListCreateAPIView.as_view()


class ShelvesDetailAPIView(generics.RetrieveAPIView):
    queryset = Shelves.objects.all()
    serializer_class = ShelvesSerializer
    lookup_field = "id"

shelves_detail_view = ShelvesDetailAPIView.as_view()
