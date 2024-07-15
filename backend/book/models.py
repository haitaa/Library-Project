from django.db import models

from author.models import Author
from category.models import Category
from shelves.models import Shelves


class Book(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=1000)
    author = models.ForeignKey(Author, default=None, related_name="books", on_delete=models.CASCADE)
    pages = models.IntegerField()
    category = models.ForeignKey(Category, default=None, related_name="categories", on_delete=models.CASCADE)
    shelf = models.ForeignKey(Shelves, default=None, related_name="shelves", on_delete=models.CASCADE)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    book_image = models.ImageField(null=True, blank=True, upload_to="images/")


    def __str__(self):
        return self.title


