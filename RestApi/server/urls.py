from django.urls import re_path
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views

urlpatterns = [
    re_path('signup', views.signup),
    re_path('login', views.login),
    re_path('test_token', views.test_token),
    path('pets_list/<int:pk>/',views.PetsDetailView.as_view(), name='pets_list'),
    re_path('pets_list',views.PetsList.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
