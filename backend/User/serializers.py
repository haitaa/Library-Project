from rest_framework import serializers
from datetime import datetime

from .validators import unique_user_tcNo
from .models import User


class UserSerializer(serializers.ModelSerializer):
    tcNo = serializers.CharField(validators=[unique_user_tcNo])
    class Meta:
        model = User
        fields = ["tcNo", "name", "surname", "age", "gender", "created_at"]