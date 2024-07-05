from django.db import models
from django.utils.translation import gettext_lazy as _

class User(models.Model):
    class Genders(models.TextChoices):
        MALE = "male", _('Male'),
        FEMALE = "female", _("Female"),
        OTHER = "other", _("Other"),
        NOT_PROVIDED = "Not Provided", _("Not Provided")

    tcNo = models.CharField(max_length=11, unique=True)
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    age = models.CharField(max_length=3)
    gender = models.TextField(
        max_length=15, 
        choices=Genders.choices, 
        default=Genders.NOT_PROVIDED
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} {self.surname}"