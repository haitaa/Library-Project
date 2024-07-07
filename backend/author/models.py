from django.db import models

from user.models import User

class Author(models.Model):
    user = models.ForeignKey(User, default=None, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"

