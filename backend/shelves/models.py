from django.db import models
from django.core.exceptions import ValidationError

from category.models import Category

class Shelves(models.Model):
    category = models.ForeignKey(Category, related_name="shelves", on_delete=models.CASCADE)
    name = models.CharField(max_length=10)

    class Meta:
        unique_together = ["category", "name"]

    def __str__(self):
        return f"{self.category.name} - {self.name}"
    
    def clean(self):
        if not self.name.startswith(str(self.category.id)):
            raise ValidationError(f"Shelf must start with '{self.category.id}'.")