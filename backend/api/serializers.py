from rest_framework import serializers


class UserPublicSerializer(serializers.Serializer):
    username = serializers.CharField(read_only=True)
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(read_only=True)
    last_name = serializers.CharField(read_only=True)
    email = serializers.CharField(read_only=True)

class BookPublicSerializer(serializers.Serializer):
    title = serializers.CharField(read_only=True)
    content = serializers.CharField(read_only=True)
    pages = serializers.CharField(read_only=True)
    price = serializers.IntegerField(read_only=True)