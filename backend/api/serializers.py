from rest_framework import serializers

from user.models import User
from author.models import Author
from category.models import Category
from book.models import Book

class UserPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']

class AuthorPublicSerializer(serializers.ModelSerializer):
    user = UserPublicSerializer(read_only=True)

    class Meta:
        model = Author
        fields = ['user']

class CategoryPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name", "description"]

class BookPublicSerializer(serializers.ModelSerializer):
    author = AuthorPublicSerializer(read_only=True)
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
