from rest_framework import serializers

from .models import Author
from user.serializers import UserSerializer
from book.serializers import BookSerializer

class AuthorSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    books = BookSerializer(many=True, read_only=True)
    class Meta:
        model = Author
        fields = [
            "user",
            "books",
        ]