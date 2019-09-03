from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # url(r'^org/', views.org, name='org'),  # The original home page. Only used for testing
    # url(r'^search/artist$', views.search_artist, name='search_artist'),

]
