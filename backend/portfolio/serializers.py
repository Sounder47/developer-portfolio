from rest_framework import serializers
from .models import ContactMessage, Project


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "name", "email", "message", "created_at"]
        read_only_fields = ["id", "created_at"]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "problem",
            "solution",
            "features",
            "technologies",
            "challenges",
            "learning",
            "github_url",
            "live_url",
            "featured",
            "created_at",
        ]