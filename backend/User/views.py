from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import User
from .serializers import UserSerializer


class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

user_create_view = UserCreateAPIView.as_view()

class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def perform_create(self, serializer):
        tcNo = serializer.validated_data.get('tcNo')
        name = serializer.validated_data.get('name')
        surname = serializer.validated_data.get('surname')
        serializer.save()

user_list_view = UserListAPIView.as_view()


class UserDetailAPIView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "id"

user_detail_view = UserDetailAPIView.as_view()

class UserUpdateAPIView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "id"

    def perform_update(self, serializer):
        instance = serializer.save()

user_update_view = UserUpdateAPIView.as_view()

class UserDestroyAPIView(generics.RetrieveDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "id"

    def perfrom_destroy(self, instance):
        super().perform_destroy(instance)

user_delete_view = UserDestroyAPIView.as_view()