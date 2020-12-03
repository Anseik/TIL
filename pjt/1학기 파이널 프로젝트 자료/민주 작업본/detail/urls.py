from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    path('', views.index, name="index"),
    path('getdata/', views.getdata, name="getdata"),
    path('detail/<int:movie_pk>/', views.detail, name="detail"),
    path('detail/<int:movie_pk>/comments/', views.movie_create_comment, name='movie_create_comment'),
    path('detail/<int:movie_pk>/comments/<int:comment_pk>/', views.movie_delete_comment, name='movie_delete_comment'),
    
]
