from django.urls import path

from . import views

urlpatterns = [
    path('', views.user_list_create_view, name="user-list"),   
    path('<int:id>/', views.user_detail_view, name="user-detail"),
    path('<int:id>/update/', views.user_update_view, name="user-update"),
    path('<int:id>/delete/', views.user_delete_view, name="user-delete"),
]
