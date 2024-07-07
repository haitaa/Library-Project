from django.urls import path

from . import views

urlpatterns = [
    path("", views.author_list_create_view, name="author-list"),
    path("<int:id>/", views.author_detail_view, name="author-detail"),
]
