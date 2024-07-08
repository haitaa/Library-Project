from django.urls import path

from . import views


urlpatterns = [
    path("", views.shelves_list_create_view, name="shelf-list"),
    path("<int:id>/", views.shelves_detail_view, name="shelf-detail"),
]
