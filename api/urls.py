from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="Notes"),
    path('notes/<str:pk>/update', views.updateNote, name="update-note"),

    path('notes/<str:pk>', views.getNote, name="Note"),
]