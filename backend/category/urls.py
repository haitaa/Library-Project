from django.urls import path

from . import views

urlpatterns = [
    path("", views.category_list_create_view, name="category-list"),
    path("<int:id>/", views.category_detail_view, name="category-detail")
]
