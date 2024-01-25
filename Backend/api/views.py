from rest_framework import generics, permissions
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from django.db import IntegrityError
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework import generics, permissions
from .models import ForumPost, Comment
from .serializers import ForumPostSerializer, CommentSerializer
from .models import Event
from .serializers import EventSerializer
from .permissions import IsOwnerOrReadOnly
import csv
from .models import Event
from datetime import datetime

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            user = User.objects.create_user(data['username'], password=data['password'])
            user.save()
            token, created = Token.objects.get_or_create(user=user)
            return JsonResponse({'token': str(token)}, status=201)
        except IntegrityError:
            return JsonResponse({'error': 'That username has already been taken. Please choose a new username'}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        user = authenticate(request, username=data['username'], password=data['password'])
        if user is None:
            return JsonResponse({'error':'Could not login. Please check username and password'}, status=400)
        else:
            try:
                token = Token.objects.get(user=user)
            except:
                token = Token.objects.create(user=user)
            return JsonResponse({'token':str(token)}, status=200)


class LocationPostsView(generics.ListAPIView):
    serializer_class = ForumPostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        location_id = self.kwargs.get('pk')
        return ForumPost.objects.filter(location__id=location_id)

class CreatePost(generics.CreateAPIView):
    serializer_class = ForumPostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        location_id = self.kwargs.get('pk')
        serializer.save(user=self.request.user, location_id=location_id)

class PostRetrieveDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer
    permission_classes = [permissions.IsAuthenticated,IsOwnerOrReadOnly]
    lookup_field = 'id'

class CreateComment(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        post_id = self.kwargs.get('post_id')
        serializer.save(user=self.request.user, post_id=post_id)

class CommentRetrieveDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated,IsOwnerOrReadOnly]
    lookup_field = 'id'


#Events


class EventListAPIView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer



def import_events_from_csv(request):
    with open('C:/Users/sriva/madrasvaasi/Backend/event_data.csv') as file:
        csv_reader = csv.DictReader(file)
        #next(csv_reader)
        for row in csv_reader:
            # date = row['Date']
            # print(date)
            # date_parts = [part.strip() for part in date.split('-')]
            # print(date_parts)
            # start_date = datetime.strptime(date_parts[0], "%a %d %b %Y").strftime("%Y-%m-%d")
            # end_date = datetime.strptime(date_parts[1], "%a %d %b %Y").strftime("%Y-%m-%d")
            date = row.get('Date', '')  # Use get() to handle missing 'Date' key
            date_parts = [part.strip() for part in date.split('-')] if date else []

            if date_parts:
                try:
                    start_date = datetime.strptime(date_parts[0], "%a %d %b %Y").strftime("%Y-%m-%d")
                    end_date = datetime.strptime(date_parts[-1], "%a %d %b %Y").strftime("%Y-%m-%d")
                except ValueError as e:
                    print(f"Error parsing date for row {row}: {e}")
                    start_date = end_date = None
            Event.objects.create(
                Event_Title=row['Event Title'],
                Event_Link=row['Event Link'],
                Event_Details=row['Event Details'],
                start_date=start_date,
                end_date=end_date,
                Location=row['Location'],
                Image_Source=row['Image Source']
            )
    return JsonResponse({'message': 'Events imported successfully'})