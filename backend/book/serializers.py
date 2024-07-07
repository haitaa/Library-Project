from rest_framework import serializers

from .models import Book

class BookSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source="author.username", read_only=True)
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