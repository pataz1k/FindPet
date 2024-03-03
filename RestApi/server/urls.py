from django.urls import re_path
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views

urlpatterns = [
    re_path('signup', views.signup),
    re_path('login', views.login),
    re_path('test_token', views.test_token),

    path('users/<int:pk>/', views.UserDetail.as_view(), name='user_detail'),
    re_path('users', views.UsersList.as_view()),

    path('pets_list/<int:pk>/',views.PetsDetailView.as_view(), name='pet_detail'),
    re_path('pets_list',views.PetsList.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
