from rest_framework.validators import UniqueValidator

from .models import User

unique_user_tcNo = UniqueValidator(queryset=User.objects.all(), lookup="iexact")
unique_user_username = UniqueValidator(queryset=User.objects.all(), lookup="exact")
unique_user_email = UniqueValidator(queryset=User.objects.all(), lookup="exact")