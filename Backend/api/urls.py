from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path("api/signup",views.signup),
    path("api/login",views.login),

    #Forum
    # path("api/forum/location",views.locationView.as_view(),name="locations"),
    # path("api/forum/location/<int:pk>",views.LocationPostsView.as_view()),
    # path("api/forum/location/<int:pk>/createPost",views.CreatePost.as_view(),name="createpost"),
    # path("api/forum/location/<int:location_id>/<int:id>",views.PostRetrieveDestroy.as_view(),name="deletepost"),
    # path("api/forum/location/<int:location_id>/<int:post_id>/createcomment",views.CreateComment.as_view(),name="createcomment"),
    # path("api/forum/location/<int:location_id>/<int:post_id>/<int:id>",views.CommentRetrieveDestroy.as_view()),
    path('api/locations/', views.LocationListView.as_view(), name='location-list'),
    path('api/locations/<int:location_id>',views.LocationPostCountView.as_view(), name='location-post-count'),
    path('api/locations/<int:location_id>/posts/', views.PostListView.as_view(), name='post-list'),
    path('api/locations/<int:location_id>/posts/<int:post_id>/', views.PostDetailView.as_view(), name='post-detail'),
    path('api/locations/<int:location_id>/posts/<int:post_id>/comments/', views.CommentListView.as_view(), name='comment-list'),
    path('api/locations/<int:location_id>/posts/<int:post_id>/comments/<int:pk>/', views.CommentDetailView.as_view(), name='comment-detail'),

    #Events
    path('import-csv/', views.import_events_from_csv, name='import_csv'),
    path('api/events/', views.EventListAPIView.as_view(), name='event_list_api'),

]