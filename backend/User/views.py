from rest_framework import generics

from .models import User
from .serializers import UserSerializer


class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        tcNo = serializer.validated_data.get('tcNo')
        name = serializer.validated_data.get('name')
        surname = serializer.validated_data.get('surname')
        serializer.save()

user_list_create_view = UserListCreateAPIView.as_view()
