from rest_framework import serializers
from .models import ForumPost, Comment, Event, Location

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('id', 'name')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'user', 'content', 'created_at')

class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('user', 'content')

class ForumPostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    location = LocationSerializer(read_only = True)

    class Meta:
        model = ForumPost
        fields = ('id', 'user', 'location', 'title', 'content', 'created_at', 'comments')

    def create(self, validated_data):
        location_data = validated_data.pop('location')
        comments_data = validated_data.pop('comments', [])
        
        location = Location.objects.create(**location_data)
        forum_post = ForumPost.objects.create(location=location, **validated_data)

        for comment_data in comments_data:
            Comment.objects.create(forum_post=forum_post, **comment_data)

        return forum_post
    
    def update(self, instance, validated_data):
        comments_data = validated_data.pop('comments', [])

        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()

        # Update comments
        instance.comments.all().delete()  # Delete existing comments
        for comment_data in comments_data:
            Comment.objects.create(forum_post=instance, **comment_data)

        return instance

# serializers.py

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['Event_Title', 'Event_Link', 'Event_Details', 'start_date','end_date', 'Location', 'Image_Source']

