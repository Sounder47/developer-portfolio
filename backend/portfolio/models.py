from django.db import models

# Create your models here.
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"
    
class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()

    # Detailed project information
    problem = models.TextField(blank=True)
    solution = models.TextField(blank=True)
    features = models.JSONField(default=list)
    challenges = models.TextField(blank=True)
    learning = models.TextField(blank=True)

    # Technologies
    technologies = models.JSONField(default=list)

    # Links
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)

    # Metadata
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title