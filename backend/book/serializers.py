from rest_framework import serializers

from .models import Book
from api.serializers import AuthorPublicSerializer


class BookSerializer(serializers.ModelSerializer):
    author = AuthorPublicSerializer(read_only=True)
    class Meta:
        model = Book
        fields = [
            "id",
            "title",
            "author",
            "content",
            "pages",
            "price",
        ]