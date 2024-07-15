from django.urls import path

from . import views

urlpatterns = [
    path("", views.book_list_view, name="book-list"),
    path("<int:id>/", views.book_detail_view, name="book-detail"),
    path("<int:id>/update/", views.book_update_view, name="book-update"),
    path("<int:id>/delete/", views.book_delete_view, name="book-delete"),
]