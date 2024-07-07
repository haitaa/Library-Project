from rest_framework import serializers

from .models import Book
from api.serializers import AuthorPublicSerializer, CategoryPublicSerializer


class BookSerializer(serializers.ModelSerializer):
    author = AuthorPublicSerializer(read_only=True)
    category = CategoryPublicSerializer(read_only=True)
    class Meta:
        model = Book
        fields = [
            "id",
            "title",
            "author",
            "content",
            "category",
            "pages",
            "price",
        ]