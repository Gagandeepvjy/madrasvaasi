from django.db import models
from django.contrib.auth import get_user_model

class Location(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class ForumPost(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    post = models.ForeignKey(ForumPost, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.post.title}"

class MonthEvent(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

class Event(models.Model):
    month = models.ForeignKey(MonthEvent, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.name