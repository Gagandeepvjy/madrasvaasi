from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path("api/signup",views.signup),
    path("api/login",views.login),

    #Forum
    path("api/forum/location/<int:pk>",views.LocationPostsView.as_view()),
    path("api/forum/location/<int:pk>/createPost",views.CreatePost.as_view(),name="createpost"),
    path("api/forum/location/<int:location_id>/<int:id>",views.PostRetrieveDestroy.as_view(),name="deletepost"),
    path("api/forum/location/<int:location_id>/<int:post_id>/createcomment",views.CreateComment.as_view(),name="createcomment"),
    path("api/forum/location/<int:location_id>/<int:post_id>/<int:id>",views.CommentRetrieveDestroy.as_view()),

    #Events
    path("api/events/month",views.MonthEventsView.as_view()),
    path("api/events/month/<int:pk>",views.DisplayEventView.as_view())

]