from rest_framework import serializers

from user.models import User
from author.models import Author
from category.models import Category
from book.models import Book
from shelves.models import Shelves



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

class ShelvesPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shelves
        fields = [
            "id",
            "name",
            "category_id",
        ]

class BookPublicSerializer(serializers.ModelSerializer):
    author = AuthorPublicSerializer(read_only=True)
    shelves = ShelvesPublicSerializer(many=True, read_only=True)
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
            "shelves",
        ]

