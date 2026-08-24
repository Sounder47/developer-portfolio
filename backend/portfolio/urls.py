from django.urls import path

from .views import (
    ContactMessageCreateView,
    ProjectListView,
    ProjectDetailView,
)

urlpatterns = [
    path("contact/", ContactMessageCreateView.as_view()),
    path("projects/", ProjectListView.as_view()),
    path("projects/<slug:slug>/", ProjectDetailView.as_view()),
]