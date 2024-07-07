from rest_framework import generics, serializers

from .models import Author
from .serializers import AuthorSerializer


class AuthorListCreateAPIView(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

    def perform_create(self, serializer):
        user = self.request.user
        if user.is_anonymous:
            raise serializers.ValidationError("You have to sign in!")
        elif user.is_authenticated:
            serializer.save()

author_list_create_view = AuthorListCreateAPIView.as_view()

class AuthorDetailAPIView(generics.RetrieveAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    lookup_field = "id"

author_detail_view = AuthorDetailAPIView.as_view()
