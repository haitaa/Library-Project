from rest_framework import serializers

from .validators import unique_user_tcNo, unique_user_username, unique_user_email
from .models import User


class UserSerializer(serializers.ModelSerializer):
    tcNo = serializers.CharField(validators=[unique_user_tcNo])
    username = serializers.CharField(validators=[unique_user_username])
    email = serializers.CharField(validators=[unique_user_email])
    gender = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = ["tcNo", "email", "username", "first_name", "last_name", "age", "gender"]
    
