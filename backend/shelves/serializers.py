from rest_framework import serializers

from .models import Shelves
from category.models import Category


class ShelvesSerializer(serializers.ModelSerializer):
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category')

    class Meta:
        model = Shelves
        fields = ["id", "name", "category_id"]
