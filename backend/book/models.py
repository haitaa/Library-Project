from django.db import models

from user.models import User

class Book(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=1000)
    author = models.ForeignKey(User, default=None, on_delete=models.CASCADE)
    pages = models.IntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=10)


    def __str__(self):
        return self.title



