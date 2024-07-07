from rest_framework import serializers

from .models import Book
from category.models import Category
from api.serializers import AuthorPublicSerializer, CategoryPublicSerializer


class BookSerializer(serializers.ModelSerializer):
    author = AuthorPublicSerializer(read_only=True)
    category = CategoryPublicSerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), write_only=True, source="categories")
    class Meta:
        model = Book
        fields = [
            "id",
            "title",
            "author",
            "content",
            "category",
            "category_id",
            "pages",
            "price",
        ]