from django.contrib import admin

from .models import ContactMessage, Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "slug",
        "featured",
        "created_at",
    )

    list_filter = (
        "featured",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
        "technologies",
    )

    prepopulated_fields = {
        "slug": ("title",),
    }

    ordering = (
        "-created_at",
    )


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "message",
    )

    ordering = (
        "-created_at",
    )