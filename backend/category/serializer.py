from rest_framework import serializers

from .models import Category
from api.serializers import BookPublicSerializer



class CategorySerializer(serializers.ModelSerializer):
    books = BookPublicSerializer(many=True, read_only=True, source="categories")
    class Meta:
        model = Category
        fields = ["id", "name", "description", "books"]