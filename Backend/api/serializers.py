from rest_framework import serializers
from .models import ForumPost, Comment, Event, Location

# serializers.py

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['Event_Title', 'Event_Link', 'Event_Details', 'start_date','end_date', 'Location', 'Image_Source']

#forum
        
from rest_framework import serializers
from .models import Location, ForumPost, Comment

class LocationSerializer(serializers.ModelSerializer):
    post_count = serializers.SerializerMethodField()
    class Meta:
        model = Location
        fields = ('id', 'name', 'post_count')

    def get_post_count(self, obj):
        return ForumPost.objects.filter(location=obj).count()

class LocationPostCountSerializer(serializers.ModelSerializer):
    post_count = serializers.SerializerMethodField()

    class Meta:
        model = Location
        fields = ('id', 'name', 'post_count')

    def get_post_count(self, obj):
        return ForumPost.objects.filter(location=obj).count()

class CommentSerializer(serializers.ModelSerializer):
    #user_name = serializers.CharField(source='user.username', read_only=True)
    class Meta:
        model = Comment
        fields = ('id', 'user', 'post', 'content', 'created_at')

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['location_id'] = instance.post.location.id  # Include the location ID in the serialized data
        return data
        

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    #user_name = serializers.CharField(source='user.username', read_only=True)
    class Meta:
        model = ForumPost
        fields = ('id', 'user', 'location', 'title', 'content', 'created_at', 'comments')

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['location_id'] = instance.location.id  # Include the location ID in the serialized data
        return data
